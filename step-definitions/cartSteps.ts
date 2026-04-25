import { Given, When, Then } from '@cucumber/cucumber'
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.goto();
    await this.loginPage.login(username, password);
})

Then('I should see the inventory page', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
}
)

When('I logged in as a valid user username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.goto();
    await this.loginPage.login(username, password);
    this.cartPage = new CartPage(this.page);
})

Then('I should be able to add single item to Cart', async function (this: CustomWorld) {
    await this.cartPage.addItemsToCart(1);

})


Then('I should be able to add multiple item to Cart', async function (this: CustomWorld) {
    await this.cartPage.addItemsToCart(3);

})

Then('I should be able to remove item from a cart', async function (this: CustomWorld) {
    await this.cartPage.removeItemInCart(1);

})
