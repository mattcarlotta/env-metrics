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

**Compiled Timestamp**: Friday, January 7, 2022 12:44 PM

Loading and interpolating a single [small env file](https://github.com/no-shot/env-metrics/blob/main/.env):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Friday, January 7, 2022 11:27 AM | 500000 | 8.785s, 8.804s, 8.805s | 8.798s | 100.00% |
| dotenv | Friday, January 7, 2022 11:38 AM | 500000 | 18.712s, 18.866s, 18.888s | 18.822s | 46.95% |
| next | Friday, January 7, 2022 12:09 PM | 500000 | 82.486s, 82.49s, 82.811s | 82.596s | 10.65% |

Loading and interpolating a single [large env file](https://github.com/no-shot/env-metrics/blob/main/.env.interp):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Friday, January 7, 2022 11:28 AM | 5000 | 17.888s, 17.978s, 18.04s | 17.969s | 100.00% |
| dotenv | Friday, January 7, 2022 11:40 AM | 5000 | 68.279s, 68.418s, 68.443s | 68.38s | 26.20% |
| next | Friday, January 7, 2022 12:17 PM | 5000 | 78.481s, 78.601s, 78.815s | 78.632s | 22.79% |

Loading and interpolating multiple small env files ([1](https://github.com/no-shot/env-metrics/blob/main/.env), [2](https://github.com/no-shot/env-metrics/blob/main/.env.development), [3](https://github.com/no-shot/env-metrics/blob/main/.env.local), [4](https://github.com/no-shot/env-metrics/blob/main/.env.development.local)):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Friday, January 7, 2022 11:30 AM | 500000 | 18.08s, 18.199s, 18.227s | 18.169s | 100.00% |
| dotenv | Friday, January 7, 2022 11:47 AM | 500000 | 33.421s, 33.904s, 33.905s | 33.743s | 54.10% |
| next | Friday, January 7, 2022 12:25 PM | 500000 | 102.523s, 104.7s, 104.884s | 104.036s | 17.64% |
