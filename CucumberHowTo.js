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
