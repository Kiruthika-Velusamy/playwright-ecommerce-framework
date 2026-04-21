import { test, expect } from '@playwright/test'
test('add single item to cart verifies cart badge', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.locator('.shopping_cart_link').click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder("First Name").fill('standard');
    await page.getByPlaceholder("Last Name").fill('user');
    await page.getByPlaceholder("Zip/Postal Code").fill('RH115PG');
     await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'finish' }).click();
    await expect(page.locator('.complete-header')).toHaveText("Thank you for your order!");
})
test('logout clears session and redirects to login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', {name:'Logout'}).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
})