import { test, expect } from '@playwright/test';

test.describe('first task', () => {
  test('go to conact page and fill the form', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/#get-started');
    const contactLink = await page.locator('.menu-primary .menu-item-493').click();
    const nameField = await page.locator('.evf-field-first-name .input-text').fill('andrey');
    const emailField = await page.locator('.evf-field-email .input-text').fill('test@mail.test');
    const phoneField = await page.locator('.contact-phone .input-text').fill('1234567890');
    const subbmitButton = await page.locator('.everest-forms-submit-button').click()
    await page.pause()
    await expect.soft(page.locator('.everest-forms-notice')).toHaveText('!!!Thanks for contacting us! We will be in touch with you shortly')
  })
})
