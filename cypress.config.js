const { defineConfig } = require("cypress");
const cypressSplit = require('cypress-split')
const cucumber = require ("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
  },
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  e2e: {
    supportFile: false,
    defaultCommandTimeout: 10000,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      on("file:preprocessor", cucumber());
    },
  },
});
