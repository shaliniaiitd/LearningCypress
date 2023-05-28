const { defineConfig } = require("cypress");

module.exports = defineConfig({
"chromeWebSecurity": false,
"experimentalModifyObstructiveThirdPartyCode": true,
"experimentalRunAllSpecs": true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
