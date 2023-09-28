const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const { afterEach } = require('mocha')
const InventoryCommercePage = require('../pageobjects/InventoryCommercePage')

describe('FT_001_Inventory Page Test', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {InventoryCommercePage} */ let inventoryCommercePage


	before(async function () {
		driver = await setupDriver()
		inventoryCommercePage = new InventoryCommercePage(driver)
		await driver.pause(5000)
	})

	describe('Mengurutkan produk berdasarkan nama produk yang terbawah', async function () {
		it('Product sort by name descending', async function () {
			await inventoryCommercePage.openSort()
			await inventoryCommercePage.nameDescending()
			const name1 = await inventoryCommercePage.getNameProduct1()
			const name2 = await inventoryCommercePage.getNameProduct2()
			expect(name1).to.satisfy(name1 => name1 > name2)

		})
	})

	describe('Mengurutkan produk berdasarkan nama produk yang teratas', async function () {
		it('Product sort by name ascending', async function () {
			await inventoryCommercePage.openSort()
			await inventoryCommercePage.nameAscending()
			const name1 = await inventoryCommercePage.getNameProduct1()
			const name2 = await inventoryCommercePage.getNameProduct2()
			expect(name1).to.satisfy(name1 => name1 < name2)
		})
	})

	describe('Mengurutkan produk berdasarkan harga produk yang termurah', async function () {
		it('Product sort by price ascending', async function () {
			await inventoryCommercePage.openSort()
			await inventoryCommercePage.priceAscending()
			const price1 = await inventoryCommercePage.getPriceProduct1()
			const price2 = await inventoryCommercePage.getPriceProduct2()
			expect(price1).to.satisfy(price1 => price1 < price2)
		})
	})

	describe('Mengurutkan produk berdasarkan harga produk yang termahal', async function () {
		it('Product sort by price ascending', async function () {
			await inventoryCommercePage.openSort()
			await inventoryCommercePage.priceDescending()
			const price1 = await inventoryCommercePage.getPriceProduct1()
			const price2 = await inventoryCommercePage.getPriceProduct2()
			expect(price1).to.satisfy(price1 => price1 > price2)
		})
	})



	// it('sort by price ascending', async function () {
	// 	await driver.$('~sort button').click()
	// 	const optionItem = await driver.$('//android.view.ViewGroup[@content-desc="priceAsc"]')
	// 	await optionItem.waitForExist()
	// 	await optionItem.click()

	// 	const price1 = await driver.$('(//android.widget.TextView[@content-desc="store item price"])[1]').getText()
	// 	const price2 = await driver.$('(//android.widget.TextView[@content-desc="store item price"])[2]').getText()

	// 	expect(price1).to.satisfy(num => num < price2)
	// })

	// it('sort by name descending', async function () {
	// 	await driver.$('~sort button').click()
	// 	const optionItem = await driver.$('//android.view.ViewGroup[@content-desc="nameDesc"]')
	// 	await optionItem.waitForExist()
	// 	await optionItem.click()

	// 	const name1 = await driver.$('(//android.widget.TextView[@content-desc="store item text"])[1]').getText()
	// 	const name2 = await driver.$('(//android.widget.TextView[@content-desc="store item text"])[2]').getText()

	// 	expect(name1).to.satisfy(x => x > name2)
	// })

	afterEach(async function () {
		await driver.pause(2000)
	})

	after(async function () {
		await driver.deleteSession()
	})
})