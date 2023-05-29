import { FullConfig, chromium } from "@playwright/test";
import { Browser } from "puppeteer";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://practice.automationbro.com/my-account/');
  await page.context().storageState({ path: 'notLoggedInState.json' });

  await page.locator('#username').fill('auto_test_user_1');
  await page.locator('#password').fill('T1e2s3t4!');
  await page.locator('[value="Log in"]').click();

  await page.context().storageState({ path: 'loggedInState.json' });
  await browser.close();
}
export default globalSetup