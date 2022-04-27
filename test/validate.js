import assert from 'assert';
// Disabled until the `@types/node` is upgraded to version 18.
// eslint-disable-next-line import/no-unresolved
import test from 'node:test';
import stylelint from 'stylelint';
import { getOptions } from '../.esbuildrc';

const { outfile } = getOptions();

test('stylelint should throw an error', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: outfile,
    },
    files: './test/*.css',
  });
  const hasError = !!results.find((el) => el.errored);
  assert.strictEqual(hasError, true);
});
