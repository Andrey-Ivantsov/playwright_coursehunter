import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path')

test.describe.only('Upload file', () => {

  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.navigate();
  })

  const fileName = ['test_1.png', 'test_2.jpg']

  for (const name of fileName) {
    test(`should upload test file ${name}`, async ({ page }) => {
      const filePath = path.join(__dirname, `../data/${name}`);
      cartPage.uploadComponent().uploadFile(filePath)
      await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', { timeout: 15000 })
    })
  }
})
