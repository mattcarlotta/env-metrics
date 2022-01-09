const env = require("@noshot/env");
const Test = require("./utils/tester");

const test = new Test("@noshot/env");

// loading a single default .env
test.start("single", () => {
  env.config();
});

// large interpolated .env loading
test.start("interpolated", () => {
  env.config({ paths: [".env.interp"] });
});

// loading multiple .env files (.env, .env.development, .env.local, .env.development.local)
test.start("multiple", () => {
  env.config({
    paths: [".env", ".env.development", ".env.local", ".env.development.local"]
  });
});

test.writeResultsToFile();
