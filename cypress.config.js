const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'wgb1ru',
  
    e2e: {
      experimentalOriginDependencies: true,
      projectId: "q8xkj2",
      baseUrl: 'https://evs.com/eu', // change this to your application's base URL
      setupNodeEvents(on, config) {
        // implement node event listeners here
      
      },
      viewportWidth: 1280,           // Set the desired viewport width
      viewportHeight: 720,           // Set the desired viewport height
    },
    experimentalStudio: true,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    video: false, // set to true if you want to record videos of your test runs
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  })
  