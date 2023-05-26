const {test, expect} = require('@playwright/test')

test("Screenshot and Visual comparison test", async({page}) =>
{
  const link = "https://rahulshettyacademy.com/AutomationPractice/";

  await page.goto(link);
  await expect(page.locator("#displayed-text")).toBeVisible();
  //Capturing screenshot of specific locator
  await page.locator("#displayed-text").screenshot({path: 'locatorScreenshot.png'});
  await page.locator("#hide-textbox").click();
  //Capturing screenshot after click and storing the screenshot inside project
  await page.screenshot({path: 'screenshot.png'});
  await expect(page.locator("#displayed-text")).toBeHidden();

});


test("Visual test", async ({page}) =>
{
  const link = "https://www.google.com/";
  await page.goto(link);
  //Command below takes a screenshot of the website, after that it compares it with original screenshot that was already taken
  expect (await page.screenshot()).toMatchSnapshot('landingPage.png');

});

