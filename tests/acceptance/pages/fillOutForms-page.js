const BasePage = require('./base-page')
const {expect} = require('@playwright/test')

module.exports = class FillOutFormsPage extends BasePage {

    $s = this.$$s.fillOutFormsSelector;

    async sendFirstInfoCorrectly(firstName, firstMessage) {
        await page.fill(this.$s.INPUT_FIRST_NAME, firstName);
        await page.fill(this.$s.INPUT_FIRST_MESSAGE, firstMessage);
    }

    async clickFirstButtonSubmit() {
        await page.click(this.$s.BUTTON_FIRST_SUBMIT)
    }

    async assertFirstMessageSuccess(phrase) {
        const msgSuccess = await page.locator(this.$s.FIRST_MESSAGE_SUCCESS).textContent()
        await expect(msgSuccess).toEqual(phrase)
    }

    async sendSecondInfoCorrectly(secondName, secondMessage) {
        await page.fill(this.$s.INPUT_SECOND_NAME, secondName);
        await page.fill(this.$s.INPUT_SECOND_MESSAGE, secondMessage);
    }

    async newCalCaptcha() {
        const numbers = await page.locator(this.$s.CALC_RECAPTCHA).textContent()
        let soma = 0

        var newNumbers = numbers.toString().split("+")
        for (let i in newNumbers) {               
                soma += parseInt(newNumbers[i])
        }
            await page.fill(this.$s.INPUT_CALC_RECAPTCHA, String(soma))
    }

    /*
    primeiro método para resolver o captcha - código morto mas registrado apenas para estudo
    async calcRecaptcha() {
        const numbers = await page.locator(this.$s.CALC_RECAPTCHA).textContent()

        let soma = 0
        
        if (numbers.length < 7) {
            var newNumber = []
            for (let i = 0; i < numbers.length; i++) {
                if (!isNaN(numbers[i])) {
                    newNumber.push(parseInt(numbers[i]))
                }
            }

            var n1 = newNumber[0]
            var n2 = newNumber[newNumber.length - 1]
        
            soma = n1 + n2
        }

        else {
            const numeros = numbers[0] + numbers[1]
            const numeros2 = numbers.slice(-3)
            soma = Number(numeros) + Number(numeros2);
        }
        
       await page.fill(this.$s.INPUT_CALC_RECAPTCHA, String(soma))
    }

    */
    
    async clicSecondkButtonSubmit() {
        await page.click(this.$s.BUTTON_SECOND_SUBMIT)
    }

    async assertRecaptchaEntryNotVisible() {
        const inputRecaptcha = await page.locator(this.$s.INPUT_CALC_RECAPTCHA)
        await expect(inputRecaptcha).not.toBeVisible()
    }

    async scrollPage() {
        await page.evaluate(async () => {
            for (let i = 0; i < document.body.scrollHeight; i += 10) {
              window.scrollTo(0, i);
            }
          });
    }
}