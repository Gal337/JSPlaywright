const {test, expect} = require('@playwright/test');

//Static select dropdown menu
test('Static dropdown test',async ({page})=>
{
  const link = "https://rahulshettyacademy.com/loginpagePractise/";
  const userName = page.locator('#username');
  const password = page.locator("[type='password']");
  const signIn = page.locator("#signInBtn");

  
});
