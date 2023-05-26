const {test, expect} = require('@playwright/test');

//Excersise #1 - Automated Login
test('Automated login test',async ({page})=>
{
  const link = "https://rahulshettyacademy.com/client/";
  const email = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const loginBtn = page.locator("[value='Login']");

  await page.goto(link);
  await email.fill("4testing@gmail.com");
  await password.type("Abc!2345");
  await loginBtn.click();
});

//Test that dynamically goes through a list of products and adds them to cart
test('Dynamic product search test', async ({page}) =>
{
  //productName variable is being used because we want specific item to be returned
  const productName = 'iphone 13 pro';
  const link = "https://rahulshettyacademy.com/client/";
  const email = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const loginBtn = page.locator("[value='Login']");
  const products = page.locator(".card-body");

  await page.goto(link);
  await email.fill("4testing@gmail.com");
  await password.type("Abc!2345");
  await loginBtn.click();
  //Waiting for the website to load
  await page.waitForLoadState('networkidle');
  //Printing titles of products to terminal
  const titles = await page.locator(".card-body b").allTextContents();
  //Returns titles of products in terminal
  console.log(titles);
  //Counts variable returns us the number of items with chosen selector
  const count = await products.count();
  for(let i = 0; i < count; i++)
  {
  if (await products.nth(i).locator("b").textContent() === productName)
  {
    await products.nth(i).locator("text=Add to cart").click();
    break;
  }
  }
  //Clicking on cart
  await page.locator("[routerlink*='cart']").click();
  //.waitFor method waits until element is loaded on the page
  await page.locator("div li").first().waitFor()
  //Finding element based on tag + text (h3:has-text(variable or "enter text here"))
  //.isVisible method returns boolean value after checking if the page is loaded (.waitFor)
  const bool = page.locator("h3:has-text(productName)").isVisible();
  //Adding assertion to check if we have the selected item in cart
  expect(bool).toBeTruthy();


  await page.pause();
});



//Test for handling auto suggestive dropdown options
//(Complete E2E flow of placing the order and grabbing the order id)
test('Auto suggestive dropdown options & E2E flow test', async ({page}) =>
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
  //Waiting for the website to load
  await page.waitForLoadState('networkidle');
  //Printing titles of products to terminal
  const titles = await page.locator(".card-body b").allTextContents();
  //Returns titles of products in terminal
  console.log(titles);
  //Counts variable returns us the number of items with chosen selector
  const count = await products.count();
  for(let i = 0; i < count; ++i)
  {
  if (await products.nth(i).locator("b").textContent() === productName)
  {
    await products.nth(i).locator("text=Add to cart").click();
    break;
  }
  }
  //Clicking on cart
  await page.locator("[routerlink*='cart']").click();
  //.waitFor method waits until element is loaded on the page
  await page.locator("div li").first().waitFor()
  //Finding element based on tag + text (h3:has-text(variable or "enter text here"))
  //.isVisible method returns boolean value after checking if the page is loaded (.waitFor)
  const bool = page.locator("h3:has-text('iphone 13 pro')").isVisible();
  //Adding assertion to check if we have the selected item in cart
  expect(bool).toBeTruthy();
  //Locating the checkout button based on text; only use text locator for static elements
  await page.locator("text=Checkout").click();
  //Adding delay to type method so auto suggestive dropdown shows multiple options each time
  await page.locator("[placeholder*='Country']").type("can", {delay:100});
  //Waiting for the dropdown menu to appear
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  //Counting options from dropdown menu and saving them to variable
  const optionsCount = await dropdown.locator("button").count();
  //Iterating to desired option from dropdown menu
  for (let i = 0; i < optionsCount; i++)
  {
    //Saving options to variable
    const text = await dropdown.locator("button").nth(i).textContent();
    //Checking if variable matches desired option / text; IMPORTANT: check for any white spaces
    //In this example white space is also included
    if (text === " Canada")
    {
      //Clicking on desired option
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }
  //Action (.toHaveText) is performed outside of expect assertion, so await needs to be outside of expect assertion
  await expect(page.locator(".user__name label[type='text']")).toHaveText(email);
  //Submitting the order; clicking on Place order button
  await page.locator(".action__submit").click();
  //CHecking if the order was confirmed successfully
  await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
  //Getting the order ID
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);
  //Clicking on Orders button, to see order history
  await page.locator("button[routerlink*='/dashboard/myorders']").click();
  //Waiting for table to be loaded
  await page.locator("tbody").waitFor();
  //Saving order ID rows to variable
  const rows = await page.locator("tbody tr");
  for (let i = 0; i < await rows.count(); i++)
  {
    //Saving order IDs to variable
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderId.includes(rowOrderId))
    {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  //Saving order details to variable
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy()

  await page.pause();
});
