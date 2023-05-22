import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path')

test.describe('Upload file', () => {

  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.navigate();
  })

  test('should upload test file', async ({ page }) => {
    const filePath = path.join(__dirname, '../data/test.png');
    cartPage.uploadComponent().uploadFile(filePath)
    await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', { timeout: 10000 })
  })

})
