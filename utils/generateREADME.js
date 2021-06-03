const { createDateWithFormat } = require("./createDate");
const fileExists = require("./fileExists");
const createFile = require("./createFile");
const { filePath, readResultFile } = require("./resultPath");
const objectHasProperty = require("./objectHasProperty");
const readme = require("./readme");
const iterations = require("../config/iterationsConfig");

const runs = ["single", "interpolated", "multiple"];
const divider = "|";

const addRowItem = item => `| ${item} `;

(async () => {
  try {
    if (!fileExists(filePath))
      throw String("You must run the test suites first!");
    const results = readResultFile();

    let file = readme.head(createDateWithFormat());

    const addResultsToTable = async (pkg, cfg, idx) => {
      await new Promise((res, rej) => {
        try {
          if (!objectHasProperty(results, pkg))
            rej(
              `Unable to locate a '${pkg}' property within the results.json file!`
            );

          const result = results[pkg];

          if (!objectHasProperty(result, cfg))
            rej(`Unable to locate a '${cfg}' property within the results!`);
          const config = result[cfg];
          const [fastestPackage, x, y] = Object.keys(results)
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
          res();
        } catch (error) {
          rej(error);
        }
      });
    };

    for (let i = 0; i < 3; i += 1) {
      if (i === 1) file = file.concat(readme.singleLargeEnv);
      if (i === 2) file = file.concat(readme.multiEnvs);

      await addResultsToTable("@noshot/env", runs[i], i);
      await addResultsToTable("dotenv", runs[i], i);
      await addResultsToTable("next", runs[i], i);
    }

    createFile("README.md", file);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
