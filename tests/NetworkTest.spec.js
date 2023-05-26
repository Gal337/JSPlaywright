const {test, expect, request} = require('@playwright/test');
//Making APIUtils.js file accessible
const {APIUtils} = require('../utils/APIUtils');

const loginPayload = {userEmail:"4testing@gmail.com", userPassword:"Abc!2345"};
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
test('Injecting network response test', async ({page}) =>
{
  
  page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client/");
  //Routing the address of webpage to desired one
  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/63fdafbb568c3e9fb123c809",
    async route => 
    {
     //Intercepting response - API response -> |hijacking response and injecting fake response| -> browser -> render data on FE
     const response = await page.request.fetch(route.request());
     let body = fakePayloadOrders;
     route.fulfill({
        response,
        body,
      })
    });

  await page.locator("button[routerlink*='myorders']").click();
  console.log(await page.locator(".mt-4").textContent());


});





