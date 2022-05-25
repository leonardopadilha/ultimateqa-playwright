const {Given, When, Then} = require('@cucumber/cucumber');
const getEnvString = require('../helpers/get-env-string');

const FillOutFormsPage = require('../pages/fillOutForms-page');

let fillOutFormsPage = new FillOutFormsPage()

Given('que acesso a pagina Fill out forms', async function() {
    await page.goto(getEnvString("URL_FILL_OUT_FORMS"))
})

When('preencho os campos {string}, {string}, {string}, {string} corretamente', 
async function(firstName, firstMessage, secondName, secondMessage) {

    await fillOutFormsPage.sendFirstInfoCorrectly(firstName, firstMessage)
    await fillOutFormsPage.clickFirstButtonSubmit()

    await fillOutFormsPage.sendSecondInfoCorrectly(secondName, secondMessage)
    await fillOutFormsPage.newCalCaptcha()
    await fillOutFormsPage.clicSecondkButtonSubmit()
})

Then('o email e enviado com sucesso conforme {string}', async function(message, ) {
    await fillOutFormsPage.assertFirstMessageSuccess(message)
    await fillOutFormsPage.assertRecaptchaEntryNotVisible()
})