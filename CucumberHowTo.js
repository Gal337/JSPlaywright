/*.feature file should include the steps;
Example: 
Feature: Greeting
Scenario: Say hello
When the greeter says hello
Then I should have heard "hello"*/

/*steps.js file should contain the code so the steps in .feature file get executed
Example:
const assert = require('assert')
const {When, Then} = require('@cucumber/cucumber')
const {Greeter} = require('../../src')

When('the greeter says hello', function () {
  this.whatIHeard = new Greeter().sayHello()
});

Then('I should have heard {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse)
});*/

/*One .feature file can hold multiple scenarios, which are treated
as test cases. Keywords used are: Given, When, Then*/

/*In one scenario, multiple keywords can be used.
Given *i have info / data I need*
When *perform action*
Then *verify if performed action is correct**/

/*RUNNING THE SCENARIOS*/
/*Multiple scenarios that are grouped in one .feature file can be run parallelly. To do that type in terminal;
Example: npx cucumber-js features/Ecommerce.feature --parallel 2 --exit*/
/*To run parameterized scenarios, Outline keyword must be used after Scenario;
Example: Scenario Outline: Placing the order*/
/*Below the steps, parameters must be specified;
Example: 
Examples:
| username | password |
| 4testing | mypass23 | */
/*To use parameters from Examples list, they must be specified inside <> in steps;
Example: Given user logs in to Ecommerce2 application with "<username>" and "<password>" */
/*Scenario Outline will check how many data sets are specified in Examples, and executes the scenario multiple times,
using each data set specified*/

/*If you want to rerun the failed scenario, type in terminal;
Example: npx cucumber-js --retry 1 */

/*Inside the project, features folder should be created first!
Example: *project name*, inside the project structure right-click -> New folder... -> name new folder: features*/

/*Inside features folder, .feature file should be created. Right-click on features folder -> New file... -> give the new file a *name*.feature;
Example: features (folder), inside this folder new file is created called Ecommerce.feature*/

/*Create folder with step definitions inside features folder. Right-click on features folder -> New folder... -> name the new folder;
Example: features (folder), inside this folder another folder is created called step_definitions*/

/*Inside folder with steps, file with actual steps for .feature file needs to be created. Right-click on steps folder -> New file... -> name it steps.js;
Example: step_definitions (folder), inside this folder new file is created called steps.js*/

/*In steps.js file, code with steps for .feature file are written. To see which steps and code needs to be included, npx cucumber-js command can be run.*/

/*Run ALL scenarios by typing in terminal: npx cucumber-js*/
/*If you want to run SPECIFIC scenario then type in terminal: npx cucumber-js features/*name of the scenario*.feature --exit */
/*By adding --exit at the end, Cucumber will come out of the loop and stop running*/

/*USING @ TAGS*/
/*To run scenarios with SPECIFIC tags (can be multiple tags), type in terminal: npx cucumber-js --tags "@Regression" --exit;
Example:
Feature: Ecommerce validations
@Regression
Scenario: Placing the order */

/*HOOKS*/
/*Hooks are used for setup and teardown the environment before and after each scenario;
Example: login is usually common action that user needs to do*/

/*To make the hooks for environment, new folder called support needs to be created inside
features folder;
Example: features (folder), inside this folder another folder is created called support*/

/*Inside support folder, new file called hooks.js needs to be created;
Example: support (folder), inside this folder new file is created called hooks.js*/

/*HOOK ANNOTATIONS AND TAGS*/
/*Before - gets executed before every scenario;
Example: If there are 5 scenarios, code inside Before annotation code block will run 5 times before executing scenarios*/

/*BeforeAll - gets executed only once before all scenarios*/

/*AfterAll - gets executed only once after all scenarios are executed*/

/*To use hook for specific scenario only, tag must be used;
Example: Before({tags: "Regression"}, async function () {*block of code*})*/

/*CREATING HTML REPORT*/
/*To create HTML report in Cucumber, type in terminal;
Example: npx cucumber-js features/Ecommerce.feature --exit --format html:cucumber-report.html */
