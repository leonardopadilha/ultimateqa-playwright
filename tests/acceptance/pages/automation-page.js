const BasePage = require('./base-page')
const {expect} = require('@playwright/test')

const getEnvString = require('../helpers/get-env-string');

module.exports = class AutomationPage extends BasePage {

    $s = this.$$s.automationSelector;
    
    async clickLinkPage(linkPage) {
        switch (linkPage) {
            case 'Big page with many elements' :
                await page.click(this.$s.BIG_PAGE_WITH_MANY_ELEMENTS)
                break;
            case 'Fake Landing Page' :
                await page.click(this.$s.FAKE_LANDING_PAGE)
                break;
            case 'Fake Pricing Page' :
                await page.click(this.$s.FAKE_PRICING_PAGE)
                break;
            case 'Fill out forms' :
                await page.click(this.$s.FILL_OUT_FORMS)
                break;
            case 'Learn how to automate an application that evolves over time' :
                await page.click(this.$s.LEARN_HOW_TO_AUTOMATION)
                break;
            case 'Login automation' :
                await page.click(this.$s.LOGIN_AUTOMATION)
                break;
            case 'Interactions with simple elements' :
                await page.click(this.$s.INTERACTIONS_WITH_SIMPLE_ELEMENTS)
                break;
        }
    }

    async assertPage(linkPage) {
            switch(linkPage) {
            case 'Big page with many elements' :
                await expect (page).toHaveURL(getEnvString('URL_BIG_PAGE_WITH_MANY_ELEMENTS'))
                break;
            case 'Fake Landing Page' :
                await expect (page).toHaveURL(getEnvString('URL_FAKE_LANDING_PAGE'))
                break;
            case 'Fake Pricing Page' :
                await expect (page).toHaveURL(getEnvString('URL_FAKE_PRICING_PAGE'))
                break;
            case 'Fill out forms' :
                await expect (page).toHaveURL(getEnvString('URL_FILL_OUT_FORMS'))
                break;
            case 'Learn how to automate an application that evolves over time' :
                await expect (page).toHaveURL(getEnvString('URL_LEARN_HOW_TO_AUTOMATE_AN_APPLICATION_THAT_ENVOLVES_OVER_TIME'))
                break;
            case 'Login automation' :
                await expect (page).toHaveURL(getEnvString('URL_LOGIN_AUTOMATION'))
                break;
            case 'Interactions with simple elements' :
                await expect (page).toHaveURL(getEnvString('URL_INTERACTIONS_WITH_SIMPLE_ELEMENTS'))
                break;
            }
    }
}