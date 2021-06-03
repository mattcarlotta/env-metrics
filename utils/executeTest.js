const {
  createDate,
  createDateWithFormat,
  getSecondsDifference
} = require("./createDate");
const runs = require("../config/runsConfig");

const executeTest = fn => {
  const iterations = [];
  const date = createDateWithFormat();

  for (let i = 1; i <= runs; i += 1) {
    const startDate = createDate();
    fn((num, pkg, run) =>
      console.log(
        `iteration \x1b[33m${num + 1} (${pkg} ${run} run: ${i})\x1b[0m`
      )
    );
    iterations.push(getSecondsDifference(startDate));
  }

  const runtimes = iterations;
  const fastest = Array.from(iterations).sort().splice(0, 3);
  const avg = parseFloat((fastest.reduce((a, b) => a + b, 0) / 3).toFixed(3));

  return {
    date,
    runtimes,
    fastest,
    avg
  };
};

module.exports = executeTest;
