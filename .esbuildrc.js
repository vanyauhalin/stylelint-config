import fs from 'fs';
import { build } from 'esbuild';

const PACKAGES_DIRECTORY = 'packages';
const PACKAGE_PREFIX = 'stylelint-config-';
const PACKAGE_SOURCE_DIRECTORY = 'src';
const PACKAGE_MAIN_FILE = 'lib/index.cjs';

function read() {
  const packages = fs.readdirSync(PACKAGES_DIRECTORY);
  const [, , name] = process.argv;
  const pack = `${PACKAGE_PREFIX}${name}`;
  const hasPackage = packages.includes(pack);

  if (!hasPackage) {
    throw new Error(`Package ${name} (${pack}) not found`);
  }

  const root = `${PACKAGES_DIRECTORY}/${pack}`;
  const src = `${root}/${PACKAGE_SOURCE_DIRECTORY}`;
  const main = `${root}/${PACKAGE_MAIN_FILE}`;
  const entries = fs.readdirSync(src)
    .filter((file) => file.endsWith('.cjs'))
    .map((file) => `${src}/${file}`);

  return {
    entries,
    main,
    name,
    root,
  };
}

const { entries, main } = read();

build({
  allowOverwrite: true,
  bundle: true,
  entryPoints: entries,
  outfile: main,
  platform: 'node',
}).catch((error) => {
  throw new Error(error.stderr);
});

export {
  read,
};
