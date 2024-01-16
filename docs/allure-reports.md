---
id: allure-reports
title: Allure Reports on HyperExecute
hide_title: true
sidebar_label: Allure Reports
description: Learn how to generate Allure test report for HyperExecute on lambdatest and download the reports from the dashboard
keywords:
    - allure reports
    - hyperexecute allure reports
    - hyperexecute testing
url: https://www.lambdatest.com/support/docs/allure-reports/
site_name: LambdaTest
slug: allure-reports/
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
          "name": "Allure Reports",
          "item": "https://www.lambdatest.com/support/docs/allure-reports/"
        }]
      })
    }}
></script>

# Allure Reports

Allure Framework is a versatile, lightweight, multi-language test reporting tool designed to provide a concise representation of tested functionalities in a visually appealing web report format. It facilitates easy extraction of valuable information for all stakeholders involved in the development process.

## Integration with HyperExecute

If your testing framework already generates Allure reports, you can seamlessly integrate it with HyperExecute. This integration enables the generation of a consolidated Allure report on HyperExecute for each job, accessible through the report section of the HyperExecute dashboard.

## Allure Report Configuration

**Step 1:** To configure the Allure reporter in the **WDIO framework**, update your `wdio.conf.js` file as follows:

```bash
export const config = {
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
}
```

- The `outputDir` parameter specifies the directory where Allure reports will be stored. In this example, it is set to **'reports/allure-results'**. This parent folder is essential for HyperExecute integration, as detailed later.

- The `disableWebdriverStepsReporting` and `disableWebdriverScreenshotsReporting` parameters allow customization of reporting options.

**Step 2:** Add the following report parameters in your HyperExecute YAML file

```bash
report: true
partialReports:
  location: reports
  type: html
  frameworkName: allure
```

> **NOTE:** The above example is only for the WDIO framework and the baseline concept remains the same across all the frameworks that the allure-results should be saved in a parent folder and that location of the parent folder is to be provided in the location parameters of reports in the HyperExecute YAML file. 

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/allure.png').default} alt="Image"  className="doc_img"/>