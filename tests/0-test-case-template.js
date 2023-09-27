const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const YourPage = require('../pageobjects/YourPage')

describe.skip('your test story', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {YourPage} */ let yourPage

	before(async function () {
		driver = await setupDriver()
		yourPage = new YourPage(driver)
	})

	it('your test case', async function () {
		await yourPage.openPage()
	})

	after(async function () {
		await driver.deleteSession()
	})
})