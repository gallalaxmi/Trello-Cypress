const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return require('./cypress/plugins/index.js')(on, config)
        },
        testIsolation: false,
        specPattern: 'cypress/e2e/*.feature',
        chromeWebSecurity: false,
        defaultCommandTimeout: 25000,
        pageLoadTimeout: 60000,
        viewportHeight: 780,
        viewportWidth: 1920,
        retries: {
            runMode: 2
        }
    }
});
