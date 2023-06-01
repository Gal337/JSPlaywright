const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../PageObjects/POManager');
const { test, expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('user logs in to Ecommerce application with {string} and {string}', {timeout: 100*1000}, async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  const products = this.page.locator(".card-body");
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(username, password);
});

When('add {string} to cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductToCart(productName);
  await this.dashboardPage.navigateToCart();
});

Then('verify {string} is displayed in the cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  const cartPage = this.poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(productName);
  await cartPage.Checkout();
});

When('enter valid details and place the order', async function () {
  // Write code here that turns the phrase above into concrete actions
  const ordersReviewPage = this.poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("can", "Canada");
  
  this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(this.orderId);
});

Then('verify order is present in OrderHistory', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.dashboardPage.navigateToOrders();
  
  const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(this.orderId);
  expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

/*=================ErrorValidations scenario steps=================*/
Given('user logs in to Ecommerce2 application with {string} and {string}', async function (username, password) {
  const userName = this.page.locator('#username');
  const signIn = this.page.locator("#signInBtn");
  await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await this.page.title());
  await userName.type(username);
  await this.page.locator("[type='password']").type(password);
  await signIn.click();
});

Then('verify that error message is', async function () {
  console.log(await this.page.locator("[style*='block']").textContent());
  await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
});
