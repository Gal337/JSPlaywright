const base = require('@playwright/test');

exports.customtest = base.test.extend(
  {
    testDataForOrder : {
      username : "4testing2@gmail.com",
      password : "Abc!2345",
      productName : "iphone 13 pro"
      }
  }
)
