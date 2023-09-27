const { remote } = require('webdriverio')

async function run () {
	const driver = await remote({
		capabilities: {
			browserName: 'chrome'
		}
	})

	await driver.url('https://www.npmjs.com/package/selenium-webdriver')
	await driver.$('#package-tab-dependencies').click()
	await driver.pause(3000)
	await driver.deleteSession()
}
run()