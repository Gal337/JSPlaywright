const { Given, When, Then } = require('@cucumber/cucumber');
const {POManager} = require('../../PageObjects/POManager');
const {test, expect, playwright} = require('@playwright/test');

Given('user logs in to Ecommerce application with {username} and {password}', async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const poManager = new POManager(page);
  
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(data.username, data.password);
});

When('add {string} to cart', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductToCart(data.productName);
  await dashboardPage.navigateToCart();
});

Then('verify {string} is displayed in the cart', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  const cartPage = poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(data.productName);
  await cartPage.Checkout();
});

When('enter valid details and place the order', async function () {
  // Write code here that turns the phrase above into concrete actions
  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("can", "Canada");
  
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
});

Then('verify order is present in OrderHistory', async function () {
  // Write code here that turns the phrase above into concrete actions
  await dashboardPage.navigateToOrders();
  
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

