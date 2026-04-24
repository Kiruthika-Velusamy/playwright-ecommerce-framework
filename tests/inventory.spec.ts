import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage'

test.describe('Inventory functionality', () => {
    let inventoryPage: InventoryPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

    })
    test('sort products by price low to high', async ({ }) => {
        await inventoryPage.sortByPrice('Price (low to high)');
    })

    test('sort products by name Z to A', async ({ }) => {
        await inventoryPage.sortByName('Name (Z to A)');
    })

})

