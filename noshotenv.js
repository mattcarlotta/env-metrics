const env = require("@noshot/env");
const executeTest = require("./utils/executeTest");
const writeResultToFile = require("./utils/writeResultToFile");
const iterations = require("./config/iterationsConfig");

const tests = {
  single: {},
  interpolated: {},
  multiple: {}
};

// loading a single default .env
let results = executeTest(logIteration => {
  for (let i = 0; i < iterations[0]; i += 1) {
    env.config();
    logIteration(i, "@noshot/env", "single");
  }
});
tests.single = results;

// large interpolated .env loading
results = executeTest(logIteration => {
  for (let i = 0; i < iterations[1]; i += 1) {
    env.config({ paths: [".env.interp"] });
    logIteration(i, "@noshot/env", "interpolated");
  }
});
tests.interpolated = results;

// loading default next .env files (.env, .env.development, .env.local, .env.development.local)
results = executeTest(logIteration => {
  for (let i = 0; i < iterations[2]; i += 1) {
    env.config({
      paths: [
        ".env",
        ".env.development",
        ".env.local",
        ".env.development.local"
      ]
    });
    logIteration(i, "@noshot/env", "multiple");
  }
});
tests.multiple = results;

writeResultToFile({ "@noshot/env": tests });
