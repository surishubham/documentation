---
id: playwright-cicd
title: Running Playwright Tests In CI/CD
hide_title: true
sidebar_label: Playwright Testing In CI/CD
description: Learn how to perform Playwright testing through CI/CD across 40+ browser versions on the LambdaTest platform.
keywords:
 -  playwright testing 
  - playwright e2e testing 
  - playwright mobile testing 
  - playwright testing 
  - playwright testing lambdatest 
  - playwright parallel tests
  - parallel testing with playwright
  
url: https://www.lambdatest.com/support/docs/playwright-tests-in-ci-cd/
site_name: LambdaTest
slug: playwright-tests-in-ci-cd/
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
          "name": "Playwright Testing In CI/CD",
          "item": "https://www.lambdatest.com/support/docs/playwright-tests-in-ci-cd/"
        }]
      })
    }}
></script>

# Playwright Testing With CI/CD
***

LambdaTest integrates with a variety of CI/CD solutions to help you speed up your go-to-market launch by automating your delivery pipeline. Similarly, you can run Playwright tests in CI/CD across 40+ browsers in the cloud, reducing lead time by multiple folds and shipping quality builds faster.

Running Playwright tests through CI/CD pipeline involves three stages:

1. **Build**: It consists of developing an web app (or code) and hosting it on a staging environment for testing.
2. **Test**: It entails running Playwright tests on the LambdaTest platform.
3. **Deploy**: Based on your CI/CD configuration, the deploy stage may or may not present.

## Running Playwright Tests Via CI/CD
***

LambdaTest offers [integration with CI/CD tools](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/) like Jenkins, Bamboo, AWS CodePipeline, and more. In order to run Playwright tests in CI/CD, you need to perform few steps in the **Test** stage of your CI/CD pipeline.

1. Ensure the website (or code) is hosted on staging environment.

2. Import test data in existing databases in order to initiate the tests.

3. If the website under test in hosted on local server, then you will need to configure the LambdaTest tunnel by setting `tunnel` capability to `true` for running local tests via CI/CD on the LambdaTest. However, if the staging website is publicly accessible then this step is not required. 

4. Ensure your Playwright test scripts uses `chromium.connect` method to connect to the CDP endpoint at LambdaTest. Additional parameters for assigning a specific browser and OS combination to your LambdaTest test are contained in the `capabilities` variable.

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
        Playwright Testing In CI/CD
      </span>
    </li>
  </ul>
</nav>