---
id: automated-test-cases-with-ai
title: Managing Automated Tests with Test Manager
hide_title: false
sidebar_label: via Dashboard
description: Streamline testing with Test Manager! Manage automated tests, auto-generate BDD scenarios, and link automation runs seamlessly for Selenium Web frameworks.
keywords:
  - automated test cases
  - automated test cases with ai 
  - test cases
url: https://www.lambdatest.com/support/docs/automated-test-cases-with-ai/
site_name: LambdaTest
slug: automated-test-cases-with-ai/
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
          "name": "Automated Test Cases with AI",
          "item": "https://www.lambdatest.com/support/docs/automated-test-cases-with-ai/"
        }]
      })
    }}
></script>
Test Manager enables the creation and management of automated test cases directly within its platform. This feature not only streamlines test case development but also integrates AI to auto-generate BDD Scenarios from automated test runs, further optimizing the management of testing activities.

## Automated Linking of Automation Runs with Test Manager

1. Initiate the automation script and once it completes, proceed to the automation dashboard. The automation test run will be visible.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/automation-test-run.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

2. Open the Test Manager dashboard, and in the **Projects** section, you will find the **LambdaTest Automation** project automatically created.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/lambdatest-automation-project.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

3. Upon opening the newly created project, the automatically generated test case title from the automation process will be visible. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/newly-created-project.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

4. In the Test Case section, **BDD Scenarios** will be automatically visible in the Test Case that is created from the command logs of the linked automated test run.

> Currently, this feature is supported for Selenium Web frameworks.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bdd-scenarios.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>