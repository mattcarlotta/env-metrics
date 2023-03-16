const { loadEnvConfig } = require("./utils/next-src");
const Test = require("./utils/tester");

const tests = new Test("next");

// loading a single default .env
tests.add("single", () => {
    loadEnvConfig(".", [".env"]);
});

// large interpolated .env loading
tests.add("interpolated", () => {
    loadEnvConfig(".", [".env.interp"]);
});

// loading multiple next .env files (.env, .env.development, .env.local, .env.development.local)
tests.add("multiple", () => {
    loadEnvConfig();
});

tests.run();
tests.writeResultsToFile();
