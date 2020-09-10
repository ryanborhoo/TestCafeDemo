import { Selector } from 'testcafe';

export default class LoginPage {
  constructor() {
    this.singInButton = Selector('a[class=login]');
  }
}
