const {Given, When, Then} = require('@cucumber/cucumber')
const getEnvString = require('../helpers/get-env-string');

const AutomationPage = require('../pages/automation-page')

let automationPage = new AutomationPage() 

Given('que acesso a tela automation do site ultimateqa', async function() {
    await page.goto(getEnvString("URL_AUTOMATION_EXERCISES"))
})

When('clico no link {string}', async function(linkPage) {
    await automationPage.clickLinkPage(linkPage)
})

Then('o redirecionamento para a {string} ocorre com sucesso', async function(linkPage) {
    await automationPage.assertPage()
})