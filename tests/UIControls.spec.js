const {test, expect} = require('@playwright/test');

//Static select dropdown menu
test('UI Controls test',async ({page})=>
{
  const link = "https://rahulshettyacademy.com/loginpagePractise/";
  const userName = page.locator('#username');
  const password = page.locator("[type='password']");
  const signIn = page.locator("#signInBtn");
  const dropdown = page.locator("select.form-control");

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
  //Checking select box and checking if it is marked
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  //To uncheck the select box and check if it is unchecked
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();


  //To open Playwright inspector and pause the test
  //await page.pause();

});
