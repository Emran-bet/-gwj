function checkLink(link) {
  try {
    const url = new URL(link);

    return {
      valid: true,
      protocol: url.protocol,
      secure: url.protocol === "https:",
      warning: "قبل از باز کردن لینک، هویت سایت را بررسی کنید."
    };
  } catch {
    return {
      valid: false,
      warning: "آدرس لینک معتبر نیست."
    };
  }
}

module.exports = checkLink;
