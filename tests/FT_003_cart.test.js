const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const { afterEach } = require('mocha')
const InventoryCommercePage = require('../pageobjects/InventoryCommercePage')
const ProductDetailCommercePage = require('../pageobjects/ProductDetailCommercePage')
const CartCommercePage = require('../pageobjects/CartCommercePage');

describe('FT_003_Cart', function () {
	/** @type {WebdriverIO.Browser} */ let driver
    /** @type {InventoryCommercePage} */ let inventoryCommercePage
	/** @type {ProductDetailCommercePage} */ let productDetailCommercePage
	/** @type {CartCommercePage} */ let cartCommercePage


    before(async function () {
        driver = await setupDriver()
        inventoryCommercePage = new InventoryCommercePage(driver)
        productDetailCommercePage = new ProductDetailCommercePage(driver)
        cartCommercePage = new CartCommercePage(driver)
        await driver.pause(5000)
        await inventoryCommercePage.openProduct()
        await driver.touchPerform([
            { action: 'press', options: { x: 600, y: 1000 } },
            { action: 'wait', options: { ms: 500 } },
            { action: 'moveTo', options: { x: 600, y: 400 } },
            { action: 'release' },
        ])
        await productDetailCommercePage.addToCart()
        await productDetailCommercePage.openCart()
    })

	describe('001_Menambah jumlah produk', async function () {
		it('Jumlah produk menjadi 2', async function () {
			await cartCommercePage.plusCounter()
            const jumlah = await cartCommercePage.getAmount()
            // const totalItems = await cartCommercePage.getTotalItems()
            const totalPrice = await cartCommercePage.getTotalPrice()
            expect(jumlah).to.equal('2')
            // expect(jumlah).to.include(totalItems)
            expect(totalPrice).to.include('59.98')
		})
	})

    describe('002_Mengurangi jumlah produk', async function () {
		it('Jumlah produk berkurang menjadi 1', async function () {
            await cartCommercePage.minusCounter()
            const jumlah = await cartCommercePage.getAmount()
            // const totalItems = await cartCommercePage.getTotalItems()
            const totalPrice = await cartCommercePage.getTotalPrice()
            expect(jumlah).to.equal('1')
            // expect(jumlah).to.include(totalItems)
            expect(totalPrice).to.include('29.99')
		})
	})

    describe('003_Menghapus produk di cart', async function () {
		it('Item terhapus dan muncul halaman berisi pesan bahwa tidak ada items di cart', async function () {
            await cartCommercePage.removeItems()
            const noItemsMesagge = await cartCommercePage.getNoItems()
            expect(noItemsMesagge).to.equal('No Items')
		})
	})

    describe('004_Proses checkout', async function () {
		it('Menuju halaman pengisian data diri (jika sudah login) / Menuju halaman login', async function () {
            await cartCommercePage.backShopping()
            await inventoryCommercePage.openProduct()
            await driver.touchPerform([
                { action: 'press', options: { x: 600, y: 1000 } },
                { action: 'wait', options: { ms: 500 } },
                { action: 'moveTo', options: { x: 600, y: 400 } },
                { action: 'release' },
            ])
            await productDetailCommercePage.addToCart()
            await productDetailCommercePage.openCart()
            await cartCommercePage.checkOutProduct()
		})
	})

    // describe('005_Menambahkan produk ke Cart', async function () {
	// 	it('Produk berhasil ditambahkan', async function () {
    //         await productDetailCommercePage.addToCart()
    //         await productDetailCommercePage.openCart()
    //         const productName = await cartCommercePage.getProductLabel()
    //         const totalItems = await cartCommercePage.getTotalItems()
    //         const totalPrice = await cartCommercePage.getTotalPrice()
    //         expect(productName).to.include('Sauce Labs Backpack')
    //         expect(totalItems).to.include('1')
    //         expect(totalPrice).to.include('29.99')
	// 	})
	// })


	afterEach(async function(){
        await driver.pause(2000)
    })

	after(async function () {
		await driver.deleteSession()
	})
})