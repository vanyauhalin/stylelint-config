import stylelint from 'stylelint';
import { test } from 'uvu';
import { equal } from 'uvu/assert';
import { read } from '../.esbuildrc';

const { main } = read();

test('stylelint should throw an error', async () => {
  const { results } = await stylelint.lint({
    config: {
      extends: main,
    },
    files: './test/*.css',
  });
  const hasError = !!results.find((el) => el.errored);
  equal(hasError, true);
});
