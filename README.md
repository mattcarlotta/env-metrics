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
- MOBO: Asus x570 ROG Crosshair Dark Hero
- RAM: G.Skill Trident Z Neo 32 GB (4 x 8 GB) running @ 2100Mhz
- Storage: Sabrent 1TB Rocket 4 Plus NVMe 4.0 Gen4
- OS: Linuxmint 20.2 ulyssa
- Kernel: Linux 5.13.0-23-generic x86_64

**Compiled Timestamp**: Saturday, March 18, 2023 at 9:15:18 AM

Loading and interpolating a single [small env file](https://github.com/no-shot/env-metrics/blob/main/.env):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| dotenv | Thursday, March 16, 2023 2:47 PM | 500000 | 14.817s, 15.049s, 15.053s | 14.973s | 49.02% |
| next | Friday, January 7, 2022 12:09 PM | 500000 | 82.486s, 82.49s, 82.811s | 82.596s | 8.81% |

Loading and interpolating a single [large env file](https://github.com/no-shot/env-metrics/blob/main/.env.interp):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| dotenv | Thursday, March 16, 2023 2:49 PM | 5000 | 64.65s, 65.571s, 65.836s | 65.352s | 29.30% |
| next | Friday, January 7, 2022 12:17 PM | 5000 | 78.481s, 78.601s, 78.815s | 78.632s | 24.14% |

Loading and interpolating multiple small env files ([1](https://github.com/no-shot/env-metrics/blob/main/.env), [2](https://github.com/no-shot/env-metrics/blob/main/.env.development), [3](https://github.com/no-shot/env-metrics/blob/main/.env.local), [4](https://github.com/no-shot/env-metrics/blob/main/.env.development.local)):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| dotenv | Thursday, March 16, 2023 2:55 PM | 500000 | 27.504s, 28.164s, 28.576s | 28.081s | 60.42% |
| next | Friday, January 7, 2022 12:25 PM | 500000 | 102.523s, 104.7s, 104.884s | 104.036s | 16.21% |
