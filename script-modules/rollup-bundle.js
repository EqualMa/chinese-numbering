import { compilePlugins } from "./rollup-common";
import { terser } from "rollup-plugin-terser";

const GLOBAL_NAMESPACE = "ChineseNumbering";

const FORMATS = [
  //
  "es",
  "iife",
  "umd",
];

function genOutputs(format) {
  // https://rollupjs.org/guide/en/#outputname
  const name = format === "es" ? undefined : GLOBAL_NAMESPACE;

  return [true, false].map((min) => ({
    format,
    sourcemap: true,
    file: `dist/bundle/${format}${min ? ".min" : ""}.js`,
    name,
    plugins: min ? [terser()] : undefined,
  }));
}

export default {
  input: "src/index.ts",
  output: FORMATS.map(genOutputs).flat(1),
  plugins: [
    //
    ...compilePlugins(),
  ],
};
