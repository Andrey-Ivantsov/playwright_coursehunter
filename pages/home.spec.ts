import { Page, Locator } from "@playwright/test";

class HomePage {
  page: Page;
  getStartedBtn: Locator;
  headingText: Locator;
  homeLink: Locator;
  navLinks: Locator;
  navLinkNth: Locator;
  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator('#get-started');
    this.headingText = page.locator('text=Think different. Make different.');
    this.homeLink = page.locator('#primary-menu >> text=Home');
    this.navLinks = page.locator('#primary-menu li[id*=menu]');
    this.navLinkNth = page.locator('#primary-menu li[id*=menu]').nth(3);
  }

  async navigate() {
    await this.page.goto('https://practice.automationbro.com/');
  }
  getNavLinksText() {
    return this.navLinks.allTextContents()
  }
  getNavLinkNthText() {
    return this.navLinkNth.textContent()
  }
}
export default HomePage