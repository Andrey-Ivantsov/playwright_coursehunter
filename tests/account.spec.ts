import { test, expect } from '@playwright/test';

test.describe('user is not logged in', () => {
  test.use({ storageState: 'notLoggedInState.json' })
  test('failed to log in with wrong password', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/my-account/');
    await page.locator('#username').fill('auto_test_user_1');
    await page.locator('#password').fill('wrong_password');
    await page.locator('[value="Log in"]').click();
    await expect(page.locator('.woocommerce-error')).toBeVisible()
  })

})

test.describe('user is logged in successfully', () => {
  test('correct url', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/my-account/');
    await expect(page).toHaveURL('https://practice.automationbro.com/my-account/');
  })
  test('Dashboard link available', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/my-account/');
    await expect(page.locator('.woocommerce-MyAccount-navigation-link--dashboard a')).toHaveText('Dashboard')
  })

})
