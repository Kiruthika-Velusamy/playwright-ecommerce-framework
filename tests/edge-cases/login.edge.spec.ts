import { test, Page, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
test.describe('Login edge cases', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    })

    test('empty username shows error', async ({ page }) => {
        await loginPage.login('', 'secret_sauce');
        await expect(page.getByText('Username is required')).toBeVisible();
    })

    test('empty password shows error', async ({ page }) => {
        await loginPage.login('standard_user', '');
        await expect(page.getByText('Password is required')).toBeVisible();
    })

    test('empty username and password shows error', async ({ page }) => {
        await loginPage.login('', '');
        await expect(page.getByText('Username is required')).toBeVisible();
    })

    test('long user name does not crash', async ({ page }) => {
        const longUsername = 'a'.repeat(2000);
        await loginPage.login('longUsername', 'secret_sauce');
        await expect(page).not.toHaveURL('/inventory/');
    })

    test('SQL injection attempt in username', async ({ page }) => {
        await loginPage.login("' OR '1'='1", 'secret_sauce')
        await expect(page).not.toHaveURL(/inventory/)
        await expect(page.getByText('Username and password do not match'))
            .toBeVisible()
    })

    test('XSS attempt in username', async ({ page }) => {
        await loginPage.login('<script>alert("xss")</script>', 'secret_sauce')
        await expect(page).not.toHaveURL(/inventory/)
    })

})

