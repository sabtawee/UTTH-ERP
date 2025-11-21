const axios = require("axios");
const {
    createErpConnection,
    closeErpConnection,
} = require('../../config/db.mssql');


// 1) ดึงข้อมูลจาก Stored Procedure
async function runSP(spName, params) {
    let erpConn = null;
    try {
        erpConn = await createErpConnection();
        const request = erpConn.request();
        for (const [key, value] of Object.entries(params)) {
            request.input(key, value);
        }
        const result = await request.execute(spName);
        return result.recordset;
    } catch (error) {
        console.error(`❌ Error executing SP ${spName}:`, error);
        throw new Error(`SP execution failed: ${error.message}`);
    } finally {
        if (erpConn) {
            await closeErpConnection(erpConn);
        }
    }
}

// 2) ส่ง JSON ไป report-server
exports.generateReport = async (template, payload) => {
  const res = await axios.post(
    `http://localhost:5030/report/${template}`,
    payload,
    { responseType: "arraybuffer" } // สำคัญ! เพื่อให้ได้ PDF
  );

  return res.data;
};

// 3) ตัวอย่างรายงาน (Demo)
exports.generateDemoReport = async () => {
  // เรียก SP ถ้าต้องการ (ตัวอย่างนี้ยังไม่ใช้)
  // const rows = await runSP('sp_name', { param1: 'A' });

  const payload = {
    reportName: "Test Report",
    createdBy: "Sabtawee",
    date: new Date().toISOString().slice(0, 10),
    items: [
      { name: "Item1", qty: 10, remark: "OK" },
      { name: "Item2", qty: 5, remark: "NG" }
    ]
  };

  return await exports.generateReport("demo", payload);
};
