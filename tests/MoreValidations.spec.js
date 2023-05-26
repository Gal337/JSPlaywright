const {test, expect} = require('@playwright/test')


//Test to validate if the text is visible or not
test("Text visibility validation test", async({page}) =>
{
  const link = "https://rahulshettyacademy.com/AutomationPractice/";
  const link2 = "https://www.google.com";

  await page.goto(link);
  //EXAMPLE FOR MOVING BACK AND FORTH
  /* await page.goto(link2);
  //Going back to previous page / link
  await page.goBack();
  //Going forward to page
  await page.goForward(); */
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();

});


//Configuring how tests below will be executed 
//Serial mode is used when tests are dependent on each other
test.describe.configure({mode : 'parallel'});
//Test to handle Java popup / dialogs
//Java popups can not be spied on; unable to get HTML
//Dialog is JS event
test("Java popup / dialog validation test", async({page}) =>
{
  const link = "https://rahulshettyacademy.com/AutomationPractice/";

  await page.goto(link);
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  //.on method helps to listen for events on website
  //Playwright dialog.accept() method confirms the popup; clicks on OK button
  /* //Playwright dialog.dismiss() method cancels the popup; clicks on Cancel button
  page.on('dialog',dialog => dialog.dismiss()); */
  page.on('dialog',dialog => dialog.accept());
  await page.locator("#confirmbtn").click();

});


//Test to validate mouse hover
test("Mouse hover validation test", async({page}) =>
{
  const link = "https://rahulshettyacademy.com/AutomationPractice/";

  await page.goto(link);
  //.hover() method hovers mouse over menu element
  await page.locator("#mousehover").hover();

});


//Test to handle and automate frames on webpage
//Tag name for frame is iframe or frameset
test("Frame handling test", async({page}) =>
{
  const link = "https://rahulshettyacademy.com/AutomationPractice/";

  await page.goto(link);
  //Switching to frame and then acting upon elements inside the frame
  //Switching to frame gives us new object so we need to store it to variable
  const framesPage = page.frameLocator("#courses-iframe");
  //To access elements inside the frame we need to use the variable
  //Adding :visible, Playwright will focus only on visible locator
  await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  //Grabbing the title text from page we navigated to
  const textCheck = await framesPage.locator(".text h2").textContent();
  //Splitting the string based on spaces creates array; retrieving the first element from array
  console.log(textCheck.split(" ")[1]);


});

