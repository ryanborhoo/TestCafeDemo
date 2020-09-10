import { Selector, t } from 'testcafe';

export default class LoginPage {
  constructor() {
    this.singInButton = Selector('a[class=login]');
  }

  async hoverOverCategoryLink(category) {
    const categoryLink = Selector('a').withText(category);
    await t.hover(categoryLink);
  }
}
