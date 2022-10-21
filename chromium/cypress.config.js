const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1a4dsd",
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  reporter: "mocha-allure-reporter",
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/",
  },
  e2e: {
    //baseUrl: "https://rahulshettyacademy.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/**/*.js",
  },
});
