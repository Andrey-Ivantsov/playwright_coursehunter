import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker'

test.describe('first task', () => {

  let contactPage: ContactPage

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page)
    await contactPage.navigate();
  })

  test('go to conact page and fill the form', async ({ page }) => {
    await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number())
    await expect.soft(contactPage.succesTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
  })
})
