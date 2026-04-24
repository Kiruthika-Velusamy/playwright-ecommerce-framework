import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { TestDataLoader } from '../utils/TestDataLoader';

test.describe('Cart functionality', () => {
    let cartPage: CartPage;
    let loginPage: LoginPage;
    const users = TestDataLoader.getUsers();

    test.beforeEach(async ({ page }) => {
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page)
        await loginPage.goto();
        await loginPage.login(users.validUser.username, users.validUser.password);
    })
    test('add single item to cart verifies cart badge', async () => {
        await cartPage.addItemsToCart(1);

    })
    test('add multiple item to cart verifies cart badge', async () => {
        await cartPage.addItemsToCart(3);

    })

    test('remove item from cart verifies cart updates', async () => {
        await cartPage.removeItemInCart(1);

    })

})









