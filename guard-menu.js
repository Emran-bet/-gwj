console.log("================================");
console.log("       عمران-بت");
console.log("================================");
console.log("1. بررسی امنیت حساب");
console.log("2. راهنمای تأیید دومرحله‌ای");
console.log("3. بررسی دستگاه‌های متصل");
console.log("4. راهنمای حریم خصوصی");
console.log("5. خروج");
console.log("================================");

const report = require("./security-report");

console.log("\n--- Security Report ---");
console.log(JSON.stringify(report(), null, 2));
