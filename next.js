const { loadEnvConfig } = require("./utils/next-src");
const Test = require("./utils/tester");

const test = new Test("next");

// loading a single default .env
test.start("single", () => {
  loadEnvConfig(".", [".env"]);
});

// large interpolated .env loading
test.start("interpolated", () => {
  loadEnvConfig(".", [".env.interp"]);
});

// loading multiple next .env files (.env, .env.development, .env.local, .env.development.local)
test.start("multiple", () => {
  loadEnvConfig();
});

test.writeResultsToFile();
