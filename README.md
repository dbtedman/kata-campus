# [Kata](https://github.com/dbtedman/kata) // [Campus](https://github.com/dbtedman/kata-campus)

> ⚠️ WARNING: Not production ready code.

[![CI GitHub Pipeline](https://img.shields.io/github/workflow/status/dbtedman/kata-campus/ci?style=for-the-badge&logo=github&label=ci)](https://github.com/dbtedman/kata-campus/actions/workflows/ci.yml)

Campus headquarters for your personal learning platform.

-   [Getting Started](#getting-started)
-   [Verification](#verification)
-   [Design](#design)
-   [License](#license)

## Getting Started

```shell
nvm use && make
```

## Verification

### Linting

-   [Prettier](https://prettier.io)

```shell
make lint
```

These rules can then be automatically applied:

```shell
make format
```

## Design

> Initially based around sketched ideas collected while considering what this platform would be. These concepts will be refined over time.

### Concepts

#### Dependency Model

![Diagram depicting our platforms dependency model](doc/asset/dependency-model.png)

#### Personal Educational Platform

![Diagram depicting an outline of a personal educational platform](doc/asset/personal-educational-platform.png)

#### Modules (Exercises)

![Logo graphic to represent modules](doc/asset/modules.png)

Small focused exercises. These exercises are closely related to the instructional videos.

#### Videos (Instruction)

![Logo graphic to represent videos](doc/asset/videos.png)

Short instructional videos on specific topics.

#### Projects

![Logo graphic to represent projects](doc/asset/projects.png)

Each student has a customized series of projects assigned to them based on their goals and aspirations. Each project is supported by a series of videos and modules. These projects will make up what is now considered to be a degree.

#### Portfolio

![Logo graphic to represent portfolios](doc/asset/portfolio.png)

A collection of the students work throughout their studies. This will also include module activity and video viewership.

#### Communication

![Logo graphic to represent communication](doc/asset/communication.png)

A singular communications platform to support a variety of different methods of communication.

#### Me

![Logo graphic to represent me](doc/asset/me.png)

This section enables students to manage their education via a simple interface.

### Domain Entities

| Entity | Notes |
| :----- | :---- |
| ` `    |       |

### Domain Use Cases

| Use Case | Notes |
| :------- | :---- |
| ` `      |       |

### Gateways

| Gateway | Notes |
| :------ | :---- |
| ` `     |       |

### Security Mitigations

> Initially based on the [OWASP Top 10 - 2021](https://owasp.org/www-project-top-ten/).

| Security Risk                                                                                                                       | Mitigation |
| :---------------------------------------------------------------------------------------------------------------------------------- | :--------- |
| [A01:2021-Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)                                           |            |
| [A02:2021-Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)                                         |            |
| [A03:2021-Injection](https://owasp.org/Top10/A03_2021-Injection/)                                                                   |            |
| [A04:2021-Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)                                                       |            |
| [A05:2021-Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)                                   |            |
| [A06:2021-Vulnerable and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)                 |            |
| [A07:2021-Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/) |            |
| [A08:2021-Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)             |            |
| [A09:2021-Security Logging and Monitoring Failures](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)     |            |
| [A10:2021-Server-Side Request Forgery](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)                    |            |

## License

The [MIT License](./LICENSE.md) is used by this project.
