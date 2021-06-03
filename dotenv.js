const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const executeTest = require("./utils/executeTest");
const writeResultToFile = require("./utils/writeResultToFile");
const iterations = require("./config/iterationsConfig");

const tests = {
  single: {},
  interpolated: {},
  multiple: {}
};

// loading a single default .env loading
let results = executeTest(logIteration => {
  for (let i = 0; i < iterations[0]; i += 1) {
    const myEnv = dotenv.config();
    dotenvExpand(myEnv);
    logIteration(i, "dotenv", "single");
  }
});
tests.single = results;

// large interpolated .env loading
results = executeTest(logIteration => {
  for (let i = 0; i < iterations[1]; i += 1) {
    const myEnv = dotenv.config({ path: ".env.interp" });
    dotenvExpand(myEnv);
    logIteration(i, "dotenv", "interpolated");
  }
});
tests.interpolated = results;

// loading default next .env files (.env, .env.development, .env.local, .env.development.local)
results = executeTest(logIteration => {
  for (let i = 0; i < 500000; i += 1) {
    dotenvExpand(dotenv.config({ path: ".env" }));
    dotenvExpand(dotenv.config({ path: ".env.development" }));
    dotenvExpand(dotenv.config({ path: ".env.local" }));
    dotenvExpand(dotenv.config({ path: ".env.development.local" }));
    logIteration(i, "dotenv", "multiple");
  }
});

tests.multiple = results;

writeResultToFile({ dotenv: tests });
