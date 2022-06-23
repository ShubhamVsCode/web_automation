const puppeteer = require("puppeteer");

(async () => {
  // browser launch

  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      defaultViewport: false,
    });

    const page = await browser.newPage();
    await page.goto(
      "https://daddymoviez.xyz/download-don-2022-hq-hindi-dub-hindi-tamil-dubbed-movie-web-dl-480p-550mb-720p-800mb-1080p-2-9gb/"
    );
    console.log("Movie page loaded");

    await page.evaluate(() => {
      console.log("evaluating last 1080p btn");
      const allBtn = document.querySelectorAll(".mb-text");
      const lastBtn = allBtn[allBtn.length - 1];
      return lastBtn.click();
    });

    console.log("clicked on download 1080p btn");
    await page.waitFor(10000);

    let allTabs = await browser.pages();
    console.log("allTabs: " + allTabs, "allTabsLength: " + allTabs.length);
    console.log("all tabs loaded");

    let currentTab = allTabs[allTabs.length - 1];
    console.log("making currentTab");

    await currentTab.title().then((title) => {
      console.log("title: " + title);
    });

    await currentTab.evaluate(() => {
      console.log("evaluating fast server btn");
      const fastServer = document.querySelector(".mb-text");
      fastServer.click();
      console.log("fast server btn clicked");
    });

    console.log("wait 10 seconds for new currentTab");
    await currentTab.waitFor(10000);

    allTabs = await browser.pages();

    currentTab = allTabs[allTabs.length - 1];
    console.log("currentTab loaded");

    console.log(await currentTab.title());

    console.log("wait 2 seconds");
    await currentTab.waitFor(2000);

    currentTab.click("#landing a");
    console.log("clickedStartVerification");

    console.log("wait 5 second");
    await currentTab.waitFor(5000);

    currentTab.click("#verify_button2");
    console.log("verify_button");

    console.log("wait 11 second");
    await currentTab.waitFor(11000);

    currentTab.click("#verify_button");
    console.log("verify_button");

    console.log("wait 10 second");
    await currentTab.waitFor(10000);

    currentTab.click("#two_steps_btn");
    console.log("go to download");

    //   new tab searching for btn named direct download

    console.log("wait 8 seconds for new currentTab");
    await currentTab.waitFor(8000);

    allTabs = await browser.pages();

    currentTab = allTabs[allTabs.length - 1];
    console.log("currentTab loaded");

    currentTab.click("#drc");

    console.log("wait 3 sec");
    await currentTab.waitFor(3000);

    currentTab.click(".btn-success");

    // new tab searching for btn named download now

    console.log("wait 2 seconds for new currentTab");
    await currentTab.waitFor(2000);

    allTabs = await browser.pages();

    currentTab = allTabs[allTabs.length - 1];
    console.log("currentTab loaded");

    console.log("wait 2 seconds for new currentTab");
    await currentTab.waitFor(2000);

    currentTab.click(".btn-success");

    console.log("downloading");
  } catch (error) {
    console.error(error);
  }
})();
