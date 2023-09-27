const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')

describe('Inventory Page Test', function () {
	/** @type {WebdriverIO.Browser} */ let driver

	before(async function () {
		driver = await setupDriver()
	})

	it('sort by price ascending', async function () {
		await driver.$('~sort button').click()
		const optionItem = await driver.$('//android.view.ViewGroup[@content-desc="priceAsc"]')
		await optionItem.waitForExist()
		await optionItem.click()

		const price1 = await driver.$('(//android.widget.TextView[@content-desc="store item price"])[1]').getText()
		const price2 = await driver.$('(//android.widget.TextView[@content-desc="store item price"])[2]').getText()

		expect(price1).to.satisfy(num => num < price2)
	})

	it('sort by name descending', async function () {
		await driver.$('~sort button').click()
		const optionItem = await driver.$('//android.view.ViewGroup[@content-desc="nameDesc"]')
		await optionItem.waitForExist()
		await optionItem.click()

		const name1 = await driver.$('(//android.widget.TextView[@content-desc="store item text"])[1]').getText()
		const name2 = await driver.$('(//android.widget.TextView[@content-desc="store item text"])[2]').getText()

		expect(name1).to.satisfy(x => x > name2)
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})