const { remote } = require('webdriverio')

class PaymentCommercePage {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get fullNameField(){return this.driver.$('~Full Name* input field')}
    get cardNumberField(){return this.driver.$('~Card Number* input field')}
    get exDateField(){return this.driver.$('~Expiration Date* input field')}
    get securityCodeField(){return this.driver.$('~Security Code* input field')}
    get reviewOrderButton(){return this.driver.$('~Review Order button')}

    async paymentMethod(fullName, cardNumber, exDate, securityCode){
        await this.fullNameField.setValue(fullName)
        await this.cardNumberField.setValue(cardNumber)
        await this.exDateField.setValue(exDate)
        await this.securityCodeField.setValue(securityCode)
        await this.reviewOrderButton.click()
    } 


}

module.exports = PaymentCommercePage