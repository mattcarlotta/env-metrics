const env = require("@noshot/env");
const Test = require("./utils/tester");

const test = new Test("@noshot/env", 6);

// loading a single default .env
test.start("single", 500000, () => {
  env.config();
});

// large interpolated .env loading
test.start("interpolated", 5000, () => {
  env.config({ paths: [".env.interp"] });
});

// loading multiple .env files (.env, .env.development, .env.local, .env.development.local)
test.start("multiple", 500000, () => {
  env.config({
    paths: [".env", ".env.development", ".env.local", ".env.development.local"]
  });
});

test.writeResultsToFile();
