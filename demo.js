const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: false,
  });
  const page = await browser.newPage();
  await page.goto("https://indidrive.in/file/tsVogEoCJmMZXrYpWTdT");

  let className = await page.$(".btn-success");
  console.log(className);
  if (className) {
    await page.click(".btn-success");
  } else {
    await page.click(".btn-outline-success");
  }
})();
