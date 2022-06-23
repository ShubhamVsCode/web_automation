const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: false,
  });

  const page = await browser.newPage();

  await page.goto("https://youtube.com/");
  const searchBox = await page.$("#search");
  await searchBox.type("Doctor Strange");
  await page.click("#search-icon-legacy");
})();
