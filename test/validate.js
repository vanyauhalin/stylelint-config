import { readdirSync } from 'fs';
import { resolve } from 'path';
import stylelint from 'stylelint';
import { test } from 'uvu';
import { is } from 'uvu/assert';

function read() {
  const PACKAGES_DIRECTORY = 'packages';
  const packages = readdirSync(PACKAGES_DIRECTORY);
  return packages.map((pack) => {
    const root = `${PACKAGES_DIRECTORY}/${pack}`;
    const main = resolve(`${root}/lib/index.cjs`);
    const src = resolve(`${root}/src`);
    return {
      main,
      src,
    };
  });
}

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
