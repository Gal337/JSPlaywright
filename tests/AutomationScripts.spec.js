const {test, expect} = require('@playwright/test');

//Excersise #1 - Automated Login
test('Automated login test',async ({page})=>
{
  const link = "https://rahulshettyacademy.com/client/";
  const email = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const loginBtn = page.locator("[value='Login']");

  await page.goto(link);
  await email.fill("destined19876@gmail.com");
  await password.type("Abc!2345");
  await loginBtn.click();
});

//Test that dynamically goes through a list of products and adds them to cart
test('Dynamic product search test', async ({page}) =>
{
  //productName variable is being used because we want specific item to be returned
  const productName = 'Iphone 13 Pro';
  const link = "https://rahulshettyacademy.com/client/";
  const email = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const loginBtn = page.locator("[value='Login']");
  const products = page.locator(".card-body");

  await page.goto(link);
  await email.fill("destined19876@gmail.com");
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
  if (products.nth(i).locator("b").textContent() === productName)
  {
    await products.nth(i).locator("text=Add to cart").click();
    break;
  }
  }
});
