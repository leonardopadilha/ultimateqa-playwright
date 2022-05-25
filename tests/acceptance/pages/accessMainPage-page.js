const BasePage = require('./base-page')
const {expect} = require('@playwright/test')

const getEnvString = require('../helpers/get-env-string');

module.exports = class AccessMainPagePage extends BasePage {
    $s = this.$$s.accessMainPageSelector;

    async assertHeaderText() {
        const headerText = await page.locator(this.$s.HEADER_TEXT_MAIN_PAGE).textContent();
        await expect(headerText).toEqual('Master test Automation, Faster.')
    }

    async searchBox(phrase) {
        await page.fill(this.$s.INPUT_SEARCH_BOX, phrase)
        await page.keyboard.press('Enter')
    }

    async clickInAutomationExercises() {
        const clickAutomationExercises = await page.locator(this.$s.LINK_Automation_Exercises)
        await clickAutomationExercises.click()
    }

    async assertUrlAutomation() {
        await expect(page).toHaveURL(getEnvString('URL_AUTOMATION_EXERCISES'))
    }
}