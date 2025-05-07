const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://clarovideo.com",
      show: false,
      windowSize: "1280x720",
    },
  },

  include: {
    I: "./steps_file.js",
  },

  gherkin: {
    features: "./features/*.feature",
    steps: "./steps/claroSteps.js",
  },
  
  allure: {
    enabled: true,
    require: "allure-codeceptjs",
    outputDir: "output",
  },

  name: "clarovideo",
};
