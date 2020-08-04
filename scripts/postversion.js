/**
 * This script file will be executed AFTER the new version is generated
 * (before the `git push`)
 *
 * The following procedures are included:
 *
 * 1. Before this process, the new version has been generated
 *    and it should be synced to `package.json` and git,
 *    as described in [semantic-release/npm](https://github.com/semantic-release/npm#examples).
 *
 */

const { readFile, writeFile } = require("fs").promises;

const outputPkg = "package.json";

async function main() {
  if (process.argv[2] !== "-v") {
    throw new Error(
      `postversion.js executed with wrong args: ${process.argv.join(" ")}`,
    );
  }

  const version = process.argv[3];
  if (!version || typeof version !== "string") {
    throw new Error(`new version is invalid: ${version}`);
  }

  const pkg = await readFile(outputPkg, "utf8");

  const newPkg = pkg.replace(
    /([{,]\s*"version"\s*:\s*)("[^"]+")(\s*[},])/,
    "$1" + JSON.stringify(version) + "$3",
  );

  await writeFile(outputPkg, newPkg);
}

main();
