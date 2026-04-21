import { test, expect } from '@playwright/test'
test('valid login navigates to inventory page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.pause();
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});
test('invalid login shows error message', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.pause();
    await page.getByPlaceholder("Username").fill('error_user1');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Username and password do not match any user in this service')).toBeVisible();

});
test('locked out user shows error message', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.pause();
    await page.getByPlaceholder("Username").fill('locked_out_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Sorry, this user has been locked out.')).toBeVisible();

});