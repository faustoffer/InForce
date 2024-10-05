const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
    },
    viewportWidth: 1280, 
    viewportHeight: 720, 
  },
});
