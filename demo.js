const chromeLauncher = require("chrome-launcher");
const axios = require("axios");
const puppeteer = require("puppeteer");

(async () => {
  // Initializing a Chrome instance manually
  const chrome = await chromeLauncher.launch({
    headless: false,
  });
})();
