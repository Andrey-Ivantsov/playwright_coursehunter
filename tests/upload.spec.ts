import { test, expect } from '@playwright/test';
const path = require('path')

test.describe('Upload file', () => {
  test('should upload test file', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/cart/');

    const pathFile = path.join(__dirname, '../data/test.png');

    await page.setInputFiles('input#upfile_1', pathFile);

    await page.locator('#upload_1').click()

    await page.locator('#wfu_messageblock_header_1_1').waitFor({ state: 'visible', timeout: 10000 })

    await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully')
  })

})
