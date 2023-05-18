import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path')

test.describe('Upload file', () => {
  let cartPage: CartPage;
  test.only('should upload test file', async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.navigate();
    const filePath = path.join(__dirname, '../data/test.png');
    cartPage.uploadComponent().uploadFile(filePath)
    await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', { timeout: 10000 })
  })

})
