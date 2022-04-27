import fs from 'fs';
import { build } from 'esbuild';

function getOptions() {
  const [, , name] = process.argv;
  const root = `./packages/stylelint-config-${name}`;
  const outfile = `${root}/lib/index.cjs`;
  return {
    name,
    outfile,
    root,
  };
}

const { outfile, root } = getOptions();
const src = `${root}/src/`;
const entryPoints = fs.readdirSync(src)
  .filter((file) => file.endsWith('.cjs'))
  .map((file) => `${src}${file}`);

build({
  entryPoints,
  outfile,
  allowOverwrite: true,
  bundle: true,
  platform: 'node',
}).catch((error) => {
  throw new Error(error.stderr);
});

export {
  getOptions,
};
