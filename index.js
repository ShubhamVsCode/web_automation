const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: false,
  });
  const page = await browser.newPage();
  await page.goto(
    "https://moviesverse.asia/download-doctor-strange-in-the-multiverse-of-madness-2022-hindi-english-480p-720p-1080p/"
  );

  // =============================
  let download = await page.$$(".mb-text");
  console.log("line16");

  download = download[download.length - 1];
  console.log("line19");

  await download.evaluate((download) => download.click());
  console.log("line22");

  await download.click();
  console.log("line25");

  const tabs = await browser.pages();
  console.log("line28");

  await tabs[0].close();
  console.log("line31");

  let currentTab = tabs[tabs.length - 1];

  await currentTab.waitForSelector(".mb-text");
  console.log("line34");

  const fastServer = await currentTab.$(".mb-text");

  await fastServer.evaluate((fastServer) => fastServer.click());
  console.log("line37");

  const newTabs = await browser.pages();
  console.log("newTabs");

  currentTab = newTabs[newTabs.length - 1];
  console.log("currentTab");

  // await currentTab.waitForSelector("a>h5");
  // console.log("waiting for selector");

  const startVerification = await currentTab.$("h5");
  console.log("startingVerification");

  await startVerification.click();
  console.log("clickedStartVerification");

  // for (let i = 0; i < tabs - 1; i++) {
  //   console.log("screenshot capturing");
  //   await tabs[i].screenshot({ path: `${i}.png` });
  //   console.log("screenshot captured");
  // }
  // =============================

  /*

  let download = await page.$$(".mb-text");
  //   console.log(download);
  download = download[download.length - 1];
  //   await download.evaluate((download) => download.click());
  await download.click();
  await download.click();
  await download.click();
  let tabs = await browser.pages();
  let currentPage = tabs[tabs.length - 1];
  //   tabs = await browser.pages();
  //   tabs[2].bringToFront();
  console.log(await currentPage.title());
  //////////////////////////////////

  ///////////////////////////////////
  await page.waitFor(7000);
  let fastServer = await currentPage.$(".mb-text");
  await fastServer.evaluate((e) => e.click());

  tabs = await browser.pages();
  currentPage = tabs[tabs.length - 1];
  console.log(await currentPage.title());

  await page.click("a>h5");

  */
})();
