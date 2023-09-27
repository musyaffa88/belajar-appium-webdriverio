const path = require('path')

const DRIVER_OPTIONS = {
    hostname: '0.0.0.0',
    port: 4723,
    logLevel: 'error',
    capabilities: {
        'platformName': 'Android',
        'appium:automationName': 'UIAutomator2',
        'appium:deviceName': 'emulator-5554',
        'appium:app': path.join(process.cwd(), 'apk/commerce.apk'),
        'appium:appActivity': '.MainActivity'
    }
}

module.exports = DRIVER_OPTIONS