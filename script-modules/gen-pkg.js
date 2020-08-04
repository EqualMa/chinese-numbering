function trimDist(p) {
  if (!p.startsWith("dist/")) {
    throw new Error("Path should starts with 'dist/'.");
  }
  return p.slice(5);
}

/**
 *
 * @see https://github.com/vladshcherbin/rollup-plugin-generate-package-json#basecontents
 * @param {object} pkg input package.json content
 */
export function getPkgJsonBaseContents(pkg) {
  const reserved = [
    "name",
    "version",
    "description",
    "license",
    "keywords",
    "author",
    "repository",
    "publishConfig",
  ];
  const pkgEntries = ["main", "module", "types"];

  const contents = {
    name: pkg.name,
    version: pkg.version,
  };

  for (const e of reserved) {
    contents[e] = pkg[e];
  }

  for (const e of pkgEntries) {
    contents[e] = trimDist(pkg[e]);
  }

  return contents;
}
