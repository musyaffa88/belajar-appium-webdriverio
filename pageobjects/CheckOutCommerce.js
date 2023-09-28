const { remote } = require('webdriverio')

class CheckOutCommercePage {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get fullNameField(){return this.driver.$('~Full Name* input field')}
    get addresLine1Field(){return this.driver.$('~Address Line 1* input field')}
    get addresLine2Field(){return this.driver.$('~Address Line 2* input field')}
    get cityField(){return this.driver.$('~City* input field')}
    get stateField(){return this.driver.$('~State/Region input field')}
    get zipCodeField(){return this.driver.$('~Zip Code* input field')}
    get countryField(){return this.driver.$('~Country* input field')}
    get paymentButton(){return this.driver.$('~To Payment button')}

    async enterShippingAddres(fullname, addresline1, addresline2, city, state, zipcode, country){
        await this.fullNameField.setValue(fullname)
        await this.addresLine1Field.setValue(addresline1)
        await this.addresLine2Field.setValue(addresline2)
        // await this.driver.touchPerform([
        //     { action: 'press', options: { x: 600, y: 600 } },
        //     { action: 'wait', options: { ms: 500 } },
        //     { action: 'moveTo', options: { x: 600, y: 200 } },
        //     { action: 'release' },
        // ])
        await this.cityField.setValue(city)
        await this.stateField.setValue(state)
        await this.zipcodeField.setValue(zipcode)
        await this.countryField.setValue(country)
        await this.paymentButton.click()
    } 


}

module.exports = CheckOutCommercePage