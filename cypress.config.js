const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '24o8js',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
