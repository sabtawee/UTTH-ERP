const { getMesPool, getErpPool, getLocalPool } = require('../../configs/db.mssql');


exports.getLocalUsers = async () => {
    const pool = await getLocalPool();
    const result = await pool.request().query('select * from employees');
    return result.recordset;
}