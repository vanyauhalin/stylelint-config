import stylelint from 'stylelint';
import { test } from 'uvu';
import { equal } from 'uvu/assert';
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
  equal(hasError, true);
});
