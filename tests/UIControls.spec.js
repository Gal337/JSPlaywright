const {test, expect} = require('@playwright/test');

//Static select dropdown menu, radio buttons, pop-up windows, check boxes
test('UI Controls test',async ({page})=>
{
  const link = "https://rahulshettyacademy.com/loginpagePractise/";
  const userName = page.locator('#username');
  const password = page.locator("[type='password']");
  const signIn = page.locator("#signInBtn");
  const dropdown = page.locator("select.form-control");
  const documentLink = page.locator("[href*='documents-request']");

  await page.goto(link);
  await dropdown.selectOption("consult");
  //Selecting last radio button
  await page.locator(".radiotextsty").last().click();
  //Confirming pop-up window
  await page.locator("#okayBtn").click();
  //Print to console if the correct element is checked
  console.log(await page.locator(".radiotextsty").last().isChecked());
  //Assertion to check if correct radio button is selected
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  //Selecting check box and checking if it is marked
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  //To uncheck the select box and check if it is unchecked
  //If action is performed inside the brackets; await must also be inside brackets
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentLink).toHaveAttribute("class","blinkingText");

  //To open Playwright inspector and pause the test
  //await page.pause();
});



test('Child Window Handling test',async ({browser})=>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  const link = "https://rahulshettyacademy.com/loginpagePractise/";
  const documentLink = page.locator("[href*='documents-request']");

  await page.goto(link);
  //Saving newly opened tab to variable
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentLink.click(),
  ])
  
  const text = await newPage.locator(".red").textContent();
  //Extracting email from string and entering it to username field on parent page
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);
  await page.locator("#username").type(domain);
  //await page.pause();
  console.log(await page.locator("#username").textContent());

});
