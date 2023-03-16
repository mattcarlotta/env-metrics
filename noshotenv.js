const env = require("@noshot/env");
const Test = require("./utils/tester");

const tests = new Test("@noshot/env");

// loading a single default .env
tests.add("single", () => {
  env.config();
});

// large interpolated .env loading
tests.add("interpolated", () => {
  env.config({ paths: [".env.interp"] });
});

// loading multiple .env files (.env, .env.development, .env.local, .env.development.local)
tests.add("multiple", () => {
  env.config({
    paths: [".env", ".env.development", ".env.local", ".env.development.local"]
  });
});

tests.run();
tests.writeResultsToFile();
