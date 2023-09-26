const { remote } = require('webdriverio')
const { expect } = require('chai')
const path = require('path')


describe('Login', function(){
    let driver
    before(async function(){
        const options = {
            hostname: '0.0.0.0',
            port: 4723,
            logLevel: 'debug',
            capabilities: {
                'platformName': 'Android',
                'appium:automationName': 'UIAutomator2',
                'appium:deviceName': 'emulator-5554',
                'appium:app': path.join(process.cwd(), 'apk/dummy.apk'),
                'appium:appActivity': '.MainActivity'
            }
        }
        driver = await remote(options)
        await driver.pause(8000)
        await driver.$('~Login').click()

    })

    describe('Mencoba Login dengan email yang tidak valid', function(){
        it('Please enter a valid email addres', async function(){
            await driver.$('~input-email').setValue('farissssss')
            await driver.$('~input-password').setValue(12345678)
            await driver.$('~button-LOGIN').click()
            const emailErr = await driver.$('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]').getText()
            expect(emailErr).to.include('Please enter a valid email addres')
    
        })
    })

    describe('Mencoba Login dengan password yang tidak valid', function(){
        it('Please enter at least 8 characters', async function(){
            await driver.$('~input-email').setValue('farisssssssds@akdj.com')
            await driver.$('~input-password').setValue(123456)
            await driver.$('~button-LOGIN').click()
            const passwordErr = await driver.$('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]').getText()
            expect(passwordErr).to.include('Please enter at least 8 characters')
        })
    })

    describe('Mencoba Login dengan email dan password yang tidak valid', function(){
        it('Please enter a valid email addres and Please enter at least 8 characters ', async function(){
            await driver.$('~input-email').setValue('farissssss')
            await driver.$('~input-password').setValue(123456)
            await driver.$('~button-LOGIN').click()
            const emailErr = await driver.$('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]').getText()
            const passwordErr = await driver.$('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]').getText()
            expect(emailErr).to.include('Please enter a valid email addres')
            expect(passwordErr).to.include('Please enter at least 8 characters')
        })
    })

    describe('Mencoba Login dengan email dan password yang valid', function(){
        it('You are logged in!', async function(){
            await driver.$('~input-email').setValue('farissssssssd@kadka.com')
            await driver.$('~input-password').setValue(12345678)
            await driver.$('~button-LOGIN').click()
            const succes = await driver.$('id=android:id/message').getText()
            expect(succes).to.include('You are logged in!')
            await driver.$('id=android:id/button1')
        })
    })


    afterEach(async function(){
        await driver.pause(3000)
    })

    after(async function(){
        await driver.deleteSession()
    })
   
})