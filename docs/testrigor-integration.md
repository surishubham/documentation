---
id: testrigor-integration
title: testRigor Integration
hide_title: true
sidebar_label: testRigor Integration
description: Integrate LambdaTest with testRigor to perform desktop web, mobile web and native app testing across 3000+ real browsers, devices, and operating systems.
keywords:
  - lambdatest integration with testrigor
  - lambdatest and testrigor integration 
  - lambdatest testrigor
url: https://www.lambdatest.com/support/docs/testrigor-integration/
site_name: LambdaTest
slug: testrigor-integration/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "testRigor Integration",
          "item": "https://www.lambdatest.com/support/docs/testrigor-integration/"
        }]
      })
    }}
></script>

# testRigor Integration
***

TestRigor is a test automation tool that allows your team to build, maintain, and understand tests written in plain English. It also has a Chrome plugin that speeds up test creation, and its AI-powered system significantly reduces test maintenance.

LambdaTest integration with testRigor enables you to perform desktop web, mobile web and native app testing across 3000+ real browsers, devices, and operating systems.

## Prerequisites
---

1. Create a LambdaTest account to begin testing your web application. If you do not have an account, [register for free](https://accounts.lambdatest.com/register).

2. Ensure you have a testRigor account.

## Creating Test Suite In testRigor
---

1. Sign in to your testRigor account.

2. After you log in to testRigor, it will prompt you to create a new test suite. You need to furnish details like test suite name, type of testing (Desktop Web, Mobile Web or Native and Hybrid Mobile), test URL and so on.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/test_suite.png').default} alt="Integrating LambdaTest With testRigor" width="740" height="625" className="doc_img"/>


3. Once you provide test suite details, click **Create Test Suite** and you will be routed to the testRigor dashboard.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/create_suite.png').default} alt="Integrating LambdaTest With testRigor" width="744" height="568" className="doc_img"/>


## Integrating LambdaTest With testRigor
---

1. In the testRigor dashboard, select **Settings** from the left sidebar.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/settings.png').default} alt="Integrating LambdaTest With testRigor" width="1366" height="625" className="doc_img"/>


2. Navigate to the **Integrations** tab.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/integrations.png').default} alt="Integrating LambdaTest With testRigor" width="1366" height="625" className="doc_img"/>


3. Click the *Enable LambdaTest* checkbox and enter your LambdaTest Username and Access Key. You can find your credentials in the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build). 

 <img loading="lazy" src={require('../assets/images/testrigor-integration/enable_lt.png').default} alt="Integrating LambdaTest With testRigor" width="1366" height="625" className="doc_img"/>

:::info 
In case, you wish to test locally or privately hosted websites, you can select the *Enable LambdaTest Tunnel* checkbox and set your desired Tunnel Name.
:::

4. Click **Save**.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/save.png').default} alt="Integrating LambdaTest With testRigor" width="1359" height="623" className="doc_img"/>

5. Next, go to the **Multiple browsers** tab.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/browsers.png').default} alt="Integrating LambdaTest With testRigor" width="1355" height="615" className="doc_img"/>


6. Choose your cloud **Provider** as LambdaTest. Select **OS**, **OS Version**, **Browser** and **Browser Version**. Click **Add Browser** and then **Save**. 

 <img loading="lazy" src={require('../assets/images/testrigor-integration/multi_browsers.png').default} alt="Integrating LambdaTest With testRigor" width="1360" height="621" className="doc_img"/>


## Running Tests With testRigor On The LambdaTest Platform
---

1. From the testRigor's left sidebar, click **Test Cases**.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/test_case.png').default} alt="Integrating LambdaTest With testRigor" width="1359" height="617" className="doc_img"/>


2. Open the dropdown menu of the test case you want to re-run, and click **Re-test**. 

> The below test case demonstrates LambdaTest Selenium Automation's booking a demo functionality. First, it visits the LambdaTest [Selenium Automation](https://www.lambdatest.com/selenium-automation) website, clicks on the "Book A Demo" button, enters the required fields and then presses the "Schedule Demo" button.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/expand_dd.png').default} alt="Integrating LambdaTest With testRigor" width="1366" height="625" className="doc_img"/>

3. Now visit the LambdaTest Automation Dashboard to view your test execution results.

 <img loading="lazy" src={require('../assets/images/testrigor-integration/results.png').default} alt="Integrating LambdaTest With testRigor" width="1366" height="625" className="doc_img"/>


---

