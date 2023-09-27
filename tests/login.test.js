const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')

describe.skip('Login', function(){
    /** @type {WebdriverIO.Browser} */ let driver
    /** @type {LoginPage} */ let loginPage

    before(async function(){
        driver = await setupDriver()
        loginPage = new LoginPage(driver)
        await driver.pause(8000)
        await loginPage.openPage()
    })

    describe('Mencoba Login dengan email yang tidak valid', function(){
        it('Please enter a valid email addres', async function(){
            await loginPage.loginProcess('faarsyars', 12345678)
            await driver.pause(500)
            const emailErr = await loginPage.getEmailErr()
            expect(emailErr).to.include('Please enter a valid email addres')
        })
    })

    describe('Mencoba Login dengan password yang tidak valid', function(){
        it('Please enter at least 8 characters', async function(){
            await loginPage.loginProcess('faarsyars@adads.com', 12345)
            await driver.pause(500)
            const passwordErr = await loginPage.getPasswordErr()
            expect(passwordErr).to.include('Please enter at least 8 characters')
        })
    })

    describe('Mencoba Login dengan email dan password yang tidak valid', function(){
        it('Please enter a valid email addres and Please enter at least 8 characters ', async function(){
            await loginPage.loginProcess('faarsyars', 12345)
            await driver.pause(500)
            const emailErr = await loginPage.getEmailErr()
            const passwordErr = await loginPage.getPasswordErr()
            expect(emailErr).to.include('Please enter a valid email addres')
            expect(passwordErr).to.include('Please enter at least 8 characters')

        })
    })

    describe('Mencoba Login dengan email dan password yang valid', function(){
        it('You are logged in!', async function(){
            await loginPage.loginProcess('faarsyars@adads.com', 12345678)
            const succes = await loginPage.getLoginSucces()
            expect(succes).to.include('You are logged in!')
            await driver.$('id=android:id/button1')
        })
    })


    afterEach(async function(){
        await driver.pause(2000)
    })

    after(async function(){
        await driver.deleteSession()
    })
   
})