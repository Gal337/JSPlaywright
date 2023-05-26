const {test, expect} = require('@playwright/test');
//Importing data fixture for test
const {customtest} = require('../utils/test-base');
//Initializing the page object manager file
const {POManager} = require('../PageObjects/POManager');
//Converting JSON into JS object (JSON conversion: json -> string -> JS object)
const dataset = JSON.parse(JSON.stringify(require("../utils/PlaceOrderTestData.json")));

//Writing FOR loop to run the test with different test data
for(const data of dataset)
{
//===============ClientApp================
//Complete E2E flow test with dynamic test title creation (for each test data, different title will be shown)
test(`E2E flow test for ${data.productName}`, async ({page}) =>
{
  const poManager = new POManager(page);
  
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(data.username, data.password);

  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductToCart(data.productName);
  await dashboardPage.navigateToCart();
  
  const cartPage = poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(data.productName);
  await cartPage.Checkout();

  const ordersReviewPage = poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("can", "Canada");
  
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
  await dashboardPage.navigateToOrders();
  
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});
}

//Test using data fixture
customtest(`E2E flow test`, async ({page, testDataForOrder}) =>
{
  const poManager = new POManager(page);
  
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductToCart(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
  await cartPage.Checkout();
});

