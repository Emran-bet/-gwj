const report = require("./security-report");
const score = require("./security-score");

console.log("===== FINAL PROJECT REPORT =====");
console.log("Project:", report().app);
console.log("Version:", report().version);
console.log("Status:", report().status);
console.log("Security Score:", score().score + "/100");
console.log("Checklist:", score().completed + "/" + score().total);
console.log("================================");
