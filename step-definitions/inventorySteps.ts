import { Given, When, Then, } from '@cucumber/cucumber'
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CustomWorld } from '../support/world';
import { expect } from '@playwright/test'

Given('I am on the login page', async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto();
})

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {

    this.inventoryPage = await this.loginPage.loginAndGoToInventory(username, password);

})

Then('I should see the inventory page', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
}
)

Given('I am logged in as a valid user', async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto();
    this.inventoryPage = await this.loginPage.loginAndGoToInventory('standard_user', 'secret_sauce');

})

When('I sort products by price', async function (this: CustomWorld) {
    await this.inventoryPage.sortByPrice('Price (low to high)');
})

Then('products should be displayed low to high',async function(this: CustomWorld) {
     await this.inventoryPage.verifyPriceSortedLowToHigh();
})

When('I sort products by name', async function (this: CustomWorld) {
    await this.inventoryPage.sortByName('Name (Z to A)');
})

Then('products should be displayed Z to A',async function(this: CustomWorld) {
    await this.inventoryPage.verifyNameSortedZtoA();
})

