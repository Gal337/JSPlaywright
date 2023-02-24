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

/*If multiple tests are written inside 1 file, we can append .only to run that test only;
Example: test.only('Browser Context Playwright test',async ({browser})=> */
/*If we have multiple files with tests and we want to run specific file (not whole Tests folder),
then we need to specify the file with command in terminal: npx playwright test tests/*name of the file/test;
Example: npx playwright test tests/AutomatedLogin.spec.js*/

/*DEBUGGING TESTS*/
/*To enter debug mode add --debug at the end of command in terminal;
Example: npx playwright test tests/UIBasicsTest.spec.js ==debug*/


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
