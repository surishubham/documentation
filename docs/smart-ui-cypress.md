---
id: smart-ui-cypress
title: Getting started with Smart UI using Cypress On LambdaTest
sidebar_label: Cypress
description: Master Visual UI Testing with Cypress on LambdaTest Automation Cloud across 40+ browser versions through this comprehensive documentation.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.lambdatest.com/support/docs/smart-ui-cypress/
slug: smart-ui-cypress/
---

---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": "https://www.lambdatest.com/support/docs/smart-ui-cypress/"
        }]
      })
    }}
></script>

Using the LambdaTest platform, perform regression testing in just one click and find Visual UI Regression bugs easily with the help of Smart Testing. This documentation will act as your step-by-step guide in performing successful Visual Regression tests.

## Pre-requisites for running SmartUI with Cypress

- Basic understanding of Cypress is required.
- Cypress version should be higher than 9.5.0. Click [here](https://docs.cypress.io/guides/references/changelog) to know more
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.
- Copy `LT_USERNAME` and `LT_ACCESS_KEY` credentials from `Access Key` button on the top right of the dashboard.

The following steps will guide you in running your first Visual Regression test on LambdaTest platform -

## Steps to create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Web</b> for executing your `Cypress` tests. 
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

---

**Step 1**: Install the required NPM module for `LambdaTest Cypress CLI` in your project.

```bash
npm install -g lambdatest-cypress-cli
```

**Step 2:** Use `init` command to generate the sample configuration files.

```bash
lambdatest-cypress init
```

**Step 3:** Define Smart UI configuration in the `lambdatest-config.json` file of your Cypress project as shown in the below code snippet.

```json title="/cypress-project/lambdatest-config.json"
{
  "lambdatest_auth": {
    "username": "<Your LambdaTest username>",
    "access_key": "<Your LambdaTest access key>"
  },
  "browsers": [
    {
      "browser": "Chrome",
      "platform": "Windows 10",
      "versions": ["latest-1"]
    },
    {
      "browser": "Firefox",
      "platform": "Windows 10",
      "versions": ["latest-1"]
    }
  ],
  "run_settings": {
    "cypress_config_file": "cypress.json",
    "build_name": "build-name",
    "parallels": 2,
    "specs": "./cypress/integration/examples/*.spec.js",
    "ignore_files": "",
    "feature_file_suppport": false,
    "network": false,
    "headless": false,
    "reporter_config_file": "",
    "npm_dependencies": {
      "cypress": "9.0.0"
    },
    "smart_ui": {
      // highlight-start
      "project": "<Your Project Name>", // Add your Smart UI Project Name here
      "build": "<Your_Build_Name>", // Please add your build name of choice here
      "baseline": false,// Enable if you want to update to a new baseline build
      // highlight-end
    }
  },
  "tunnel_settings": {
    "tunnel": false,
    "tunnel_name": null
  }
}
```

**Step 4:** Add **cy.screenshot()** method in your test script to capture the screenshots with the desired screenshot name.

```js
describe("Cypress test with Visual Regression", () => {
  it("Example test", () => {
    cy.visit("https://demo.lambdatest.com/");
    // highlight-next-line
    cy.screenshot("<Screenshot Name>"); //Add desired Cypress screenshot name
  });
});
```

**Step 5:** Run the test on the LambdaTest platform by executing the below-run command:

```bash
lambdatest-cypress run
```

**Step 6:** You can now see the Smart UI dashboard to view the results.

For additional information about Cypress framework please explore the documentation [here](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/)



## Advanced Options for Screenshot Comparison


  **Build Configuration** - If you have multiple screenshots running the same test suite and want to run the comparison for the same test suite, want to add a build as a baseline from your test suite or need to access more SmartUI Build Config Options, click [here](https://www.lambdatest.com/support/docs/smart-ui-build-options/).
  

  **Advanced Test Settings** - We offer multiple options for comparing the **Baseline** and the **Test Output** screenshots captured during your automation testing suites. To know more about our advanced P2P comparison options, click [here](https://www.lambdatest.com/support/docs/test-settings-options/).
  

  **HTML DOM Config and Options** - In case if you have any dynamic elements that are not in the same position across test runs, you can ignore or select a specific area to be removed from the comparison. For accessing such HTML DOM Config and Options, click [here](https://www.lambdatest.com/support/docs/html-dom-smartui-options/).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
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
     Smart UI with Cypress  </span>
    </li>
  </ul>
</nav>