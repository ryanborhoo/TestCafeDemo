import { landingPageURL } from '../data/url';
import {screen} from "@testing-library/testcafe";
import LandingPage from '../page/landing-page'
const landingPage = new LandingPage()

fixture `Landing Page UI test`
    .page(landingPageURL);

test('Check for Category links', async t => {
    await t.maximizeWindow()
    await landingPage.hoverOverCategoryLink('WOMEN')
    await landingPage.hoverOverCategoryLink('DRESSES')
    await landingPage.hoverOverCategoryLink('T-SHIRTS')
    await t
        .expect(screen.queryAllByTitle('Contact Us').exists).ok()
});