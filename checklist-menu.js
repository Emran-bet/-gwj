const checklist = require("./security-checklist");

console.log("===== عمران-بت =====");
console.log("چک‌لیست امنیتی:");

checklist.forEach((item, index) => {
  const status = item.completed ? "انجام شده" : "انجام نشده";
  console.log(`${index + 1}. ${item.title} - ${status}`);
});

console.log("=========================");
