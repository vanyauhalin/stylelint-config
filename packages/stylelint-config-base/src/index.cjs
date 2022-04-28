/**
 * This package is written in commonjs, because stylelint throws an error
 * when building from modules: `TypeError: Cannot set property plugins
 * of #<Object> which has only a getter`.
 * @see https://github.com/evanw/esbuild/issues/587
 */

/**
 * @typedef {import('stylelint').Config} Config
 */

const { rules } = require('./rules/index.cjs');

/**
 * Main Stylelint configuration whose properties will be exported.
 * @type {Config}
 */
const config = {
  plugins: 'stylelint-order',
  overrides: [],
  /**
   * The `rules` property must be in the config, otherwise stylelint will throw
   * an error: `Error: No rules found within configuration. Have you provided
   * a 'rules' property?`.
   */
  rules: {},
};

config.overrides.push({
  rules,
  files: '**/*.css',
});

module.exports = config;
