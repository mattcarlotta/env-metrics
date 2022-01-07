const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const Test = require("./utils/tester");

const test = new Test("dotenv");

// loading a single default .env loading
test.start("single", () => {
  dotenvExpand(dotenv.config());
});

// large interpolated .env loading
test.start("interpolated", () => {
  dotenvExpand(dotenv.config({ path: ".env.interp" }));
});

// loading multiple .env files (.env, .env.development, .env.local, .env.development.local)
test.start("multiple", () => {
  dotenvExpand(dotenv.config({ path: ".env" }));
  dotenvExpand(dotenv.config({ path: ".env.development" }));
  dotenvExpand(dotenv.config({ path: ".env.local" }));
  dotenvExpand(dotenv.config({ path: ".env.development.local" }));
});

test.writeResultsToFile();
