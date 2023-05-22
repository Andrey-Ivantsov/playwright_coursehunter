import { Page, Locator, expect } from "@playwright/test";

class BlogPage {
  page: Page;
  postsNumber: Locator;
  postsList: Locator;
  constructor(page: Page) {
    this.page = page;
    this.postsNumber = page.locator('.widget-area .widget_recent_entries li');
    this.postsList = page.locator('#recent-posts-3 ul li');

  }
  async navigate() {
    await this.page.goto('https://practice.automationbro.com/blog/')
  }
}

export default BlogPage