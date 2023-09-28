const { remote } = require('webdriverio')

class InventoryCommercePage {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get sortButton(){return this.driver.$('~sort button')}
    get nameAsc(){return this.driver.$('~nameAsc')}
    get nameDesc(){return this.driver.$('~nameDesc')}
    get priceAsc(){return this.driver.$('~priceAsc')}
    get priceDesc(){return this.driver.$('~priceDesc')}
    get productName1(){return this.driver.$('(//android.widget.TextView[@content-desc="store item text"])[1]')}
    get productName2(){return this.driver.$('(//android.widget.TextView[@content-desc="store item text"])[2]')}
    get productPrice1(){return this.driver.$('(//android.widget.TextView[@content-desc="store item price"])[1]')}
    get productPrice2(){return this.driver.$('(//android.widget.TextView[@content-desc="store item price"])[2]')}
    get productDetail(){return this.driver.$('(//android.view.ViewGroup[@content-desc="store item"])[1]')}
    get sideBar(){return this.driver.$('~open menu')}
    get loginMenu(){return this.driver.$('~menu item log in')}

    async openLogin(){
        await this.sideBar.click()
        await this.loginMenu.waitForExist()
        await this.loginMenu.click()
    }

    async openProduct(){
        await this.productDetail.click()
    }

    async openSort() {
        await this.sortButton.waitForExist()
        await this.sortButton.click()

    }

    async nameAscending() {
        await this.nameAsc.waitForExist()
        await this.nameAsc.click()
    }

    async nameDescending() {
        await this.nameDesc.waitForExist()
        await this.nameDesc.click()
    }

    async priceAscending() {
        await this.priceAsc.waitForExist()
        await this.priceAsc.click()
    }

    async priceDescending() {
        await this.priceDesc.waitForExist()
        await this.priceDesc.click()
    }

    async getNameProduct1() {
        return await this.productName1.getText()
    }

    async getNameProduct2() {
        return await this.productName2.getText()
    }

    async getPriceProduct1() {
        return await this.productPrice1.getText()
    }

    async getPriceProduct2() {
        return await this.productPrice2.getText()
    }

  
}

module.exports = InventoryCommercePage