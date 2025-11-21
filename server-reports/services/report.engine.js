const jsreport = require('jsreport-core')();
const fs = require('fs');
const path = require('path');

// เปิด engine ที่ต้องใช้
jsreport.use(require('jsreport-handlebars')());
jsreport.use(require('jsreport-chrome-pdf')());

// เริ่มระบบ jsreport
async function initReportEngine() {
  await jsreport.init();
  console.log("⚡ jsreport engine initialized");
}

// โหลดไฟล์ template HTML
function loadTemplate(name) {
  const templatePath = path.join(__dirname, "../templates", `${name}.html`);
  return fs.readFileSync(templatePath, "utf8");
}

// render PDF
async function generateReport(templateName, data) {
  const html = loadTemplate(templateName);

  const pdf = await jsreport.render({
    template: {
      content: html,
      engine: "handlebars",
      recipe: "chrome-pdf"
    },
    data: data
  });

  return pdf.content;  // PDF buffer
}

module.exports = {
  initReportEngine,
  generateReport
};
