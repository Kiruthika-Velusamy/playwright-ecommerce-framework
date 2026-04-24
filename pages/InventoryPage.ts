import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage';
export class InventoryPage extends BasePage {
    readonly sort: Locator;
    readonly allItemPrice: Locator;
    readonly allItemName: Locator;

    constructor(page: Page) {
        super(page)
        this.sort = page.getByRole('combobox');
        this.allItemPrice = page.locator('.inventory_item_price')
        this.allItemName = page.locator('.inventory_item_name')
    }

    async sortByPrice(price: string) {
        await this.sort.selectOption(price);
        const prices = await this.allItemPrice.allTextContents();
        const numbers = prices.map(p => parseFloat(p.replace('$', '')))
        for (let i = 0; i < numbers.length - 1; i++) {
            expect(numbers[i]).toBeLessThanOrEqual(numbers[i + 1])
        }
    }

    async sortByName(name: string) {
        await this.sort.selectOption(name);
        const names = await this.allItemName.allTextContents();
        const sorted = [...names].sort().reverse();
        expect(names).toEqual(sorted);
    }

}