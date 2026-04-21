import { test, expect } from '@playwright/test'
test('sort products by price low to high', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('combobox').selectOption('Price (low to high)');
    const prices=await page.locator('.inventory_item_price').allTextContents();
    const numbers=prices.map(p=>parseFloat(p.replace('$','')))
    for(let i=0;i<numbers.length-1;i++)
    {
      expect(numbers[i]).toBeLessThanOrEqual(numbers[i+1])
    }

})
test('sort products by name Z to A', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder("Username").fill('standard_user');
    await page.getByPlaceholder("Password").fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('combobox').selectOption('Name (Z to A)');
    const names=await page.locator('.inventory_item_name').allTextContents();
    const sorted=[...names].sort().reverse();
    expect(names).toEqual(sorted);
    
})