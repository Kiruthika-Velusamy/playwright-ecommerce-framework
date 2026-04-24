import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';



test.describe('Cart functionality', () => {
    let cartPage: CartPage;
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page)
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    })
    test('add single item to cart verifies cart badge', async ({ }) => {
        await cartPage.addSingleItem(1);

    })
    test('add multiple item to cart verifies cart badge', async ({  }) => {
        await cartPage.addMultipleItem(3);

    })

    test('remove item from cart verifies cart updates', async ({ page }) => {
        await cartPage.removeItemInCart(1);
        
    })

})









