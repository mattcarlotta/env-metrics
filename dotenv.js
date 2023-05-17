const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const Test = require("./utils/tester");

const tests = new Test("dotenv");

tests
    .add("single", () => {
        // loading a single default .env loading
        dotenvExpand.expand(dotenv.config());
    })
    .add("interpolated", () => {
        // large interpolated .env loading
        dotenvExpand.expand(dotenv.config({ path: ".env.interp" }));
    })
    .add("multiple", () => {
        // loading multiple .env files (.env, .env.development, .env.local, .env.development.local)
        dotenvExpand.expand(dotenv.config({ path: ".env" }));
        dotenvExpand.expand(dotenv.config({ path: ".env.development" }));
        dotenvExpand.expand(dotenv.config({ path: ".env.local" }));
        dotenvExpand.expand(dotenv.config({ path: ".env.development.local" }));
    })
    .run();

tests.writeResultsToFile();
