const info = require("./app-info");

console.log("================================");
console.log("       " + info.name);
console.log("================================");
console.log("Version:", info.version);
console.log("Language:", info.language);
console.log("Status:", info.status);
console.log("--------------------------------");
console.log("Starting security guide...\n");

require("./interactive-menu");
