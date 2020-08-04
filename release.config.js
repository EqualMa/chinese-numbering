module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/npm", { pkgRoot: "dist" }],
    [
      "@semantic-release/exec",
      {
        // https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-use-a-npm-build-script-that-requires-the-package-jsons-version
        prepareCmd:
          "node scripts/prepublish.js && node scripts/postversion.js -v ${nextRelease.version}",
      },
    ],
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
