const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT || 1433),
  options: { encrypt: false, trustServerCertificate: true, enableArithAbort: true },
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
};

const pool = new sql.ConnectionPool(config);
const ready = pool.connect();

// helper ทำ query แบบมีพารามิเตอร์
async function query(text, params = {}) {
  await ready;                           // ensure connected
  const request = pool.request();
  for (const [k, v] of Object.entries(params)) {
    // v อาจเป็น { type, value } หรือ value เฉยๆ ก็ได้
    if (v && typeof v === 'object' && 'type' in v)
      request.input(k, v.type, v.value);
    else
      request.input(k, v);               // best-effort
  }
  return request.query(text);
}

module.exports = { sql, pool, ready, query };