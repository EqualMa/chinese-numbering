module.exports = {
  presets: [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          // proposals: true,
        },
      },
    ],
  ],
  plugins: [
    // "@babel/plugin-proposal-class-properties",
  ],
};
