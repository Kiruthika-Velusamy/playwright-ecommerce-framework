import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage';
import { InventoryPage } from './InventoryPage';

export class LoginPage extends BasePage {
    readonly userName: Locator;
    readonly Password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.userName = page.getByPlaceholder("Username");
        this.Password = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async loginAndGoToInventory(username: string, password: string): Promise<InventoryPage> {
        await this.login(username, password);
        return new InventoryPage(this.page);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');

    }
    async login(username: string, password: string) {
        await this.userName.fill(username);
        await this.Password.fill(password);
        await this.loginButton.click();
    }
    async invalidUser(errormessage: string) {
        await expect(this.page.getByText(errormessage)).toBeVisible();
    }
    async lockedUser(errormessage: string) {
        await expect(this.page.getByText(errormessage)).toBeVisible();
    }

}