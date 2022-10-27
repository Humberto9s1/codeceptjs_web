const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

require('custom-env').env(process.env.profile);

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: process.env.BASE_URL,
      browser: process.env.BROWSER
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'testes_automatizado',
  translation: 'pt-BR'
}