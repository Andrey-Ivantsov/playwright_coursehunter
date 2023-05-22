import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page'

test.describe('first task', () => {
  let blogPage: BlogPage;

  test('number of posts on blog page', async ({ page }) => {
    blogPage = new BlogPage(page)

    await blogPage.navigate();

    await expect(blogPage.postsNumber).toHaveCount(5)
  })

  test('number of letters in the name of each post', async ({ page }) => {
    blogPage = new BlogPage(page)

    await blogPage.navigate();

    const postsList = blogPage.postsList;

    for (const el of await postsList.elementHandles()) {
      expect(((await el.textContent())?.trim())?.length)?.toBeGreaterThan(10)
    }
  })
})
