/**
 * This script file will be executed BEFORE the package is prepared and packed
 *
 * The following procedures are included:
 *
 * 1. Copy files including `README.md` in to `dist` so that they are published
 *
 */

const { copyFile } = require("fs").promises;

const files = [
  "README.md",
  "LICENSE",
  // updated by @semantic-release/changelog before npm publish
  "CHANGELOG.md",
];

async function main() {
  await Promise.all(files.map((f) => copyFile(f, "dist/" + f)));
}

main();
