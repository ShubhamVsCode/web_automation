console.log("entered in src");
const puppeteer = require("puppeteer");

const form = document.getElementById("link");
const submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(form.value);
});

try {
  (async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      defaultViewport: false,
    });

    async function switchToCurrentTab() {
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

    let className = await currentTab.$(".btn-success");
    console.log(className);
    if (className) {
      await currentTab.click(".btn-success");
    } else {
      await currentTab.click(".btn-outline-success");
    }
    await currentTab.waitForTimeout(3000);
    await currentTab.click(".btn-success");

    switchToCurrentTab();

    await currentTab.waitForTimeout(5000);

    await currentTab.click(".btn-success");
  })();
} catch (err) {
  console.log(err);
}
