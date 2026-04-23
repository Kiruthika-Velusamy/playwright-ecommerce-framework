import { test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


test.describe('Login functionality', () => {
    let loginPage: LoginPage;
   
    test.beforeEach(async ({ page }) => {
         page.pause();
        loginPage = new LoginPage(page);
        await loginPage.goto();
    })
    test('valid login navigates to inventory page', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('invalid login shows error message', async ({ }) => {
        await loginPage.login('error_user1', 'secret_sauce');
        await loginPage.invalidUser('Username and password do not match any user in this service');
    });

    test('locked out user shows error message', async ({ }) => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        await loginPage.lockedUser('Sorry, this user has been locked out.');

    });

});
