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

**Compiled Timestamp**: Friday, March 24, 2023 at 8:18:56 PM

Loading and interpolating a single [small env file](https://github.com/no-shot/env-metrics/blob/main/.env):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Friday, March 24, 2023 at 7:12:43 PM | 500000 | 7.34s, 7.447s, 7.461s | 7.416s | 100.00% |
| dotenv | Friday, March 24, 2023 at 7:17:01 PM | 500000 | 15.055s, 15.079s, 15.193s | 15.109s | 48.75% |
| next | Friday, January 7, 2022 12:09 PM | 500000 | 82.486s, 82.49s, 82.811s | 82.596s | 8.90% |

Loading and interpolating a single [large env file](https://github.com/no-shot/env-metrics/blob/main/.env.interp):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Friday, March 24, 2023 at 7:13:27 PM | 5000 | 17.916s, 18.109s, 18.309s | 18.111s | 100.00% |
| dotenv | Friday, March 24, 2023 at 7:18:33 PM | 5000 | 66.386s, 66.889s, 67.015s | 66.763s | 26.99% |
| next | Friday, January 7, 2022 12:17 PM | 5000 | 78.481s, 78.601s, 78.815s | 78.632s | 22.83% |

Loading and interpolating multiple small env files ([1](https://github.com/no-shot/env-metrics/blob/main/.env), [2](https://github.com/no-shot/env-metrics/blob/main/.env.development), [3](https://github.com/no-shot/env-metrics/blob/main/.env.local), [4](https://github.com/no-shot/env-metrics/blob/main/.env.development.local)):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Friday, March 24, 2023 at 7:15:17 PM | 500000 | 16.193s, 16.271s, 16.337s | 16.267s | 100.00% |
| dotenv | Friday, March 24, 2023 at 7:25:17 PM | 500000 | 29.13s, 29.537s, 29.79s | 29.486s | 55.59% |
| next | Friday, January 7, 2022 12:25 PM | 500000 | 102.523s, 104.7s, 104.884s | 104.036s | 15.79% |
