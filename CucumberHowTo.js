/*RUNNING THE SCENARIOS*/
/*Inside the project features folder should be created first!
Example: *project name*, inside the project structure feature folder is created*/
/*Inside feature folder, .feature file should exist;
Example: features (folder), inside this folder new file is created called Ecommerce.feature*/
/*Create folder with step definitions inside features folder;
Example: features (folder), inside this folder another folder is created called step_definitions*/
/*Run scenario by typing in terminal: npx cucumber-js*/


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
