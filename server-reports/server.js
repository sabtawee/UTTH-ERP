const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { initReportEngine, generateReport } = require("./services/report.engine");

const app = express();

// allow JSON
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

// start jsreport
initReportEngine().then(() => {
  console.log("⚡ report-engine is ready");
});

// main API for reports
app.post("/report/:template", async (req, res) => {
  try {
    const templateName = req.params.template; // เช่น demo
    const data = req.body;                    // JSON จาก ERP

    const pdf = await generateReport(templateName, data);

    res.setHeader("Content-Type", "application/pdf");
    res.send(pdf);
  } catch (err) {
    console.error("❌ Report error:", err);
    res.status(500).send("Report Server Error");
  }
});

// start API server
app.listen(5030, () => {
  console.log("📄 Report Server running on http://localhost:5030");
});
