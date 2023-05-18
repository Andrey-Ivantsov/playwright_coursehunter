import { test, expect } from '@playwright/test';

test.describe('first task', () => {
  test('number of posts on blog page', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/blog/');
    const postsNumber = page.locator('.widget-area .widget_recent_entries li');
    await expect(postsNumber).toHaveCount(5)
  })
  test('number of letters in the name of each post', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/blog/');
    const postsNumber = page.locator('.widget-area .widget_recent_entries li');
    for (const el of await postsNumber.elementHandles()) {
      console.log(el)
      expect(((await el.textContent()).trim()).length).toBeGreaterThan(15)
    }
  })
})
