const { 
  createErpConnection, 
  closeErpConnection,
  // Legacy fallback
  getErpPool 
} = require('../../config/db.mssql');

exports.getErp_yspartnum = async (partnum, revision, layer) => {
    let erpConn = null;
    try {
        // 🔌 เปิดการเชื่อมต่อใหม่
        erpConn = await createErpConnection();
        
        // 📊 Query 1: ดึงข้อมูล hole data
        const result = await erpConn.query(`
            select partnum,FW,NO,Hole,HoleL,HoleN,PTH,TsoDow,LianKong,ldhole,Slow,TsoLength,offset 
            from prodhole(nolock) 
            where partnum='${partnum}' and revision='${revision}' and layer='${layer}' 
            order by HoleL
        `);

        // 📊 Query 2: ดึงข้อมูล detail data
        const result2 = await erpConn.query(`
            select a.partnum,a.revision,a.layer,a.customerpartnum,a.GrossAreaLeng,a.GrossAreaWid,a.ProdLeng,a.ProdWid, 
                   b.layername,a.type,a.drillpn
            from prodbasic a(nolock), numoflayer b(nolock)
            where a.partnum = '${partnum}' and a.revision = '${revision}' and a.layer=b.layer
        `);
            
        return { 
            success: true,
            holeData: result, 
            dtldata: result2 
        };

    } catch (error) {
        console.error('❌ Error fetching ERP yellowsheets:', error);
        throw new Error(`Database query failed: ${error.message}`);
    } finally {
        // 🔒 ปิดการเชื่อมต่อเสมอ (ไม่ว่าจะสำเร็จหรือไม่)
        if (erpConn) {
            await closeErpConnection(erpConn);
        }
    }
};

exports.getErp_yssearh = async (partnum, revision, layer) => {
    let erpConn = null;
    try {
        // 🔌 เปิดการเชื่อมต่อใหม่
        erpConn = await createErpConnection();
        
        // 📊 Query: ดึงข้อมูลการค้นหา
        const result = await erpConn.query(`
            SELECT t1.PART_NBR AS 'Partnum', t1.REVISION AS 'Foreword', t1.LAYER AS 'Layer',
                   t1.KIND AS 'Type', t1.VERSION, n.LayerName,
                   t1.OUT_L AS 'Cutting Length', t1.OUT_W AS 'Cutting Width', 
                   t1.MHX1 AS 'MH-X1', t1.MHY1 AS 'MH-Y1', t1.MHX2 AS 'MH-X2', t1.MHY2 AS 'MH-Y2',
                   t1.MHX3 AS 'MH-X3', t1.MHY3 AS 'MH-Y3', t1.MHX4 AS 'MH-X4', t1.MHY4 AS 'MH-Y4',
                   t1.MHX5 AS 'MH-X5', t1.MHY5 AS 'MH-Y5',
                   t1.STARTX AS 'Zero Point-X', t1.STARTY AS 'Zero Point-Y',
                   t1.QUADRANT, t1.NOTE AS 'Remarks'
            FROM dl_drilmst t1 WITH (NOLOCK)
            LEFT JOIN NumofLayer n WITH (NOLOCK) ON t1.LAYER = n.Layer
            WHERE t1.PART_NBR='${partnum}' and t1.REVISION='${revision}' and t1.LAYER='${layer}' 
            ORDER BY t1.PART_NBR
        `);

        return { 
            success: true,
            holeData: result 
        };

    } catch (error) {
        console.error('❌ Error fetching ERP search data:', error);
        throw new Error(`Database query failed: ${error.message}`);
    } finally {
        // 🔒 ปิดการเชื่อมต่อเสมอ (ไม่ว่าจะสำเร็จหรือไม่)
        if (erpConn) {
            await closeErpConnection(erpConn);
        }
    }
};
