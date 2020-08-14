import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export function compilePlugins() {
  return [
    // https://github.com/rollup/plugins/tree/master/packages/typescript
    typescript({
      tsconfig: "tsconfig.prod.json",
      sourceMap: true,
      inlineSources: true,
    }),
    // https://github.com/rollup/plugins/tree/master/packages/babel
    babel({
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
      babelHelpers: "bundled",
    }),
  ];
}
