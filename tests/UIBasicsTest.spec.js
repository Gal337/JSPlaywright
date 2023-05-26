//const {test} = require ('@playwright/test'); needs to be added so test can execute
const {test, expect} = require('@playwright/test');

//async needs to be added before function so the steps will be executed in order
//instead of function, we can also write just ()=> ; instead of browser we can also use {page} if we don't need anything else
test('Browser Context Playwright test',async ({browser})=>
{
  //Creating new instance
  const context = await browser.newContext();
  //Creating actual page to automate
  const page = await context.newPage();
  //Blocking specific data from being called on webpage
  //page.route('**/*.{jpg, png, jpeg}', route => route.abort());
  //Storing locators to variables
  const userName = page.locator('#username');
  const password = page.locator("[type='password']");
  const signIn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  //Listening methods - captures URL and prints it in console on request events
  page.on('request', request => console.log(request.url()));
  page.on('response', response => console.log(response.url(), response.status()));
  //Saving URL to variable and opening the URL
  const link = await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  console.log(await page.title());
  //Method that helps us locate any element on the page (css, xpath),
  //enters the username in the username field and then clicks sign in button
  await userName.type("playwright");
  await password.type("learning");
  await page.locator("#signInBtn").click();
  //Waits until locator is visible on the page
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  //Erasing the username we already entered previously with fill method
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  //waitForURL is used so website loads completely
  await Promise.all(
    [
      await signIn.click(),
      await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop"),
    ]
  );
  
  //Prints the value of first and 2nd element to console
  //console.log(await cardTitles.first().textContent());
  //console.log(await cardTitles.nth(1).textContent());
  //Prints all titles of elements
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});

//If we use page, we don't need to create context and page instances
//Page is used when we don't need to inject cookies
/*using test.only ('First Playwright test',async ({page})=> means ONLY this test case will be executed*/
test('First Playwright test',async ({page})=>
{
  //Opening specific URL
  await page.goto("https://google.com/")
  //Getting the page title and printing it to console (and then doing assertion)
  console.log(await page.title());
  //Doing the assertion to make sure we are on correct page
  await expect(page).toHaveTitle("Google");
});
