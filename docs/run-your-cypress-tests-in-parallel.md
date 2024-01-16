---
id: run-your-cypress-tests-in-parallel
title: Run Your Cypress Tests In Parallel On LambdaTest Platform
hide_title: true
sidebar_label: Parallel Testing
description: Run multiple Cypress tests on the LambdaTest cloud simultaneously across 40+ browser versions. This documentation will help you in running Cypress tests in parallel.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Testing Online
  - Run Cypress
  - Cypress Run Specific Test
  - Cypress Testing Environment
  - How to Run Cypress Tests

url: https://www.lambdatest.com/support/docs/run-your-cypress-tests-in-parallel/
site_name: LambdaTest
slug: run-your-cypress-tests-in-parallel/
---
# Run Your Cypress Tests In Parallel
---

If you want to run your tests parallelly on the LambdaTest platform, you can do that using either of the following two ways:

### 1. Run your Cypress tests Parallelly using the CLI

---

To perform Cypress testing parallelly using the CLI, you need to use the "`--parallels`" option while running your tests.

**Syntax:**

```bash
--parallels <number of parallel sessions>
```

For example, if you want to run your Cypress tests on 5 parallel sessions, you can use the below command:

```bash
lambdatest-cypress run --parallels 5
```

### 2. Run your Cypress tests Parallelly using the lambdatest-configuration.json file

---

To run your Cypress testing parallelly, you can also use the **lambdatest-configuration.json** file, using the '**parallels**' key. 

**Syntax:**

```json
{
  "run_settings": {
    ...
    "parallels": <number of parallel sessions>,
    ...
  }
}
```

For example, if you want to run your Cypress tests on 5 parallel sessions, use the below settings:

```json
{
  "run_settings": {
    ...
    "parallels": 5,
    ...
  }
}
```

:::info NOTE

The number of parallel test running on the LambdaTest platform at a time, is based on the concurrency plan of your LambdaTest account. In case the number of parallel tests is more than the concurrency plan, the remaining tests will get queued and run after the existing tests are complete. For example, suppose you have a concurrency plan of 5 parallel sessions and want to run 50 tests parallelly. In this case, only 5 parallel tests will be executed at a time, and the rest 45 will be queued. As the test finishes running, the queued tests will be moved to the running state based on availability.

:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Run Your Cypress Tests In Parallel
      </span>
    </li>
  </ul>
</nav>

