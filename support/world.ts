import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, } from '@playwright/test'
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    loginPage!: LoginPage;
    inventoryPage!: InventoryPage
}
setWorldConstructor(CustomWorld);