const { remote } = require('webdriverio')

class ProductDetailCommercePage {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get cartButton(){return this.driver.$('~cart badge')}
    get productName(){return this.driver.$('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}
    get counterPlusButton(){return this.driver.$('~counter plus button')}
    get counterMinusButton(){return this.driver.$('~counter minus button')}
    get counterAmount(){return this.driver.$('//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView')}
    get addToCartButton(){return this.driver.$('~Add To Cart button')}
    get blackCircle(){return this.driver.$('~black circle')}
    get blueCircle(){return this.driver.$('~blue circle')}
    get greyCircle(){return this.driver.$('~grey circle')}
    get redCircle(){return this.driver.$('~red circle')}

    async openCart(){
        await this.cartButton.click()
    }

    async getProductName(){
        await this.productName.waitForExist()
        return await this.productName.getText()
    }

    async plusCounter(){
        await this.counterPlusButton.waitForExist()
        await this.counterPlusButton.click()
    }

    async minusCounter(){
        await this.counterMinusButton.waitForExist()
        await this.counterMinusButton.click()
    }

    async getAmount(){
        await this.counterAmount.waitForExist()
        return await this.counterAmount.getText()
    }

    async addToCart(){
        await this.addToCartButton.waitForExist()
        await this.addToCartButton.click()
    }

    async getEnabledButtton(){
        await this.addToCartButton.waitForExist()
        return await this.addToCartButton.isEnabled()
    }

}   

module.exports = ProductDetailCommercePage