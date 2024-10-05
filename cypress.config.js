const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280, // Ширина окна браузера
    viewportHeight: 720, // Высота окна браузера
  },
});
