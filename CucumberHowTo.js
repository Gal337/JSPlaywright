/*RUNNING THE SCENARIOS*/
/*Inside the project, features folder should be created first!
Example: *project name*, inside the project structure right-click -> New folder... -> name new folder: features*/

/*Inside features folder, .feature file should be created. Right-click on features folder -> New file... -> give the new file a *name*.feature;
Example: features (folder), inside this folder new file is created called Ecommerce.feature*/

/*Create folder with step definitions inside features folder. Right-click on features folder -> New folder... -> name the new folder;
Example: features (folder), inside this folder another folder is created called step_definitions*/

/*Inside folder with steps, file with actual steps for .feature file needs to be created. Right-click on steps folder -> New file... -> name it steps.js;
Example: step_definitions (folder), inside this folder new file is created called steps.js*/

/*In steps.js file, code with steps for .feature file are written. To see which steps and code needs to be included, npx cucumber-js command can be run.*/

/*Run scenario by typing in terminal: npx cucumber-js*/
/*By adding --exit at the end, Cucumber will come out of the loop*/

/*HOOKS*/
/*TO make the hooks for environment, new folder called support needs to be created inside
features folder;
Example: features (folder), inside this folder another folder is created called support*/


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
Given *i have info / data I need
When *perform action*
Then verify if performed action is correct*/
