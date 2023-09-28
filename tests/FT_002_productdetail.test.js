const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const { afterEach } = require('mocha')
const InventoryCommercePage = require('../pageobjects/InventoryCommercePage')
const ProductDetailCommercePage = require('../pageobjects/ProductDetailCommercePage')
const CartCommercePage = require('../pageobjects/CartCommercePage');

describe('FT_002_Detail Product Page', function () {
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
    })

	describe('001_Mengkases detail produk', async function () {
		it('Menuju halaman detail produk', async function () {
			await inventoryCommercePage.openProduct()
            const productName = await productDetailCommercePage.getProductName()
            expect(productName).to.include('Sauce Labs Backpack')
		})
	})

    describe('002_Mengurangi jumlah produk', async function () {
		it('Jumlah produk berkurang menjadi 0', async function () {
			await driver.touchPerform([
                    { action: 'press', options: { x: 600, y: 1000 } },
                    { action: 'wait', options: { ms: 500 } },
                    { action: 'moveTo', options: { x: 600, y: 400 } },
                    { action: 'release' },
            ]) 
            await productDetailCommercePage.minusCounter()
            const jumlah = await productDetailCommercePage.getAmount()
            expect(jumlah).to.equal('0')
		})
	})

    describe('003_Mengecek tombol Add to Cart jika jumlah produk = 0', async function () {
		it('Tombol add to cart tidak bisa diklik (disable)', async function () {
            const tombol = await productDetailCommercePage.getEnabledButtton()
            expect(tombol).to.be.false
		})
	})

    describe('004_Menambah jumlah produk', async function () {
		it('Jumlah produk bertambah dari 0 menjadi 1', async function () {
            await productDetailCommercePage.plusCounter()
            const jumlah = await productDetailCommercePage.getAmount()
            expect(jumlah).to.equal('1')
		})
	})

    describe('005_Menambahkan produk ke Cart', async function () {
		it('Produk berhasil ditambahkan', async function () {
            await productDetailCommercePage.addToCart()
            await productDetailCommercePage.openCart()
            const productName = await cartCommercePage.getProductLabel()
            const totalItems = await cartCommercePage.getTotalItems()
            const totalPrice = await cartCommercePage.getTotalPrice()
            expect(productName).to.include('Sauce Labs Backpack')
            expect(totalItems).to.include('1')
            expect(totalPrice).to.include('29.99')
		})
	})


	afterEach(async function(){
        await driver.pause(2000)
    })

	after(async function () {
		await driver.deleteSession()
	})
})