const stylelintOrder = require('./stylelint-order.cjs');
const stylelint = require('./stylelint.cjs');

const rules = {
  ...stylelint.rules,
  ...stylelintOrder.rules,
};

exports.rules = rules;
