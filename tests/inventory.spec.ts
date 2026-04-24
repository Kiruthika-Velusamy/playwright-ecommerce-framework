import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage'
import { TestDataLoader } from '../utils/TestDataLoader';

test.describe('Inventory functionality', () => {
    let inventoryPage: InventoryPage;
    let loginPage: LoginPage;
    const users = TestDataLoader.getUsers();

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.validUser.username, users.validUser.password);
    })
    test('sort products by price low to high', async ({ }) => {
        await inventoryPage.sortByPrice('Price (low to high)');
    })

    test('sort products by name Z to A', async ({ }) => {
        await inventoryPage.sortByName('Name (Z to A)');
    })

})

