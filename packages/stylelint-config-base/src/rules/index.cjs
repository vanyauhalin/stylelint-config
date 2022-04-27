const stylelintOrder = require('./stylelint-order.cjs');

const rules = {
  ...stylelintOrder.rules,
};

exports.rules = rules;
