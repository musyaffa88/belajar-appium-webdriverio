const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const YourPage = require('../pageobjects/YourPage')

describe.skip('your test story', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {YourPage} */ let yourPage

	before(async function () {
		driver = await setupDriver()
		yourPage = new YourPage(driver)
		await driver.pause(5000)
	})

	describe('your test case', async function () {
		it('expect result', async function () {
			await yourPage.openPage()
		})
	} )

	afterEach(async function(){
        await driver.pause(2000)
    })

	after(async function () {
		await driver.deleteSession()
	})
})