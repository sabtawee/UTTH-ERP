// ==========================
// 🧩 Database Connection Manager
// ==========================
require('dotenv').config();
const sql = require('mssql');
const odbc = require('odbc'); // ✅ ใช้ ODBC สำหรับ ERP SQL 2000

// ==========================
// ⚙️ Configs
// ==========================
const mesConfig = {
  user: process.env.MES_DB_USER,
  password: process.env.MES_DB_PASS,
  server: process.env.MES_DB_HOST,
  database: process.env.MES_DB_NAME,
  port: Number(process.env.MES_DB_PORT || 1433),
  options: { encrypt: false, trustServerCertificate: true, enableArithAbort: true },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
};

const erpConnectionString = `Driver={SQL Server};Server=${process.env.ERP_DB_HOST};Database=${process.env.ERP_DB_NAME};Uid=${process.env.ERP_DB_USER};Pwd=${process.env.ERP_DB_PASS};`;

const localConfig = {
  user: process.env.LOCAL_DB_USER,
  password: process.env.LOCAL_DB_PASS,
  server: process.env.LOCAL_DB_HOST,
  database: process.env.LOCAL_DB_NAME,
  port: Number(process.env.LOCAL_DB_PORT || 1433),
  options: { encrypt: false, trustServerCertificate: true, enableArithAbort: true },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
};

// ==========================
// 💾 Lazy Connection Functions
// ==========================
let mesPool, erpConn, localPool;

async function getMesPool() {
  if (!mesPool) {
    mesPool = new sql.ConnectionPool(mesConfig);
    await mesPool.connect();
    console.log('✅ Connected to MES SQL Server');
  }
  return mesPool;
}

async function getErpPool() {
  console.log('Attempting to get ERP Pool (ODBC)...');
  if (!erpConn) {
    erpConn = await odbc.connect(erpConnectionString);
    console.log('✅ Connected to ERP SQL Server 2000 (via ODBC)');
  }
  return erpConn;
}

async function getLocalPool() {
  if (!localPool) {
    localPool = new sql.ConnectionPool(localConfig);
    await localPool.connect();
    console.log('✅ Connected to Local SQL Server');
  }
  return localPool;
}

// ==========================
// 📦 Export
// ==========================
module.exports = {
  sql,
  getMesPool,
  getErpPool,
  getLocalPool,
};
