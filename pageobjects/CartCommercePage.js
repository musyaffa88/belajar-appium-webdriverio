const { remote } = require('webdriverio')

class CartCommercePage {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get productLabel(){return this.driver.$('~product label')}
    get counterPlusButton(){return this.driver.$('~counter plus button')}
    get counterMinusButton(){return this.driver.$('~counter minus button')}
    get counterAmount(){return this.driver.$('//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView')}
    get totalItems(){return this.driver.$('~total number')}
    get totalPrice(){return this.driver.$('~total price')}
    get removeButton(){return this.driver.$('~remove item')}
    get checkOutButton(){return this.driver.$('~Proceed To Checkout button')}
    get goShoppingButton(){return this.driver.$('~Go Shopping button')}
    get noItemsMesagge(){return this.driver.$('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}
    
    async getProductLabel(){
        await this.productLabel.waitForExist()
        return await this.productLabel.getText()
    }

    async getTotalItems(){
        await this.totalItems.waitForExist()
        return await this.totalItems.getText()
    }

    async getTotalPrice(){
        await this.totalPrice.waitForExist()
        return await this.totalPrice.getText()
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

    async removeItems(){
        await this.removeButton.waitForExist()
        await this.removeButton.click()
    }

    async checkOutProduct(){
        await this.checkOutButton.waitForExist()
        await this.checkOutButton.click()

    }

    async backShopping(){
        await this.goShoppingButton.waitForExist()
        await this.goShoppingButton.click()
    }

    async getNoItems(){
        await this.noItemsMesagge.waitForExist()
        return await this.noItemsMesagge.getText()
    }
}

module.exports = CartCommercePage