const { writeFileSync } = require('fs');
const { createDateWithFormat } = require("./createDate");
const fileExists = require("./fileExists");
const { filePath, readResultFile } = require("./resultPath");
const readme = require("./readme");
const iterations = require("../config/iterationsConfig");

const runs = ["single", "interpolated", "multiple"];
const divider = "|";

const addRowItem = item => `| ${item} `;

(() => {
  try {
    if (!fileExists(filePath))
      throw String("You must run the test suites first!");
    const results = readResultFile();

    let file = readme.head(createDateWithFormat());

    const addResultsToTable = (pkg, cfg, idx) => {
      const result = results?.[pkg];
      const config = result?.[cfg];
      if (!result || !config)
        throw String(
          `Unable to locate a '${pkg}' or '${cfg}' property within the results!`
        );

      const [fastestPackage] = Object.keys(results)
        .map(package => results[package][cfg].fastest[0])
        .sort((a, b) => a - b);

      const package = addRowItem(pkg);
      const runDate = addRowItem(config.date);
      const numberOfIterations = addRowItem(iterations[idx]);
      const fastestIterations = addRowItem(
        config.fastest.map(i => `${i}s`).join(", ")
      );
      const avgIteration = addRowItem(`${config.avg}s`);
      const comparePackageSpeed = addRowItem(
        `${((fastestPackage / config.fastest[0]) * 100).toFixed(2)}%`
      )
        .concat(divider)
        .concat("\n");

      file = file.concat(
        package,
        runDate,
        numberOfIterations,
        fastestIterations,
        avgIteration,
        comparePackageSpeed
      );
    };

    for (let i = 0; i < 3; i += 1) {
      if (i === 1) file = file.concat(readme.singleLargeEnv);
      if (i === 2) file = file.concat(readme.multiEnvs);

      addResultsToTable("@noshot/env", runs[i], i);
      addResultsToTable("dotenv", runs[i], i);
      addResultsToTable("next", runs[i], i);
    }

    writeFileSync("README.md", file, { encoding: 'utf-8' })
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
