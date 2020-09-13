import {loginPageURL} from "../data/url";
import {screen} from "@testing-library/testcafe";
import LoginPage from '../page/login-page'
const loginPage = new LoginPage()


fixture `Login Page UI test`
    .page(loginPageURL);

test('Email and Password fields are present', async t => {

});