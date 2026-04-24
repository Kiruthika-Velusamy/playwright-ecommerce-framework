import { test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { TestDataLoader } from '../utils/TestDataLoader';

test.describe('Login functionality', () => {
    let loginPage: LoginPage;
    const users= TestDataLoader.getUsers();
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    })
    test('valid login navigates to inventory page', async ({ page }) => {
       
        await loginPage.login(users.validUser.username, users.validUser.password);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('invalid login shows error message', async () => {
        await loginPage.login(users.invalidUser.username, users.validUser.password);
        await loginPage.invalidUser('Username and password do not match any user in this service');
    });

    test('locked out user shows error message', async () => {
        await loginPage.login(users.lockedUser.username, users.validUser.password);
        await loginPage.lockedUser('Sorry, this user has been locked out.');

    });

});
