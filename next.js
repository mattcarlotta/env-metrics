const { loadEnvConfig } = require("./utils/next-src");
const Test = require("./utils/tester");

const tests = new Test("next");

tests
    // .add("single", () => {
    //     // loading a single default .env
    //     loadEnvConfig(".", [".env"]);
    // })
    .add("interpolated", () => {
        // large interpolated .env loading
        loadEnvConfig(".", [".env.interp"]);
    })
    // .add(
    // "multiple",
    // () => {
    //   // loading multiple next .env files (.env, .env.development, .env.local, .env.development.local)
    //   loadEnvConfig();
    // },
    // true
    // )
    .run();

tests.writeResultsToFile();
