const { remote } = require('webdriverio')
const path = require('path')

const options = {
	hostname: '0.0.0.0',
	port: 4723,
	logLevel: 'debug',
	capabilities: {
		'platformName': 'Android',
		'appium:automationName': 'UIAutomator2',
		'appium:deviceName': 'emulator-5554',
		'appium:app': path.join(process.cwd(), 'apk/dummy.apk'),
		'appium:appActivity': '.MainActivity'
	}
}

async function run () {
	const driver = await remote(options)
	// await driver.$('~Forms').click()

	// await driver.pause(1000)

	// await driver.touchPerform([
	// 	{ action: 'press', options: { x: 317, y: 643 } },
	// 	{ action: 'wait', options: { ms: 500 } },
	// 	{ action: 'moveTo', options: { x: 317, y: 127 } },
	// 	{ action: 'release' },
	// ])

	await driver.pause(10000)
	await driver.deleteSession()
}
run()