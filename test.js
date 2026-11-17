const report = require("./security-report");

const result = report();

console.log("عمران-بت Test");
console.log("==================");
console.log("App:", result.app);
console.log("Version:", result.version);
console.log("Status:", result.status);
console.log("Features:", result.features.length);
