/*CREATING CSS LOCATORS*/
/*Locator examples are based on https://rahulshettyacademy.com/loginpagePractise/ */

/* If Id is present:
css -> tagname#id or #id
example: input#username or #username

If class attribute is present:
css -> tagname.class or .class
example: input.form-control .form-control

Creating CSS locator based on any attribute:
css -> [attribute='value']
example: [name='username']

Write CSS with traversing from parent to child:
css -> parentTagName >> childTagName

If locator needs to be written based on Text: 
css -> text=''
 */

/*BELOW COMMAND MUST BE INCLUDED BEFORE WRITING TESTS*/
/*const {test, expect, request} = require('@playwright/test')*/
/*
test = for executing tests that we write inside file
expect = assertions in tests are identified and resolved correctly
request = used to access API endpoint and for Web API testing
*/

/*EXECUTING TESTS*/
/*To execute tests we have to type in terminal next command: npx playwright test*/

/*
//This block of code gets executed each time before other tests
test.beforeEach(  () =>
{

}); 
*/

/*
//This block of code gets executed only once before all other tests
test.beforeAll( async() =>
{

});
*/

/*If multiple tests are written inside 1 file, we can append .only to run that test only;
Example: test.only('Browser Context Playwright test',async ({browser})=> 
Or to skip specific test;
Example: test.skip('Browser Context Playwright test',async ({browser})=>*/
/*If we have multiple files with tests and we want to run specific file (not whole Tests folder),
then we need to specify the file with command in terminal: npx playwright test tests/name of the file/test;
Example: npx playwright test tests/AutomatedLogin.spec.js*/

/*2 CORE FILES*/
/*Playwright config file and package.json file*/
/*In package.json file under scripts, multiple custom (test execution) scripts can be added;
Example: "scripts": {
    "test": "npx playwright test tests/WebAPI.spec.js --headed",
    "regression": "npx playwright test",
    "webTests": "npx playwright test --grep @Web",
    "apiTests": "npx playwright test --grep @API",
    "FirefoxNewConfig": "npx playwright test --config playwright.config1.js --project=firefox",
  },*/
/*To run specific script that was added to package.json file, type below command;
Example: npm run webTests*/

/*SELECTING CONFIG FILE*/
/*If there are multiple Playwright config files, we can use specific config file by entering the config file in terminal
Example: npx playwright test tests/name of the test.spec.js --config playwright.config1.js*/
/*Different config parameters can be used for projects, by creating a projects array inside config file and then specifying which 
project configuration to run.
Example: npx playwright test tests/name of the test.spec.js --config playwright.config1.js --project=firefox*/

/*PLAYWRIGHT CONFIG*/
/*Inside the file playwright.config.js we can configure how Playwright acts*/
/*Normally we specify what we want inside the use: code block;
Example:
  use: {
    //Declare which browser to use
    browserName: 'chromium',
    //Headless mode (true / false)
    headless: false 
    //Takes screenshot (on / off / only-on-failure)
    screenshot : 'on',
    //Makes trace (on / off / retain-on-failure)
    trace : 'retain-on-failure',
    //Opens browser with specific dimensions
    viewport: {width: 720, height: 720},
    //Specifying which device the test will run on (type ...devices ['device name'])
    ...devices['iPhone 11'],
    //Bypassing the SSL error message on website (true / false)
    ignoreHttpsErrors: true,
    //Allowing location
    permissions:['geolocation'],
    //Recording video (off / on / retain-on-failure / on-first-retry)
    video: 'on-first-retry',
    }*/

/*DEBUGGING TESTS*/
/*To enter debug mode add --debug at the end of command in terminal;
Example: npx playwright test tests/UIBasicsTest.spec.js --debug*/

/*To debug the tests inside VSCode, open file package.json
and enter the below command inside "scripts":
Example:
"scripts": {
    "test" : "npx playwright test tests/WebAPI.spec.js --headed"
  },*/

/*RECORDING THE TEST*/
/*To record the test we can do it with codegen + URL;
Example: npx playwright codegen https://www.google.com*/

/*TAGGING THE TESTS AND RUNNING THEM*/
/*To tag the test use @ + appropriate word infront of test title and inside single quotes;
Example: test(`@Web E2E flow test for ${data.productName}`, async ({page})... 
And to run ONLY the tests with specific tag enter the command in terminal;
Example: npx playwright test --grep @Web*/

/*INSTALLING ALLURE AND CREATING ALLURE REPORT*/
/*In terminal window type: npm i -D @playwright/test allure-playwright
Command above will install plugin for creating Allure reports*/
/*To create results folder from which Allure reports are created type the command in terminal:
Example: npx playwright test --grep @Web --reporter=line,allure-playwright*/
/*To generate allure report after test execution has completed, type the command in terminal:
Example: allure generate ./allure-results --clean*/
/*To open the created allure report, type the command in terminal:
Example: allure open ./allure-report*/

/*JENKINS*/
/*username: admin
geslo: 4t3sting*/
/*To run project from local machine, define the path of project under General -> Advanced */
/*To run the tests in Jenkins, specify the name of the script;
Example: npm run webTests*/

/*Just testing*/
