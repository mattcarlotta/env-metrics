const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

function processEnv(loadedEnvFiles, dir) {
  const origEnv = Object.assign({}, process.env);
  const parsed = {};

  for (const envFile of loadedEnvFiles) {
    try {
      let result = {};
      result.parsed = dotenv.parse(envFile.contents);

      result = dotenvExpand(result);

      // if (result.parsed) {
      //   console.info(`Loaded env from ${path.join(dir || "", envFile.path)}`);
      // }

      for (const key of Object.keys(result.parsed || {})) {
        if (
          typeof parsed[key] === "undefined" &&
          typeof origEnv[key] === "undefined"
        ) {
          parsed[key] = result.parsed[key];
        }
      }
    } catch (err) {
      console.error(
        `Failed to load env from ${path.join(dir || "", envFile.path)}`,
        err
      );
    }
  }

  return Object.assign(process.env, parsed);
}

module.exports.loadEnvConfig = function loadEnvConfig(dir = "", paths = []) {
  const dotenvFiles = [
    `.env.development.local`,
    `.env.local`,
    `.env.development`,
    ".env"
  ].filter(Boolean);
  const configPaths = paths.length ? paths : dotenvFiles;

  const cachedLoadedEnvFiles = [];

  for (const envFile of configPaths) {
    // only load .env if the user provided has an env config file
    const dotEnvPath = path.join(dir, envFile);

    try {
      const stats = fs.statSync(dotEnvPath);

      // make sure to only attempt to read files
      if (!stats.isFile()) {
        continue;
      }

      const contents = fs.readFileSync(dotEnvPath, "utf8");
      cachedLoadedEnvFiles.push({
        path: envFile,
        contents
      });
    } catch (err) {
      if (err.code !== "ENOENT") {
        console.error(`Failed to load env from ${envFile}`, err);
      }
    }
  }

  return {
    combinedEnv: processEnv(cachedLoadedEnvFiles, dir),
    loadedEnvFiles: cachedLoadedEnvFiles
  };
};
