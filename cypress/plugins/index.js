/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const resolve = require("resolve");

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
  };
  // Or, if you need a custom tsconfig.json for your test files:
  // options.browserifyOptions.plugin.unshift(['tsify', {project: 'path/to/other/tsconfig.json'}]);

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("file:preprocessor", cucumber(options));

  const baseUrl = config.env.baseUrl || null;
  if (baseUrl) {
    config.baseUrl = baseUrl;
  }
  return config;
};
