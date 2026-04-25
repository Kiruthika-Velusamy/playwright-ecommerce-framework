import { Given, When, Then } from '@cucumber/cucumber'
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

Given('I am on the login page', async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto();
})

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
})


Then('I should see the inventory page', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
}
)

Given('I logged in as a valid user username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.goto();
    await this.loginPage.login(username, password);
    this.checkoutPage = new CheckoutPage(this.page);
})

When('I add items to cart', async function (this: CustomWorld) {

    await this.checkoutPage.addItemtoCart();
})

Then('I should place order successfully', async function (this: CustomWorld) {

    await this.checkoutPage.placeOrder('standard', 'user', 'RH118PL', 'Thank you for your order!');
})

When('I logout', async function (this: CustomWorld) {

    await this.checkoutPage.logout();
})

Then('I back to login page and I should see the url {string}', async function (this: CustomWorld, url:string) {

    await this.checkoutPage.verifyLogout(url);
})