---
id: smartui-selenium-python-sdk
title: Integrate SmartUI SDK with Selenium Tests
sidebar_label: Python
description: In this documentation, learn how integrate your Selenium Python automated tests with LambdaTest's SmartUI.
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

url: https://www.lambdatest.com/support/docs/smartui-cli/
slug: smartui-selenium-python-sdk/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

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
Welcome to the world of simplified visual testing with the SmartUI SDK. 

Integrating seamlessly into your existing Selenium testing suite, SmartUI SDK revolutionizes the way you approach visual regression testing. Our robust solution empowers you to effortlessly capture, compare, and analyze screenshots across a multitude of browsers and resolutions, ensuring comprehensive coverage and accuracy in your visual testing endeavors.

## Pre-requisites for running tests through SmartUI SDK

- Basic understanding of Command Line Interface and Selenium is required.
- Login to [LambdaTest SmartUI](https://smartui.lambdatest.com/) with your credentials.
- Install **virtualenv** which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.
  
```bash
pip install virtualenv
```

The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI Selenium SDK integration.

## Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>CLI</b> or <b>Web</b> for executing your `SDK` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

## Steps to run your first test

Once you have created a SmartUI Project, you can generate screenshots by running automation scripts. Follow the below steps to successfully generate screenshots

### **Step 1:** Create/Update your test

- You can clone the sample repository to run `LambdaTest` automation tests with `SmartUI` and use the `SmartUI_SDK_LT_hub.py` file.

```bash
git clone https://github.com/LambdaTest/smartui-python-sample
cd smartui-python-sample
```

- Create a virtual environment in your project folder (the environment name is arbitrary).
  
```bash
virtualenv venv
```

- Activate the environment.
  
```bash
source venv/bin/activate
```

### **Step 2**: Install the Dependencies

Install required NPM modules for `LambdaTest Smart UI Selenium SDK` in your **Frontend** project.

```bash
npm i @lambdatest/smartui-cli
```
```bash
pip install lambdatest-selenium-driver
```

### **Step 3:** Configure your Project Token

Setup your project token show in the **SmartUI** app after, creating your project.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD" default>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Powershell" label="Windows-PS">

```bash
$Env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```
</TabItem>
</Tabs>

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-project-token.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

### **Step 4:** Create and Configure SmartUI Config

You can now configure your project settings on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

```bash
npx smartui config:create smartui-web.json
```

Once, the configuration file will be created, you will be seeing the default configuration pre-filled in the configuration file:

```json title="/smartui-sdk-project/smartui-web.json"
{
  "web": {
    "browsers": [
      "chrome", 
      "firefox",
      "safari",
      "edge",
      // Add more browser configuration here
    ],
    "viewports": [
      [
        1920,
        1080
      ],
      [
        1366,
        768
      ],
      [
        360,
        640
      ]
    ],
    "waitForPageRender": 50000, // Optional (Should only be used in case of websites which take more than 30s to load)
    "waitForTimeout": 1000 //Optional (Should only be used in case lazy-loading/async components are present )

  }
}
```

:::info Optional Keys in SmartUI configuration

**waitForPageRender** - If one or more `URLs` in your script require a relatively higher amount of time to load, you may use the `waitForPageRender` key in the config file to make sure the screenshots are rendered correctly. Avoid using the same in case your websites render in less than 30 seconds as it might increase the execution time of your tests.


**waitForTimeout** - If you are using any `async` components, you can add wait time for the page to load the DOM of your components. This can help avoid false-positive results for your tests. You can add the wait time in milliseconds, which might increase the execution time of your tests.
:::

### **Step 5:** Adding SmartUI function to take screenshot

- You can incorporate SmartUI into your custom `Selenium` automation test (any platform) script by adding the `smartuiSnapshot` function in the required segment of selenium script of which we would like to take the screenshot, as shown below: 
  

```python
from lambdatest_selenium_driver import smartui_snapshot
from selenium import webdriver


driver = webdriver.Chrome()
try:
    driver.get('<Required URL>')
    smartui_snapshot(driver,"<Screenshot Name>")
except Exception as err:
    print(err)
finally: 
    driver.close()
```

### **Step 6:** Execute the Tests on SmartUI Cloud

Execute `visual regression tests` on SmartUI using the following commands

```bash
npx smartui exec python <Test_file_name>.py
```

:::note 
You may use the `npx smartui --help` command in case you are facing issues during the execution of SmartUI commands in the CLI.
:::

##  View SmartUI Results

You have successfully integrated SmartUI SDK with your Selenium tests. Visit your SmartUI project to view builds and compare snapshots between different test runs.

You can see the Smart UI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.


<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui_ss_cli.png').default} alt="cmd" width="768" height="373" className="doc_img"/>


For additional information about SmartUI APIs please explore the documentation [here](https://www.lambdatest.com/support/api-doc/)


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
