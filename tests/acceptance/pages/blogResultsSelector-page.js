const BasePage = require('./base-page')
const {expect} = require('@playwright/test')

module.exports = class BlogResultsSelector extends BasePage {
    $s = this.$$s.blogResultsSelector;

    async assertViewBlog() {
        const viewBlog = await page.locator(this.$s.TITLE_BLOG_RESULTS)
        await expect(viewBlog).toBeVisible()
    }
}