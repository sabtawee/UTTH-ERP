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
// 💾 Connection Functions (Open/Close Pattern)
// ==========================

// MES Database Functions
async function createMesConnection() {
  const pool = new sql.ConnectionPool(mesConfig);
  await pool.connect();
  console.log('✅ Connected to MES SQL Server');
  return pool;
}

async function closeMesConnection(pool) {
  if (pool && pool.connected) {
    await pool.close();
    console.log('🔒 Closed MES SQL Server connection');
  }
}

// ERP Database Functions (ODBC)
async function createErpConnection() {
  console.log('Attempting to connect to ERP (ODBC)...');
  const conn = await odbc.connect(erpConnectionString);
  console.log('✅ Connected to ERP SQL Server 2000 (via ODBC)');
  return conn;
}

async function closeErpConnection(conn) {
  if (conn) {
    await conn.close();
    console.log('🔒 Closed ERP SQL Server connection');
  }
}

// Local Database Functions
async function createLocalConnection() {
  const pool = new sql.ConnectionPool(localConfig);
  await pool.connect();
  console.log('✅ Connected to Local SQL Server');
  return pool;
}

async function closeLocalConnection(pool) {
  if (pool && pool.connected) {
    await pool.close();
    console.log('🔒 Closed Local SQL Server connection');
  }
}

// ==========================
// 🔄 Legacy Functions (for backward compatibility)
// ==========================
let mesPool, erpConn, localPool;

async function getMesPool() {
  if (!mesPool) {
    mesPool = new sql.ConnectionPool(mesConfig);
    await mesPool.connect();
    console.log('✅ Connected to MES SQL Server (Legacy)');
  }
  return mesPool;
}

async function getErpPool() {
  console.log('Attempting to get ERP Pool (ODBC)...');
  if (!erpConn) {
    erpConn = await odbc.connect(erpConnectionString);
    console.log('✅ Connected to ERP SQL Server 2000 (via ODBC) (Legacy)');
  }
  return erpConn;
}

async function getLocalPool() {
  if (!localPool) {
    localPool = new sql.ConnectionPool(localConfig);
    await localPool.connect();
    console.log('✅ Connected to Local SQL Server (Legacy)');
  }
  return localPool;
}

// ==========================
// 📦 Export
// ==========================
module.exports = {
  sql,
  // New connection pattern (recommended)
  createMesConnection,
  closeMesConnection,
  createErpConnection,
  closeErpConnection,
  createLocalConnection,
  closeLocalConnection,
  // Legacy functions (for backward compatibility)
  getMesPool,
  getErpPool,
  getLocalPool,
};