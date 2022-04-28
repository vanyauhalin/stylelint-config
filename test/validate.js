import stylelint from 'stylelint';
import { test } from 'uvu';
import { is } from 'uvu/assert';
import { read } from '../.esbuildrc';

const packages = read();

test('stylelint should throw an configs error', async () => {
  await Promise.all(packages.map(async (pack) => {
    const { main } = pack;
    const { results } = await stylelint.lint({
      config: {
        extends: main,
      },
      files: './test/*.css',
    });
    const hasError = !!results.find((el) => el.errored);
    is(hasError, true);
  }));
});

test.run();
