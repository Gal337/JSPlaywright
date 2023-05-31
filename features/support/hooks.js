const playwright = require('@playwright/test');
const { POManager } = require('../../PageObjects/POManager');
const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  const browser = await playwright.chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  this.page = await context.newPage();
  this.poManager = new POManager(this.page);
});

After(function () {
  console.log("Last to execute");
});




