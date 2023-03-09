const {test, expect, request} = require('@playwright/test');
//Making APIUtils.js file accessible
const {APIUtils} = require('./utils/APIUtils');

const loginPayload = {userEmail:"4testing@gmail.com", userPassword:"Abc!2345"};
const orderPayload = {orders:[{country: "Cuba", productOrderedId:"6262e9d9e26b7e1a10e89c04"}]};


//Making token and orderId variable accessable to every test
let token;
let orderId;

//This block of code gets executed only once before all other tests
test.beforeAll( async() =>
{
  //First new API context needs to be created, so the method that is in APIUtils file will run
  const apiContext = await request.newContext();
  //Making new object of API Utils
  const apiUtils = new APIUtils(apiContext, loginPayload);
  apiUtils.createOrder(orderPayload);

});

/* 
For code explanation that is below, check AutomationScripts.spec.js file
and search for Auto suggestive dropdown options & E2E flow test
 */
test('Web API test', async ({page}) =>
{
  //
  const apiUtils = new.apiUtils(apiContext, loginPayload);
  const orderId = createOrder(orderPayload);
  //Adding initialization script to import the token
  page.addInitScript(value => {
    //Importing token
    window.localStorage.setItem('token', value);
  }, token);

  const link = "https://rahulshettyacademy.com/client/";
  const products = page.locator(".card-body");

  await page.goto(link);
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





