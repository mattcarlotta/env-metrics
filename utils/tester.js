const { readFileSync, writeFileSync } = require("fs");
const process = require("process");
const readline = require("readline");
const { join } = require("path");
const {
    createDate,
    createDateWithFormat,
    getSecondsDifference
} = require("./createDate");
const fileExists = require("./fileExists");
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
        this.resultFile = join(process.cwd(), "result.json");
        this.runIteration = 0;
        this.runs = runs;
        this.iterations = iterations;
        this.testName = testName;
        this.testRuns = [];
        this.testResults = {};
        this.testType = "";
        this.runtimes = [];
        this.date = "";
        this.processenv = process.env;

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
     * @param {number} iteration - current test iteration
     */
    log(run, iteration, timeElapsed) {
        terminal.clearLine(1);
        terminal.cursorTo(0);
        terminal.write(
            `\x1b[32m[${this.testName}] test: ${this.testType} | run: ${run}/${this.runs
            } | iteration: ${iteration}/${iteration
            } | elapsed: ${timeElapsed}s \x1b[0m\n`
        );
    }

    /**
     * Runs a test function according to `this.runs` and the number of `this.iterations`.
     * @param {string} testType - string name of test type
     * @param {function} testFn - the test function to run
     * @example ```test.start("test", () => {});```
     */
    start(testType, testFn, idx) {
        process.env = this.processenv;
        this.runtimes = [];
        this.testType = testType;
        this.date = createDateWithFormat();

        for (let run = 1; run <= this.runs; run += 1) {
            const startDate = createDate();
            terminal.write(`\nRunning ${testType} run ${run}... \n`);
            for (
                let iteration = 0;
                iteration <= this.iterations[idx];
                iteration += 1
            ) {
                testFn();
            }
            const timeElapsed = getSecondsDifference(startDate);
            this.log(run, this.iterations[idx], timeElapsed);
            this.runtimes.push(timeElapsed);
        }

        this.setResults();
    }

    add(testType, testFn) {
        this.testRuns.push({ testType, testFn });
        return this;
    }

    run() {
        for (let idx = 0; idx < this.testRuns.length; idx += 1) {
            const { testType, testFn } = this.testRuns[idx];
            this.start(testType, testFn, idx);
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
