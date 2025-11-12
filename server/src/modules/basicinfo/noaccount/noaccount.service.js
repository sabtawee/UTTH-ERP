const { pool, sql, ready } = require('../../../config/db.mssql');

// === Combos / helpers (read-only) ===
exports.getLines = async () => {
  await ready;
  const rs = await pool.request().query(`
    select rtrim(LineId) as LineId, LineName, rtrim(LineId)+'_'+LineName as Names
    from dbo.ClassLine with (nolock)
  `);
  return rs.recordset;
};

exports.getIssueTypes = async () => {
  await ready;
  const rs = await pool.request().query(`
    select cast(itypecode as varchar(10)) as itypecodes, itypename,
           rtrim(cast(itypecode as varchar(10)))+'_'+itypename as Names
    from dbo.classisstype with (nolock)
    where itypecode not in (8,9) order by itypecode
  `);
  return rs.recordset;
};

exports.getStatuses = async () => {
  await ready;
  const rs = await pool.request().query(`
    select cast(stsnum as varchar(10)) as stsnums, stsname,
           rtrim(cast(stsnum as varchar(10)))+'_'+stsname as Names
    from dbo.classstatus with (nolock) order by stsnum
  `);
  return rs.recordset;
};

exports.getLayers = async (partnum) => {
  await ready;
  const rs = await pool.request()
    .input('partnum', sql.VarChar(100), partnum)
    .query(`
      select cast(t1.Layer as varchar(10)) as Layer, t2.LayerName,
             rtrim(cast(t1.Layer as varchar(10)))+'_'+t2.LayerName as Names
      from prodbom t1 with (nolock), NumOfLayer t2 with (nolock)
      where partnum=@partnum and t1.layer=t2.layer
      order by t1.Layer
    `);
  return rs.recordset;
};

exports.getDcMark = async (partnum, layer) => {
  await ready;
  const rs = await pool.request()
    .input('partnum', sql.VarChar(100), partnum)
    .input('layer', sql.VarChar(10), String(layer))
    .query(`select markd from prodbasic with (nolock) where partnum=@partnum and layer=@layer`);
  return rs.recordset[0] ?? null;
};

exports.getRoutes = async (partnum, revision='A', layer) => {
  await ready;
  const rs = await pool.request()
    .input('partnum', sql.VarChar(100), partnum)
    .input('revision', sql.VarChar(10), revision)
    .input('layer', sql.VarChar(10), String(layer))
    .query(`
      select serialnum, cast(serialnum as varchar(10)) as SerialNums, ProcCode,
             rtrim(cast(SerialNum as varchar(10)))+'_'+ProcCode as Names
      from Eng_vProdRoute
      where partnum=@partnum and Revision=@revision and layer=@layer
      union select 88,'88','P8','88_P8'
      order by serialnum, proccode
    `);
  return rs.recordset;
};

exports.getRtSerial = async (partnum) => {
  await ready;
  const rs = await pool.request()
    .input('partnum', sql.VarChar(100), partnum)
    .query(`
      select serialnum
      from eng_vprodroute with (nolock)
      where partnum=@partnum and layer=0 and proccode='RT' and proctype=2
    `);
  return rs.recordset[0] ?? null;
};

exports.checkDcControl = async (partnum) => {
  await ready;
  const rs = await pool.request()
    .input('partnum', sql.VarChar(100), partnum)
    .query(`
      select partnum
      from dbo.PDL_DCcontrol with (nolock)
      where @partnum like partnum + '%'
        and @partnum not in (select partnum from dbo.PDL_DCUncontrol with (nolock))
    `);
  return rs.recordset.length > 0;
};

// === Flow หลัก: ให้ SP ฝั่ง DB ทำงานต่อทั้งหมด ===
exports.createNoAccount = async (payload) => {
  const {
    LineID, partnum, Revision='A', isstype, Layer,
    SerialNum, LotType, Qnty, EmpID, custlotnum='',
    memo='', datecode='', doCustLot=true
  } = payload;

  await ready;
  const tx = new sql.Transaction(pool);
  await tx.begin();

  try {
    // 1) สร้าง "有料無帳" → คืน PaperNo / LotNum
    const rs = await new sql.Request(tx)
      .input('LineID',    sql.VarChar(20),  String(LineID))
      .input('partnum',   sql.VarChar(100), String(partnum).trim())
      .input('Revision',  sql.VarChar(5),   String(Revision))
      .input('isstype',   sql.VarChar(10),  String(isstype))
      .input('Layer',     sql.VarChar(10),  String(Layer))
      .input('SerialNum', sql.VarChar(10),  String(SerialNum))
      .input('LotType',   sql.VarChar(10),  String(LotType))
      .input('Qnty',      sql.VarChar(20),  String(Qnty))
      .input('EmpID',     sql.VarChar(50),  String(EmpID))
      .input('custlotnum',sql.VarChar(50),  String(custlotnum))
      .input('memo',      sql.VarChar(200), String(memo))
      .input('datecode',  sql.VarChar(20),  String(datecode))
      .execute('dbo.PDL_SetNoAccount');

    const row = rs.recordset?.[0];
    if (!row) throw new Error('PDL_SetNoAccount returned no rows');
    const PaperNo = String(row.PaperNo).trim();
    const LotNum  = String(row.LotNum).trim();

    // 2) (ถ้ามี) ให้ SP ฝั่ง DB ทำ SAP ต่อเอง
    //    - ถ้าองค์กรคุณมี SP wrapper เช่น: dbo.PDL_SAP_OrderProcess @PaperNo
    //      ให้เปิดคอมเมนต์ด้านล่าง
    // await new sql.Request(tx)
    //   .input('PaperNo', sql.VarChar(50), PaperNo)
    //   .execute('dbo.PDL_SAP_OrderProcess');

    // 3) (เงื่อนไขเดิม) ตั้ง 燿華短批 ผ่าน SP เดิม
    let CustLotNum = null;
    if (doCustLot) {
      const rs2 = await new sql.Request(tx)
        .input('Lotnum', sql.VarChar(50), LotNum)
        .input('Layer',  sql.VarChar(10), String(Layer))
        .input('Qnty',   sql.VarChar(20), String(Qnty))
        .input('EmpId',  sql.VarChar(50), String(EmpID))
        .execute('dbo.PDL_SetCustLotNum');
      CustLotNum = rs2.recordset?.[0]?.CustLotNum ?? null;
    }

    await tx.commit();
    return { PaperNo, LotNum, CustLotNum };
  } catch (e) {
    try { await tx.rollback(); } catch {}
    throw e;
  }
};
