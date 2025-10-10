const sql = require('mssql');
require('dotenv').config();

//MES DB Connection
const mesConfig = {
  user: process.env.MES_DB_USER,
  password: process.env.MES_DB_PASS,
  server: process.env.MES_DB_HOST,
  database: process.env.MES_DB_NAME,
  port: Number(process.env.MES_DB_PORT || 1433),
  options: { encrypt: false, trustServerCertificate: true, enableArithAbort: true },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
};

//ERP DB Connection
const erpConfig = {
  user: process.env.ERP_DB_USER,
  password: process.env.ERP_DB_PASS,
  server: process.env.ERP_DB_HOST,
  database: process.env.ERP_DB_NAME,
  port: Number(process.env.ERP_DB_PORT || 1433),
  options: { encrypt: false, trustServerCertificate: true, enableArithAbort: true },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
};


const mesPool = new sql.ConnectionPool(mesConfig);
const erpPool = new sql.ConnectionPool(erpConfig);

const mesPoolConnect = mesPool.connect().then(() => {
  console.log('Connected to MES SQL Server');
  return mesPool;
}).catch(err => {
  console.error('Database Connection Failed! Bad Config: ', err);
  throw err;
});
const erpPoolConnect = erpPool.connect().then(() => {
  console.log('Connected to ERP SQL Server');
  return erpPool;
}).catch(err => {
  console.error('Database Connection Failed! Bad Config: ', err);
  throw err;
});

module.exports = {
  sql, mesPoolConnect, erpPoolConnect
};