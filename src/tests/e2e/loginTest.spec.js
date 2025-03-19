import { test, expect } from '@playwright/test';
import { LoginPageService } from '../../main/e2e/service/LoginPageService';

test('login test', async ({ page }) => {
    const loginPageService = new LoginPageService(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPageService.login('standard_user', 'secret_sauce');
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});