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


/*EXECUTING TESTS*/
/*To execute tests we have to type in terminal next command: npx playwright test*/

/*To run specific test we can append .only to the test we want to run
Example: test.only('Browser Context Playwright test',async ({browser})=> */


/*PLAYWRIGHT CONFIG*/
/*Inside the file playwright.config.js we can configure how Playwright acts*/
/*Normally we specify what we want inside the use: code block;
Example:
  use: {
    //Declare which browser to use
    browserName: 'chromium',
    //Headless mode (true / false)
    headless: false 
*/
