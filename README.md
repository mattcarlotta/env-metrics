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

**Compiled Timestamp**: Wednesday, June 9, 2021 3:35 PM

Loading and interpolating a single [small env file](https://github.com/no-shot/env-metrics/blob/main/.env):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Wednesday, June 9, 2021 3:30 PM | 500000 | 11.244s, 11.352s, 11.382s | 11.326s | 100.00% |
| dotenv | Thursday, June 3, 2021 12:07 PM | 500000 | 20.387s, 20.457s, 20.491s | 20.445s | 55.15% |
| next | Thursday, June 3, 2021 12:19 PM | 500000 | 89.868s, 90.12s, 91.694s | 90.561s | 12.51% |

Loading and interpolating a single [large env file](https://github.com/no-shot/env-metrics/blob/main/.env.interp):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Wednesday, June 9, 2021 3:31 PM | 5000 | 20.549s, 20.658s, 20.719s | 20.642s | 100.00% |
| dotenv | Thursday, June 3, 2021 12:09 PM | 5000 | 68.5s, 68.729s, 68.869s | 68.699s | 30.00% |
| next | Thursday, June 3, 2021 12:39 PM | 5000 | 83.202s, 83.283s, 83.367s | 83.284s | 24.70% |

Loading and interpolating multiple small env files ([1](https://github.com/no-shot/env-metrics/blob/main/.env), [2](https://github.com/no-shot/env-metrics/blob/main/.env.development), [3](https://github.com/no-shot/env-metrics/blob/main/.env.local), [4](https://github.com/no-shot/env-metrics/blob/main/.env.development.local)):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Wednesday, June 9, 2021 3:33 PM | 500000 | 20.904s, 21.086s, 21.116s | 21.035s | 100.00% |
| dotenv | Thursday, June 3, 2021 12:16 PM | 500000 | 35.215s, 35.274s, 35.306s | 35.265s | 59.36% |
| next | Thursday, June 3, 2021 12:28 PM | 500000 | 102.829s, 103.227s, 103.7s | 103.252s | 20.33% |
