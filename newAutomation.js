const puppeteer = require("puppeteer");

const link =
  "https://daddymoviez.xyz/download-janhit-mein-jaari-2022-hindi-movie-v2-cam-rip-480p-450mb-720p-1gb-1080p-2gb/";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: false,
  });

  async function switchToCurrentTab() {
    // change currentTab to the last tab
    await currentTab.waitForTimeout(4000);
    allTabs = await browser.pages();
    currentTab = allTabs[allTabs.length - 1];
  }

  const page = await browser.newPage();

  await page.goto(link);

  await page.evaluate(() => {
    const allBtn = document.querySelectorAll(".mb-text");
    const lastBtn = allBtn[allBtn.length - 1];
    return lastBtn.click();
  });

  console.log("\n clicked on download 1080p btn \n");

  console.log("\n waiting for 8 seconds... \n");
  await page.waitForTimeout(8000);

  let allTabs = await browser.pages();
  let currentTab = allTabs[allTabs.length - 1];

  await currentTab.evaluate(() => {
    const fastServer = document.querySelector(".mb-text");
    fastServer.click();
  });

  console.log("\n fast server btn clicked \n");

  console.log("\n waiting for 10 seconds... \n");
  await page.waitForTimeout(10000);

  allTabs = await browser.pages();
  currentTab = allTabs[allTabs.length - 1];

  await currentTab.title().then((title) => {
    console.log(title);
  });

  await currentTab.click("#landing a");
  await currentTab.waitForTimeout(5000);
  await currentTab.click("#verify_button2");
  await currentTab.waitForTimeout(11000);
  await currentTab.click("#verify_button");
  await currentTab.waitForTimeout(10000);
  await currentTab.click("#two_steps_btn");

  // change currentTab to the last tab
  switchToCurrentTab();

  await currentTab.waitForTimeout(8000);
  await currentTab.click(".btn-outline-success");
  await currentTab.waitForTimeout(3000);
  await currentTab.click(".btn-success");

  switchToCurrentTab();

  await currentTab.waitForTimeout(5000);
  await currentTab.click(".btn-success");
})();
