const stylelint = require('./stylelint');
const stylelintOrder = require('./stylelint-order');

/**
 * Stylelint configuration.
 * @type {import('stylelint').Config}
 */
module.exports = {
  plugins: 'stylelint-order',
  rules: {
    ...stylelint,
    ...stylelintOrder,
  },
};
