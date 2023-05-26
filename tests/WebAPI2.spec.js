//Login from UI -> get all the Application and Content data and store it in .json file
//Test cases: checking if add to cart is working, going to cart and working in it, order confirmation, order details and history

/*For detailed code explanation check AutomationScripts file - E2E flow test*/

const {test, expect} = require('@playwright/test');
//Global variable for web context
let webContext;


test.beforeAll(async({browser}) => 
{
  
  const context = await browser.newContext();
  const page = await context.newPage();

  await browser.newContext();
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.locator("#userEmail").fill("4testing@gmail.com");
  await page.locator("#userPassword").type("Abc!2345");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');
  //Storing data from browser to json file with specified path
  await context.storageState({path:'state.json'});
  //Invoking browser by injecting state.json file
  webContext = await browser.newContext({storageState:'state.json'});


});

test('Saving browser storage data test', async () =>
{
 
  const productName = 'iphone 13 pro';
  const email = "4testing@gmail.com";
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");
  const products = page.locator(".card-body");
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  
  const count = await products.count();
  for(let i = 0; i < count; ++i)
  {
  if (await products.nth(i).locator("b").textContent() === productName)
  {
    await products.nth(i).locator("text=Add to cart").click();
    break;
  }
  }
  
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor()
  
  const bool = page.locator("h3:has-text('iphone 13 pro')").isVisible();
  expect(bool).toBeTruthy();

  await page.locator("text=Checkout").click();
  await page.locator("[placeholder*='Country']").type("can", {delay:100});
  
  const dropdown = page.locator(".ta-results");
  
  await dropdown.waitFor();

  const optionsCount = await dropdown.locator("button").count();
  
  for (let i = 0; i < optionsCount; i++)
  {
    const text = await dropdown.locator("button").nth(i).textContent();
    if (text === " Canada")
    {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }
  
  await expect(page.locator(".user__name label[type='text']")).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
  
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);
  
  await page.locator("button[routerlink*='/dashboard/myorders']").click();
  await page.locator("tbody").waitFor();

  const rows = await page.locator("tbody tr");
  for (let i = 0; i < await rows.count(); i++)
  {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId))
    {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }

  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy()

  await page.pause();
});

test('@API Log in test', async () =>
{
 
  const productName = 'iphone 13 pro';
  
  const page = await webContext.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");
  const products = page.locator(".card-body");
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});

