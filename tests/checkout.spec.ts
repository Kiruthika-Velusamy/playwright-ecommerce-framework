import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout functionality', () => {
    let loginPage: LoginPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        checkoutPage = new CheckoutPage(page);

    })

    test('add single item to cart verifies cart badge', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await checkoutPage.placeOrder('standard', 'user', 'RH118PL', 'Thank you for your order!');
    })
    test('logout clears session and redirects to login', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await checkoutPage.logout('https://www.saucedemo.com/');
    
    })



});




