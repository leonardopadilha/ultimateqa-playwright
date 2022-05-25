const {Given, When, Then} = require('@cucumber/cucumber');
const getEnvString = require('../helpers/get-env-string');

const AccessMainPagePage = require('../pages/accessMainPage-page') ;
const BlogResultsSelector = require('../pages/blogResultsSelector-page')

let accessMainPage = new AccessMainPagePage()
let blogResultsSelector = new BlogResultsSelector()

Given('que acesso o site ultimateqa', async function() {
    await page.goto(getEnvString("URL_HOME"))
})

When('visualizo as informacoes apresentadas', async function() {

})

Then('sao apresentados os dados da pagina principal', async function() {
    await accessMainPage.assertHeaderText()
})

When('clico no menu Automation Exercises', async function() {
    await accessMainPage.clickInAutomationExercises()
})

Then('sou direcionado para pagina correspondente', async function() {
    await accessMainPage.assertUrlAutomation()
})

When('realizo pesquisa atraves do {string}', async function(SearchResults) {
    await accessMainPage.searchBox(SearchResults)
})

Then('sou redirecionado para a pagina do blog', async function() {
    await blogResultsSelector.assertViewBlog()
})

