const { sql, pool, ready } = require('../../config/db.mssql');

exports.listUsergroups = async () => {
  await ready;
  const rs = await pool.request().query("SELECT * FROM PDL_OutPutLine(NOLOCK) WHERE ProcCode = 'CT' and LineID = '2'");
  return rs.recordset;
};

