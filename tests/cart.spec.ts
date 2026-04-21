import { test, expect } from '@playwright/test'
test('add single item to cart verifies cart badge', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

})
test('add multiple item to cart verifies cart badge', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    page.pause();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const addButtons = page.getByRole('button', { name: 'Add to cart' });
    await addButtons.nth(0).click();
    await addButtons.nth(1).click();
    await addButtons.nth(2).click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('3');

})

test('remove item from cart verifies cart updates', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.getByRole('button', { name: 'Remove' }).first().click();
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();



})