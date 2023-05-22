import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('home', () => {

  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  })

  const expectedLinks = [
    "Home",
    "About",
    "Shop",
    "Blog",
    "Contact",
    "My account",
  ];

  test('Open HomePage and verify title', async ({ page }) => {
    await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
  })

  test('Click get started button using CSS Selector', async ({ page }) => {
    await homePage.getStartedBtn.click()
    await expect(page).toHaveURL(/.*#get-started/)
  })

  test('Verify heading text is visible using text selector', async ({ page }) => {
    const headingText = homePage.headingText
    await expect(headingText).toBeVisible();
  })

  test('Verify home link is enable using text and CSS selector', async ({ page }) => {
    const homeText = await homePage.homeLink;
    await expect(homeText).toBeEnabled();
  })

  test('Verify navigation bar', async ({ page }) => {
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  })

  test('Verify navigation bar on the n-th element', async ({ page }) => {
    expect(await homePage.getNavLinkNthText()).toEqual(expectedLinks[3]);
  })
})
