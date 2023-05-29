import { test, expect } from '@playwright/test';

test.describe.only('user is logged in successfully', () => {
  test('correct url', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/my-account/');
    await expect(page).toHaveURL('https://practice.automationbro.com/my-account/');
  })
  test('Dashboard link available', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/my-account/');
    await expect(page.locator('.woocommerce-MyAccount-navigation-link--dashboard a')).toHaveText('Dashboard')
  })

})
