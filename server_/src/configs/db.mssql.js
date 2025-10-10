const sql = require('mssql');
require('dotenv').config();

// ==========================
// 🧩 Database Configs
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

const erpConfig = {
  user: process.env.ERP_DB_USER,
  password: process.env.ERP_DB_PASS,
  server: process.env.ERP_DB_HOST,
  database: process.env.ERP_DB_NAME,
  port: Number(process.env.ERP_DB_PORT || 1433),
  options: { encrypt: false, trustServerCertificate: true, enableArithAbort: true },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
};

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
// ⚙️ Lazy Connection Functions
// ==========================
let mesPool, erpPool, localPool;

// ฟังก์ชันสำหรับเรียกใช้ตอนต้องการเท่านั้น
async function getMesPool() {
  if (!mesPool) {
    mesPool = new sql.ConnectionPool(mesConfig);
    await mesPool.connect();
    console.log('✅ Connected to MES SQL Server');
  }
  return mesPool;
}

async function getErpPool() {
  if (!erpPool) {
    erpPool = new sql.ConnectionPool(erpConfig);
    await erpPool.connect();
    console.log('✅ Connected to ERP SQL Server');
  }
  return erpPool;
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
  getLocalPool
};
