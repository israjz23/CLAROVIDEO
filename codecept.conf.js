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
      url: "https://www.mercadolibre.com.mx",
      show: false,
      trace: true,
      locale: "es-MX",
    },
  },

  include: {
    I: "./steps_file.js",
  },

  gherkin: {
    features: "./features/*.feature",
    steps: "./steps/*.js",
  },

  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      resultsDir: "allure-results",
    },
  },

  name: "clarovideo",
};
