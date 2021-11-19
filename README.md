# Env Metrics

## Commands

Run individual tests by running the following commands:

| `yarn <command>` | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `dotenv`         | Runs tests for `dotenv` + `dotenv-expand` (outputs results to `results.json` file as `dotenv`). |
| `next`           | Runs tests for `next` (outputs results to `results.json` file as `next`).                       |
| `noshotenv`      | Runs tests for `noshotenv` (outputs results to `results.json` file as `@noshot/env`).           |
| `readme`         | Generates a `README.md` from the `results.json` file.                                           |

⚠️ Warning: The tests can take a quite a long time to complete! Adjust the [iterations](https://github.com/no-shot/env-metrics/blob/main/config/iterationsConfig.js) or [runs](https://github.com/no-shot/env-metrics/blob/main/config/runsConfig.js) if needed.


## Metrics

**System Specs**:

- CPU: AMD Ryzen 9 5950x (stock)
- MOBO: Asus x570 ROG Crosshair VIII Hero (WI-FI)
- RAM: G.Skill Trident Z Neo 32 GB (4 x 8 GB) running @ 3600Mhz
- Storage: Sabrent 1TB Rocket 4 Plus NVMe 4.0 Gen4
- OS: Linuxmint 20.1 ulyssa
- Kernel: Linux 5.8.0-53-generic x86_64

**Compiled Timestamp**: Thursday, November 18, 2021 4:49 PM

Loading and interpolating a single [small env file](https://github.com/no-shot/env-metrics/blob/main/.env):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Thursday, November 18, 2021 4:27 PM | 500000 | 11.204s, 11.23s, 11.263s | 11.232s | 100.00% |
| dotenv | Thursday, November 18, 2021 4:37 PM | 500000 | 19.664s, 19.678s, 19.78s | 19.707s | 56.98% |
| next | Thursday, June 3, 2021 12:19 PM | 500000 | 89.868s, 90.12s, 91.694s | 90.561s | 12.47% |

Loading and interpolating a single [large env file](https://github.com/no-shot/env-metrics/blob/main/.env.interp):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Thursday, November 18, 2021 4:28 PM | 5000 | 18.861s, 18.885s, 18.922s | 18.889s | 100.00% |
| dotenv | Thursday, November 18, 2021 4:39 PM | 5000 | 67.348s, 67.529s, 67.657s | 67.511s | 28.01% |
| next | Thursday, June 3, 2021 12:39 PM | 5000 | 83.202s, 83.283s, 83.367s | 83.284s | 22.67% |

Loading and interpolating multiple small env files ([1](https://github.com/no-shot/env-metrics/blob/main/.env), [2](https://github.com/no-shot/env-metrics/blob/main/.env.development), [3](https://github.com/no-shot/env-metrics/blob/main/.env.local), [4](https://github.com/no-shot/env-metrics/blob/main/.env.development.local)):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Thursday, November 18, 2021 4:30 PM | 500000 | 20.561s, 20.648s, 20.717s | 20.642s | 100.00% |
| dotenv | Thursday, November 18, 2021 4:46 PM | 500000 | 34.449s, 34.652s, 34.705s | 34.602s | 59.69% |
| next | Thursday, June 3, 2021 12:28 PM | 500000 | 102.829s, 103.227s, 103.7s | 103.252s | 20.00% |
