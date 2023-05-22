import { Page, Locator } from "@playwright/test";

class ContactPage {
  page: Page;
  contactLink: Locator;
  nameField: Locator;
  emailField: Locator;
  phoneField: Locator;
  subbmitButton: Locator;
  succesTxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactLink = page.locator('.menu-primary .menu-item-493');
    this.nameField = page.locator('.evf-field-first-name .input-text');
    this.emailField = page.locator('.evf-field-email .input-text');
    this.phoneField = page.locator('.contact-phone .input-text');
    this.subbmitButton = page.locator('.everest-forms-submit-button');
    this.succesTxt = page.locator('.everest-forms-notice');
  }
  async navigate() {
    await this.page.goto('https://practice.automationbro.com/contact/')
  }

  async submitForm(name: string, email: string, phone: string) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.phoneField.fill(phone);
    await this.subbmitButton.click()
  }
}

export default ContactPage