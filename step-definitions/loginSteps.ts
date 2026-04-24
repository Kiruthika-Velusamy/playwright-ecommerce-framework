import { Given, When, Then } from '@cucumber/cucumber'
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../support/world';
import { expect } from '@playwright/test'

Given('I am on the login page', async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto();
})

When('I login with username {string} and password {string}', async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
   

})

Then('I should see the inventory page', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

Then('I should get user not matched error message', async function (this: CustomWorld) {
    await this.loginPage.invalidUser('Username and password do not match any user in this service');
})

Then('I should get user has been locked out error message', async function (this: CustomWorld) {
    await this.loginPage.lockedUser('Sorry, this user has been locked out.');
})

