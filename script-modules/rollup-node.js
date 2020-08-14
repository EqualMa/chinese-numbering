import externals from "rollup-plugin-node-externals";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { compilePlugins } from "./rollup-common";
import { getPkgJsonBaseContents } from "./gen-pkg";

import glob from "glob";
import path from "path";

const kvToObj = ([k, v]) => ({ [k]: v });

const entryFiles = Object.assign(
  {},
  ...glob
    .sync("src/*.ts")
    .map((f) => [path.parse(f).name, f])
    .map(kvToObj),
  ...glob
    .sync("src/*/index.ts")
    .map((f) => [path.basename(path.dirname(f)), f])
    .map(kvToObj),
);

const chunkFileNames = "_chunks/[name]-[hash].js";

export default {
  input: entryFiles,
  output: [
    { dir: "dist", format: "cjs", sourcemap: true, chunkFileNames },
    { dir: "dist/es", format: "es", sourcemap: true, chunkFileNames },
  ],
  plugins: [
    // https://github.com/Septh/rollup-plugin-node-externals
    externals({
      builtins: true,
      deps: true,
      peerDeps: true,
      optDeps: true,
      devDeps: false,
    }),
    ...compilePlugins(),
    // https://github.com/vladshcherbin/rollup-plugin-generate-package-json
    generatePackageJson({
      baseContents: getPkgJsonBaseContents,
      outputFolder: "dist",
    }),
  ],
};
