import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { TestDataLoader } from '../utils/TestDataLoader';

test.describe('Checkout functionality', () => {
    let loginPage: LoginPage;
    let checkoutPage: CheckoutPage;
    const users = TestDataLoader.getUsers();

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        checkoutPage = new CheckoutPage(page);

    })

    test('add single item to cart verifies cart badge', async ({ page }) => {
        await loginPage.login(users.validUser.username, users.validUser.password);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await checkoutPage.addItemtoCart();
        await checkoutPage.placeOrder('standard', 'user', 'RH118PL', 'Thank you for your order!');
    })
    test('logout clears session and redirects to login', async ({ page }) => {
        await loginPage.login(users.validUser.username, users.validUser.password);
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await checkoutPage.logout();
        await checkoutPage.verifyLogout('https://www.saucedemo.com/');

    })



});




