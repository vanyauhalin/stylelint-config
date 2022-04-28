import fs from 'fs';
import { resolve } from 'path';
import { build } from 'esbuild';

function read() {
  const PACKAGES_DIRECTORY = 'packages';
  const packages = fs.readdirSync(PACKAGES_DIRECTORY);
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

const packages = read();
packages.forEach((pack) => {
  const { main, src } = pack;
  const entries = fs.readdirSync(src)
    .filter((file) => file.endsWith('.cjs'))
    .map((file) => `${src}/${file}`);

  build({
    allowOverwrite: true,
    bundle: true,
    entryPoints: entries,
    outfile: main,
    platform: 'node',
  }).catch((error) => {
    throw new Error(error.stderr);
  });
});

export {
  read,
};
