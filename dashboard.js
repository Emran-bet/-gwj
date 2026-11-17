const version = require("./version");
const settings = require("./settings");
const report = require("./security-report");

function dashboard() {
  console.log("================================");
  console.log("       عمران-بت");
  console.log("================================");
  console.log("Version:", version.version);
  console.log("Language:", settings.language);
  console.log("Theme:", settings.theme);
  console.log("Security:", settings.securityAlerts ? "ON" : "OFF");
  console.log("Status:", report().status);
  console.log("================================");
}

dashboard();
