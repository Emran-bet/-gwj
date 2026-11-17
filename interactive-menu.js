const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\n===== عمران-بت =====");
console.log("1. چک‌لیست امنیتی");
console.log("2. امتیاز امنیتی");
console.log("3. راهنمای حریم خصوصی");
console.log("4. راهنمای تأیید دومرحله‌ای");
console.log("5. بررسی لینک مشکوک");
console.log("6. خروج");

rl.question("\nشماره گزینه را وارد کنید: ", answer => {
  switch (answer) {
    case "1":
      require("./checklist-menu");
      break;
    case "2":
      console.log(require("./security-score")());
      break;
    case "3":
      require("./privacy")();
      break;
    case "4":
      require("./two-step")();
      break;
    case "5":
      rl.question("لینک را وارد کنید: ", link => {
        console.log(require("./link-check")(link));
        rl.close();
      });
      return;
    case "6":
      console.log("خروج از عمران-بت");
      break;
    default:
      console.log("گزینه نامعتبر است.");
  }

  rl.close();
});
