import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page'

test.describe('first task', () => {

  let blogPage: BlogPage;

  test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page)
    await blogPage.navigate();
  })

  test('number of posts on blog page', async ({ page }) => {
    await expect(blogPage.postsNumber).toHaveCount(5)
  })

  test('number of letters in the name of each post', async ({ page }) => {
    for (const el of await blogPage.postsList.elementHandles()) {
      expect(((await el.textContent())?.trim())?.length)?.toBeGreaterThan(10)
    }
  })
})
