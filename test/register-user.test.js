import { screen } from '@testing-library/testcafe';
import {loginPageURL} from "../data/url";
import LoginPage from '../page/login-page'
const loginPage = new LoginPage()



fixture `Register test`
    .page(loginPageURL);

test('Register new user', async t => {

});

test('Register with existing username', async t => {

});