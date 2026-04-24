import { Before, After } from '@cucumber/cucumber'
import { CustomWorld } from './world'
import { chromium } from '@playwright/test'

Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
})

After(async function (this: CustomWorld) {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
})