import { resolve } from 'path';
import stylelint from 'stylelint';
import { test } from 'uvu';
import { is } from 'uvu/assert';

const PACKAGES = resolve('packages');
const REFERENCE = resolve('test/reference');

['base'].forEach((name) => {
  const fullName = `stylelint-config-${name}`;
  test(`${fullName} should throw an configs error`, async () => {
    const { results } = await stylelint.lint({
      config: {
        extends: `${PACKAGES}/${fullName}/lib/index.js`,
      },
      files: `${REFERENCE}/${name}.css`,
    });
    const hasError = !!results.find((el) => el.errored);
    is(hasError, true);
  });
});

test.run();
