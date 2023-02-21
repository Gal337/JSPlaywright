//const {test} = require ('@playwright/test'); needs to be added so test can execute
const {test} = require('@playwright/test');
//async needs to be added before function so the steps will be executed in order
//instead of function, we can also write just ()=> ; instead of browser we can also use {page} if we don't need anything else
test('Browser Context Playwright test',async ({browser})=>
{
  //Creating new instance
  const context = await browser.newContext();
  //Creating actual page to automate
  const page = await context.newPage();
  //Saving URL to variable and opening the URL
  const link = await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

});

//If we use page, we don't need to create context and page instances
//Page is used when we don't need to inject cookies
test('First Playwright test',async ({page})=>
{
  //Opening specific URL
  await page.goto("https://google.com/")

});


