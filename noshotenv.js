const env = require("@noshot/env");
const Test = require("./utils/tester");

const tests = new Test("@noshot/env");

tests
  .add("single", () => {
    // loading a single default .env
    env.config();
  })
  .add("interpolated", () => {
    // large interpolated .env loading
    env.config({ paths: [".env.interp"] });
  })
  .add("multiple", () => {
    // loading multiple .env files (.env, .env.development, .env.local, .env.development.local)
    env.config({
      paths: [
        ".env",
        ".env.development",
        ".env.local",
        ".env.development.local"
      ]
    });
  })
  .run();

tests.writeResultsToFile();
