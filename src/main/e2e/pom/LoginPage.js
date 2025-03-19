class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('id=user-name');
    this.password = page.locator('id=password');
    this.loginButton = page.locator('id=login-button');
  }
}
module.exports = {LoginPage};
