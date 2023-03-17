const { readFileSync, writeFileSync } = require("fs");
const process = require("process");
const readline = require("readline");
const { join } = require("path");
const { createDateWithFormat } = require("./createDate");
const iterations = require("../config/iterationsConfig");
const runs = require("../config/runsConfig");

const terminal = process.stdout;

/**
 * Creates a new test with the `testName`.
 * @class
 */
class Test {
    /** @constructs
     * @param {string} testName - name of test
     */
    constructor(testName) {
        this.date = "";
        this.processenv = process.env;
        this.resultFile = join(process.cwd(), "result.json");
        this.runs = runs;
        this.runtimes = [];
        this.iterations = iterations;
        this.testName = testName;
        this.testResults = {};
        this.testRuns = [];
        this.testRunNum = 0;
        this.testType = "";

        this.clearTerminal();
    }

    /**
     * Clears the terminal.
     */
    clearTerminal() {
        terminal.write("\n".repeat(terminal.rows));
        readline.cursorTo(terminal, 0, 0);
        readline.clearScreenDown(terminal);
    }

    /**
     * Prints a message to the terminal's `stdout`.
     * @function
     * @param {number} run - current test run
     * @param {number} timeElapsed - time elapsed during run
     */
    log(run, timeElapsed) {
        terminal.clearLine(1);
        terminal.cursorTo(0);
        terminal.write(
            `\x1b[32m[${this.testName}] test name: ${this.testType} | run: ${run}/${this.runs
            } | iterations: ${this.iterations[this.testRunNum - 1]
            } | elapsed: ${timeElapsed}s \x1b[0m\n`
        );
    }

    /**
     * Runs a test function according to `this.runs` and the number of `this.iterations`.
     * @param {string} testType - string name of test type
     * @param {function} testFn - the test function to run
     * @example ```test.start("test", () => {});```
     */
    start({ testType, testFn }) {
        process.env = this.processenv;
        this.date = createDateWithFormat();
        this.runtimes = [];
        this.testType = testType;

        for (let run = 1; run <= this.runs; run += 1) {
            const startDate = new Date();
            terminal.write(`\nRunning ${testType} run ${run}... \n`);

            for (
                let iteration = 0;
                iteration <= this.iterations[this.testRunNum - 1];
                iteration += 1
            ) {
                testFn();
            }

            const timeElapsed = (new Date().getTime() - startDate.getTime()) / 1000;
            this.log(run, timeElapsed);
            this.runtimes.push(timeElapsed);
        }

        this.setResults();
    }

    /**
     * Adds a test function to `this.testRuns`.
     * @param {string} testType - string name of test type
     * @param {function} testFn - the test function to run
     * @example ```test.add("test", () => {});```
     */
    add(testType, testFn) {
        this.testRuns.push({ testType, testFn });
        return this;
    }

    /**
     * Runs added tests.
     */
    run() {
        for (let runNum = 1; runNum < this.testRuns.length + 1; runNum += 1) {
            this.testRunNum = runNum;
            this.start(this.testRuns[this.testRunNum - 1]);
        }
    }

    /**
     * Collects the results of test runs.
     */
    setResults() {
        const fastest = Array.from(this.runtimes).sort().splice(0, 3);
        const avg = parseFloat((fastest.reduce((a, b) => a + b, 0) / 3).toFixed(3));

        Object.assign(this.testResults, {
            [this.testType]: {
                date: this.date,
                runtimes: this.runtimes,
                fastest,
                avg
            }
        });

    }

    /**
     * Reads the result file.
     * @returns the read result of the JSON file
     */
    readResultFile() {
        try {
            const file = readFileSync(this.resultFile, { encoding: "utf-8" });

            return JSON.parse(file);
        } catch (error) {
            return {};
        }
    }

    /**
     * Writes the collected test runs from `this.result` to the result file.
     */
    writeResultsToFile() {
        try {
            const combinedFile = this.readResultFile();

            Object.assign(combinedFile, {
                [this.testName]: this.testResults
            });

            writeFileSync(this.resultFile, JSON.stringify(combinedFile, null, 2), {
                encoding: "utf-8"
            });

            this.clearTerminal();
            console.table(this.testResults);

            process.exit(0);
        } catch (error) {
            console.error(`\r\x1b[31m${error}\x1b[0m`);
            process.exit(1);
        }
    }
}

module.exports = Test;
