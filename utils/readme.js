const head = compiled => `# Env Metrics

## Commands

Run individual tests by running the following commands:

| \`yarn <command>\` | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| \`dotenv\`         | Runs tests for \`dotenv\` + \`dotenv-expand\` (outputs results to \`results.json\` file as \`dotenv\`). |
| \`next\`           | Runs tests for \`next\` (outputs results to \`results.json\` file as \`next\`).                       |
| \`noshotenv\`      | Runs tests for \`noshotenv\` (outputs results to \`results.json\` file as \`@noshot/env\`).           |
| \`readme\`         | Generates a \`README.md\` from the \`results.json\` file.                                           |

⚠️ Warning: The tests can take a quite a long time to complete! Adjust the [iterations](https://github.com/no-shot/env-metrics/blob/main/config/iterationsConfig.js) or [runs](https://github.com/no-shot/env-metrics/blob/main/config/runsConfig.js) if needed.


## Metrics

**System Specs**:

- CPU: AMD Ryzen 9 5950x (stock)
- MOBO: Asus x570 ROG Crosshair VIII Hero (WI-FI)
- RAM: G.Skill Trident Z Neo 32 GB (4 x 8 GB) running @ 3600Mhz
- Storage: Sabrent 1TB Rocket 4 Plus NVMe 4.0 Gen4
- OS: Linuxmint 20.1 ulyssa
- Kernel: Linux 5.8.0-53-generic x86_64

**Compiled Timestamp**: ${compiled}

Loading and interpolating a single [small env file](https://github.com/no-shot/env-metrics/blob/main/.env):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

const singleLargeEnv = `
Loading and interpolating a single [large env file](https://github.com/no-shot/env-metrics/blob/main/.env.interp):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

const multiEnvs = `
Loading and interpolating multiple small env files ([1](https://github.com/no-shot/env-metrics/blob/main/.env), [2](https://github.com/no-shot/env-metrics/blob/main/.env.development), [3](https://github.com/no-shot/env-metrics/blob/main/.env.local), [4](https://github.com/no-shot/env-metrics/blob/main/.env.development.local)):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
`;

module.exports = {
  head,
  singleLargeEnv,
  multiEnvs
};
