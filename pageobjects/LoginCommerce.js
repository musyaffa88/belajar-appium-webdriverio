const { remote } = require('webdriverio')

class LoginCommerce {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get usernameField(){return this.driver.$('~Username input field')}
    get passwordField(){return this.driver.$('~Password input field')}
    get loginButton(){return this.driver.$('~Login button')}

    async loginProcces(username, password){
        await this.usernameField.setValue(username)
        await this.passwordField.setValue(password)
        await this.loginButton.click()
    }
}

module.exports = LoginCommerce