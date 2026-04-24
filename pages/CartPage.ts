import { Page, Locator, expect } from '@playwright/test'
import { stringify } from 'querystring';
export class CartPage {
    readonly page: Page;
    readonly addtoCart: Locator;
    readonly cartCount: Locator;
    readonly removeItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addtoCart = page.getByRole('button', { name: 'Add to cart' });
        this.cartCount = page.locator('.shopping_cart_badge');
        this.removeItem = page.getByRole('button', { name: 'Remove' });
    }

    async addSingleItem(count: number) {

        for (let i = 0; i < count; i++) {
            await this.addtoCart.nth(i).click();
        }
        let c = count.toString();
        await expect(this.cartCount).toHaveText(c);
    }

    async addMultipleItem(count: number) {
        for (let i = 0; i < count; i++) {
            await this.addtoCart.nth(i).click();
        }
        let c = count.toString();
        await expect(this.cartCount).toHaveText(c);
    }

    async removeItemInCart(count: number) {
        for (let i = 0; i < count; i++) {
            await this.addtoCart.nth(i).click();
        }
        let c = count.toString();
        await expect(this.cartCount).toHaveText(c);
        await this.removeItem.first().click();
        await expect(this.cartCount).not.toBeVisible();
    }

}