import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    readonly addtoCart: Locator;
    readonly cartCount: Locator;
    readonly removeItem: Locator;

    constructor(page: Page) {
        super(page);
        this.addtoCart = page.getByRole('button', { name: 'Add to cart' });
        this.cartCount = page.locator('.shopping_cart_badge');
        this.removeItem = page.getByRole('button', { name: 'Remove' });
    }

    async addItemsToCart(count: number) {

        for (let i = 0; i < count; i++) {
            await this.addtoCart.nth(i).click();
        }

        await expect(this.cartCount).toHaveText(count.toString());
    }

    async removeItemInCart(count: number) {
        for (let i = 0; i < count; i++) {
            await this.addtoCart.nth(i).click();
        }

        await expect(this.cartCount).toHaveText(count.toString());
        await this.removeItem.first().click();
        await expect(this.cartCount).not.toBeVisible();
    }

}