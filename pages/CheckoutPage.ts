import { Page, Locator, expect } from '@playwright/test'

export class CheckoutPage {
    readonly page: Page;
    readonly addToCart: Locator;
    readonly shoppingCartLink: Locator;
    readonly checkoutButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly thanksForOrder: Locator;
    readonly openMenu: Locator;
    readonly logoutLink: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCart = page.getByRole('button', { name: 'Add to cart' }).first();
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.zipCode = page.getByPlaceholder("Zip/Postal Code");
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'finish' });
        this.thanksForOrder = page.locator('.complete-header')
        this.openMenu = page.getByRole('button', { name: 'Open Menu' })
        this.logoutLink = page.getByRole('link', { name: 'Logout' })
        this.loginButton = page.getByRole('button', { name: 'Login' })

    }

    async placeOrder(firstname: string, lastname: string, zipcode: string, thanksmessage: string) {
        await this.addToCart.click();
        await this.shoppingCartLink.click();
        await this.checkoutButton.click();
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.zipCode.fill(zipcode);
        await this.continueButton.click();
        await this.finishButton.click();
        await expect(this.thanksForOrder).toHaveText(thanksmessage);
    }

    async logout(url: string) {
        await this.openMenu.click();
        await this.logoutLink.click();
        await expect(this.page).toHaveURL(url);
        await expect(this.loginButton).toBeVisible();

    }
}











