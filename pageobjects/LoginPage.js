const { remote } = require('webdriverio')

class LoginPage{

    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get loginNavButton(){return this.driver.$('~Login')}
    get emailInput(){return this.driver.$('~input-email')}
    get passwordInput(){return this.driver.$('~input-password')}
    get buttonLogin(){return this.driver.$('~button-LOGIN')}
    get emailError(){return this.driver.$('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]')}
    get passwordError(){return this.driver.$('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]')}
    get loginSucces(){return this.driver.$('id=android:id/message')}
    
    async openPage(){
        await this.loginNavButton.click()
    }

    async loginProcess(email, password){
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await this.buttonLogin.click()

    }

    async getEmailErr(){
        return await this.emailError.getText()
    }

    async getPasswordErr(){
        return await this.passwordError.getText()
    }

    async getLoginSucces(){
        return await this.loginSucces.getText() 
    }
}

module.exports = LoginPage