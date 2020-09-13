import { screen } from '@testing-library/testcafe';
import {loginPageURL} from "../data/url";
import LoginPage from '../page/login-page'
const loginPage = new LoginPage()



fixture `Login test`
    .page(loginPageURL);

test('Login with valid credentials', async t => {

});

test('Login with invalid credentials', async t => {

});

test('Reset password', async t => {

});