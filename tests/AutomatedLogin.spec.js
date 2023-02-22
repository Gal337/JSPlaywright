const {test, expect} = require('@playwright/test');

//Excersise #1 - Automated Login
test.only('Automated login test',async ({page})=>
{
  const link = "https://rahulshettyacademy.com/client/";
  const email = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const loginBtn = page.locator("[value='Login']");

  await page.goto(link);
  await email.fill("destined19876@gmail.com");
  await password.type("Abc!2345");
  await loginBtn.click();
  //Waiting for the website to load
  await page.waitForLoadState('networkidle');
  //Printing titles of products to terminal
  const titles = await page.locator(".card-body b").allTextContents();

  console.log(titles);
});
