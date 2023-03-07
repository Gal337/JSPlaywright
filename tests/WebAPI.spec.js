const {test, expect, request} = require('@playwright/test');

//Creating variable with login payload for API endpoint as Java object {(property:"value")}
const loginPayload = {userEmail:"4testing@gmail.com",userPassword:"Abc!2345"};
//Creating Order paylod (same as above)
const orderPayload = {orders: [{country: "Jamaica", productOrderedId: "6262e9d9e26b7e1a10e89c04"}]};
//Making token and orderId variable accessable to every test
let token;
let orderId;

//This block of code gets executed only once before all other tests
test.beforeAll( async() =>
{
  //New API context needs to be created, so we can call the API
  const apiContext = await request.newContext();
  //Saving the API response to variable called loginResponse
  //Calling the API and telling it POST method is being used
  //Inside () we specify the URL, data we are sending {data:loginPayload},
  const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
  {
    data: loginPayload
  })
  //Making assertion to check the call to API did not fail; we should recieve a code 2** (200 - OK)
  expect(loginResponse.ok()).toBeTruthy();
  //Getting the JSON response body and saving it to variable
  const loginResponseJson = await loginResponse.json();
  //Parsing JSON response body and extracting token from it
  token = loginResponseJson.token;
  console.log(token);
  //Accessing API endpoint Create Order
  const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
  {
    data: orderPayload,
    headers:{ 
      'Authorization': token,
      'Content-Type': 'application/json'
      },
  });
  const orderResponseJson = await orderResponse.json();
  console.log(orderResponseJson)
  orderId = orderResponseJson.orders[0];
});

//This block of code gets executed each time before other tests
test.beforeEach(  () =>
{
  


});


/* 
For code explanation that is below, check AutomationScripts.spec.js file
and search for Auto suggestive dropdown options & E2E flow test
 */
test('Web API test', async ({page}) =>
{
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





