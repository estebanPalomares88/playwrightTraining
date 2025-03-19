import {LoginPage} from '../pom/LoginPage';

class LoginPageService {
  constructor(page) {
    this.loginPage = new LoginPage(page);
  }

  async login(username, password) {
    await this.loginPage.username.fill(username);
    await this.loginPage.password.fill(password);
    await this.loginPage.loginButton.click();
  }
}
module.exports = {LoginPageService};
