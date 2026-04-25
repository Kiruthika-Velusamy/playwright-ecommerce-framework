import { test, Page } from '@playwright/test'
import { expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage';
const testData = [

    {
        username: 'standard_user',
        password: 'secret_sauce',
        expectedresult: 'https://www.saucedemo.com/inventory.html'
    },
    {
        username: 'error_user1',
        password: 'secret_sauce',
        expectedresult: 'Username and password do not match any user in this service'
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        expectedresult: 'Sorry, this user has been locked out'
    }

]

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