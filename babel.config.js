module.exports = {
  presets: [
    [
      "@babel/env",
      {
        debug: true,
        targets: {
          node: "10",
        },
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          // proposals: true,
        },
      },
    ],
  ],
  plugins: [
    //
    "@babel/plugin-proposal-class-properties",
  ],
};
