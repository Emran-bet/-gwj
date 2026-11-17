function twoStepGuide() {
  console.log("\n===== راهنمای تأیید دومرحله‌ای =====");

  const steps = [
    "۱. واتساپ را باز کن.",
    "۲. وارد تنظیمات (Settings) شو.",
    "۳. گزینه حساب (Account) را انتخاب کن.",
    "۴. تأیید دومرحله‌ای (Two-Step Verification) را بزن.",
    "۵. گزینه فعال‌سازی را انتخاب کن.",
    "۶. یک PIN مطمئن تعیین کن.",
    "۷. ایمیل بازیابی را اضافه کن."
  ];

  steps.forEach(step => console.log(step));

  console.log("==================================");
}

module.exports = twoStepGuide;
