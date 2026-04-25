import { test, Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage';
import { CSVDataLoader } from '../../utils/CSVDataLoader';

const testData = CSVDataLoader.getLoginData();

for (const data of testData) {
    test(`Login with user ${data.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(data.username, data.password);
        if (data.expectedresult.startsWith('https')) {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        }
        else {
          await expect(page.getByText(data.expectedresult)).toBeVisible();
        }
    })
}