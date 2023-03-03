const {test, expect, request} = require('@playwright/test')

//Creating variable with login payload for API endpoint as Java object {(property:"value")}
const loginPayload = {userEmail:"4testing@gmail.com",userPassword:"Abc!2345"};

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
    data:loginPayload
  })
  //Making assertion to check the call to API did not fail; we should recieve a code 2** (200 - OK)
  expect(loginResponse.ok()).toBeTruthy();
  //Getting the JSON response body and saving it to variable
  const loginResponseJson = loginResponse.json();
  //Parsing JSON response body and extracting token from it
  const token = loginResponseJson.token;


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
  const email = "4testing@gmail.com";
  const productName = 'iphone 13 pro';
  const link = "https://rahulshettyacademy.com/client/";
  const emailField = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const loginBtn = page.locator("[value='Login']");
  const products = page.locator(".card-body");

  await page.goto(link);
  await emailField.fill("4testing@gmail.com");
  await password.type("Abc!2345");
  await loginBtn.click();
  await page.waitForLoadState('networkidle');
  
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





