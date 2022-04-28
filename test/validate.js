import stylelint from 'stylelint';
import { test } from 'uvu';
import { is } from 'uvu/assert';
import { read } from '../.esbuildrc';

test('stylelint should throw an configs error', async () => {
  await Promise.all(read().map(async (pack) => {
    const { results } = await stylelint.lint({
      config: {
        extends: pack.main,
      },
      files: './test/*.css',
    });
    const hasError = !!results.find((el) => el.errored);
    is(hasError, true);
  }));
});

test.run();
