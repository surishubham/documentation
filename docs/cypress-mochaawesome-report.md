---
id: cypress-mochaawesome-report
title: Consolidated Mochawesome Report for Cypress on HyperExecute
hide_title: true
sidebar_label: Cypress Mochawesome Report
description: Discover how to create MochaAwesome test reports for Cypress framework testing on LambdaTest and how to download these reports from the dashboard
keywords:
    - cypress testing
    - cypress automation testing
    - hyperexecute cypress testing
    - hyperexecute automation testing
    - hyperexecute cypressv10 testing
    - hyperexecute grid cypress testing
  
url: https://www.lambdatest.com/support/docs/cypress-mochaawesome-report/
site_name: LambdaTest
slug: cypress-mochaawesome-report/
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
          "name": "Playwright Testing With Playwright Test",
          "item": "https://www.lambdatest.com/support/docs/cypress-mochaawesome-report/"
        }]
      })
    }}
></script>

# Consolidated Mochawesome Report for Cypress Framework on HyperExecute 
* * *
Cypress is an open-source, end-to-end testing framework made especially for contemporary web applications. It enables programmers to create and run tests that mimic user interactions right inside a web browser.

### Built-in Reporters
There several pre-defined or built-in reporters and since Cypress is built on top of Mocha, that means any reporter built for Mocha can be used with Cypress as well. Each reporter may present the test results in a different way, suitable for specific needs or preferences. These built-in reporters offer different levels of detail and visualization options, helping developers to understand the test results and identify any potential issues more effectively.
>
Following are some of the built-in reporters:
- Spec Reporter
- Dot Matrix Reporter
- Nyan Reporter
- Tap Reporter
- Landing Strip Reporter
- List Reporter

There are many other built-in reporters as well. By default, Cypress uses the `spec` reporter to output information to `STDOUT`

### Custom Reporters
Apart from the built-in reporters, Cypress Test also allows developers to create custom reporters i.e. you have the flexibility to define your own format and layout for displaying test results. Custom reporters are beneficial when you have specific reporting requirements or when you want to integrate the test results seamlessly into your existing development workflow.

You can load custom Mocha reporters through a relative or absolute path which can be specified in your **Cypress Configuration file** or via the **CLI**.

## Mochawesome Report on HyperExecute
***

Mochawesome reporter is a custom reporter that generates a standalone HTML report which helps to help visualize the test runs. It has simple, clean, and modern design. The report has filters to display only the desired tests and renders stack trace for failed tests. The Mochawesome report is one of the most important reports in Cypress.

### Steps to Generate HTML Report on HyperExecute

**Step 1:** Update your Cypress Configuration File by adding the below code

#### Cypress Config File

```bash
"reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": [
      "mochawesome"
    ],
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": true,
      "html": false,
      "json": true
    }
  }
```

> The `overwrite` parameter should be set to **true** and `html` should be set to **false** because the mocha-merge utility which we use to merge reports do not support html files in path while merging json files

:::tip Note

The path to report is set to **``"reportDir": "cypress/results"``** and it should not be changed as we use this path for showing command logs on a dashboard.

:::

**Step 2:** Now configure the report parameters in the **HyperExecute YAML** file.

```bash
report: true
partialReports:
  frameworkName: cypress
  location: cypress/results
  type: html
```

**Step 3:** Now Execute your job by triggering the HyperExecute CLI. You can  visit the HyperExecute dashboard to download the report after job completion.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/mochawesome-report.png').default} alt="Image" className="doc_img"/> 