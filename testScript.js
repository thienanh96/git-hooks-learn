const fs = require("fs");
const { version } = require("./package.json");

fs.writeFileSync(
  "./targetFile.js",
  "const version = '" + version + "'; console.log(version + 'sometext');"
);
