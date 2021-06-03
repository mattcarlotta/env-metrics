# Env Metrics

## Commands

Run individual tests by running the following commands:

| `yarn <command>` | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `dotenv`         | Runs tests for `dotenv` + `dotenv-expand` (outputs results to `results.json` file as `dotenv`). |
| `next`           | Runs tests for `next` (outputs results to `results.json` file as `next`).                       |
| `noshotenv`          | Runs tests for `noshotenv` (outputs results to `results.json` file as `@noshot/env`).           |
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

**Compiled Timestamp**: Thursday, June 3, 2021 11:58 AM

Loading and interpolating a single [small env file](https://github.com/no-shot/env-metrics/blob/main/.env):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Monday, May 31, 2021 11:04 AM | 500000 | 11.391s, 11.394s, 11.466s | 11.417s | 100.00% |
| dotenv | Monday, May 31, 2021 11:09 AM | 500000 | 20.631s, 20.674s, 20.703s | 20.669s | 55.21% |
| next | Monday, May 31, 2021 11:22 AM | 500000 | 87.626s, 88.094s, 88.142s | 87.954s | 13.00% |

Loading and interpolating a single [large env file](https://github.com/no-shot/env-metrics/blob/main/.env.interp):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Monday, May 31, 2021 11:05 AM | 5000 | 20.509s, 20.814s, 21.047s | 20.79s | 100.00% |
| dotenv | Monday, May 31, 2021 11:11 AM | 5000 | 68.529s, 68.831s, 68.838s | 68.733s | 29.93% |
| next | Monday, May 31, 2021 11:42 AM | 5000 | 82.715s, 82.777s, 82.877s | 82.79s | 24.79% |

Loading and interpolating multiple small env files ([1](https://github.com/no-shot/env-metrics/blob/main/.env), [2](https://github.com/no-shot/env-metrics/blob/main/.env.development), [3](https://github.com/no-shot/env-metrics/blob/main/.env.local), [4](https://github.com/no-shot/env-metrics/blob/main/.env.development.local)):
| package | run timestamp | iterations | duration (3 fastest runs out of 6) | avg | fastest |
| --- | --- | --- | --- | --- | --- |
| @noshot/env | Monday, May 31, 2021 11:07 AM | 500000 | 20.974s, 21.096s, 21.228s | 21.099s | 100.00% |
| dotenv | Monday, May 31, 2021 11:18 AM | 500000 | 34.513s, 34.646s, 34.77s | 34.643s | 60.77% |
| next | Monday, May 31, 2021 11:31 AM | 500000 | 107.089s, 107.159s, 107.331s | 107.193s | 19.59% |
