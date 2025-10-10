import sql from 'mssql'

// ข้อมูลการเชื่อมต่อ SQL Server
const config = {
  user: 'sa',
  password: 'P@ssw0rd',
  server: 'localhost',      // หรือ IP เช่น '10.31.0.10'
  port: 62697,               // ค่า default ของ SQL Server
  options: {
    encrypt: false,         // ถ้าใช้บน Windows Server ภายใน ไม่ต้อง encrypt
    trustServerCertificate: true
  }
};

async function createDatabaseAndTable() {
  const dbName = 'THSQLDATA';
  try {
    // 1️⃣ เชื่อมต่อ SQL Server
    const pool = await sql.connect(config);

    // 2️⃣ สร้าง Database ถ้ายังไม่มี
    await pool.request().query(`
      IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}')
      CREATE DATABASE ${dbName};
    `);
    console.log(`✅ Database "${dbName}" created or already exists`);

    // 3️⃣ เชื่อมต่อใหม่เข้าฐานข้อมูลที่เพิ่งสร้าง
    const dbPool = await sql.connect({ ...config, database: dbName });

    // 5️⃣ ปิดการเชื่อมต่อ
    await sql.close();
  } catch (err) {
    console.error('❌ Error:', err);
  }
}


createDatabaseAndTable();
