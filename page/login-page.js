import { Selector, t } from 'testcafe';

export default class LoginPage {
  constructor() {
    this.registerInput = Selector('input[name=email_create]');
    this.loginInput = Selector('input[name=email]');
    this.passwordInput = Selector('input[name=passwd]');
  }

  async loginWithValidCredentials(email, password) {
      await t
          .typeText(this.loginInput, email,  { replace: true })
          .typeText(this.passwordInput, password,  { replace: true })
          .pressKey('enter')
  }
}
