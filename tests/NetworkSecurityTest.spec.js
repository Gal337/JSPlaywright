const {test, expect, request} = require('@playwright/test');
//Making APIUtils.js file accessible
const {APIUtils} = require('../utils/APIUtils');

const loginPayload = {userEmail:"destined19876@gmail.com", userPassword:"Abc!2345"};
const orderPayload = {orders:[{country: "Canada", productOrderedId:"6262e9d9e26b7e1a10e89c04"}]};
const fakePayloadOrders = {data:[], message:"No Orders"};

let response;

test.beforeAll( async() =>
{
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);
});

/* 
For code explanation that is below, check AutomationScripts.spec.js file
and search for Auto suggestive dropdown options & E2E flow test
 */
test('Network security test', async ({page}) =>
{
  
  page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client/");
  await page.locator("button[routerlink*='myorders']").click();
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=64620eb1568c3e9fb16c6602",
  /*once we reach the URL above, we want to redirect to the URL below*/
  route => route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6437ef03568c3e9fb150694e'})
    );
  await page.locator("button:has-text('View')").first().click();
  await page.pause();



});





