import { ClientFunction } from 'testcafe';

export const getWindowLocation = ClientFunction(() => window.location);
export const getPageTitle = ClientFunction(() => document.title);
export const scrollBy = ClientFunction((x, y) => {
   window.scrollBy(x, y);
});
