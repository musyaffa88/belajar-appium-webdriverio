const { remote } = require('webdriverio')
const DRIVER_OPTIONS = require('../config/DRIVER_OPTIONS')

async function setupDriver(){
    const driver = remote(DRIVER_OPTIONS)
    return driver
}

module.exports = setupDriver