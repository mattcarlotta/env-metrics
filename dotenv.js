const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const Test = require("./utils/tester");

const tests = new Test("dotenv");

// loading a single default .env loading
tests.add("single", () => {
    dotenvExpand(dotenv.config());
});

// large interpolated .env loading
tests.add("interpolated", () => {
    dotenvExpand(dotenv.config({ path: ".env.interp" }));
});

// loading multiple .env files (.env, .env.development, .env.local, .env.development.local)
tests.add("multiple", () => {
    dotenvExpand(dotenv.config({ path: ".env" }));
    dotenvExpand(dotenv.config({ path: ".env.development" }));
    dotenvExpand(dotenv.config({ path: ".env.local" }));
    dotenvExpand(dotenv.config({ path: ".env.development.local" }));
});

tests.run();
tests.writeResultsToFile();
