class LoginPage {

  constructor(page)
  {
    this.page = page;
    this.signInButton = page.locator("[value='Login']");
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
  }

  async goTo()
  {
    await this.page.goto("https://rahulshettyacademy.com/client/");
  }

  async validLogin(username, password)
  {
    await this.userName.type(username);
    await this.password.type("Abc!2345");
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }
  
}

module.exports = {LoginPage};
