---
id: run-automation-tests-using-angularjs-with-karma
title: AngularJS Test Automation:Perform AngularJS Automated Testing using Cloud Selenium Grid | LambdaTest
hide_title: true
sidebar_label: AngularJS with Karma
description: Now you can run your automation scripts using AngularJS with Karma on LambdaTest online Selenium Grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - angularjs selenium testing
  - angularjs automated testing
  - angularjs test automation
image: /assets/images/og-images/angular-automated-testing.jpg 
url: https://www.lambdatest.com/support/docs/angularjs-with-karma-running-angular-tests-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: angularjs-with-karma-running-angular-tests-on-lambdatest-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "AngularJS with Karma and Selenium",
          "item": "https://www.lambdatest.com/support/docs/angularjs-with-karma-running-angular-tests-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>

# AngularJS with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *
In this topic, you will learn how to perform AngularJS Automated Testing using [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation).

## Objective
***
By the end of this topic, you will be able to:

1. Perform AngularJS automated testing on Lambdatest Selenium grid with **Karma** test runner.
2. Leverage LambdaTest’s Advanced capabilities for AngularJS test automation.
3. Test your locally hosted pages using AngularJS test automation.
4. Run your test cases in parallel using AngularJS test automation to reduce build times.

## Prerequisites For Running Karma With Our Online Selenium Grid
* * *
Before getting started with automated scripts using AngularJS Automated Testing using Cloud Selenium Grid, you need to:

* Download and install NodeJS and node package manager or npm. Make sure you have NodeJS v6 or newer. Click here to download.
```bash
$ brew install node
```
* Make sure you are using the latest version of JavaScript.
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official Selenium website.

## Sample Test Case 
***
All the code samples in this documentation can be found in the [AngularJS LambdaTest Repository on GitHub](https://github.com/LambdaTest/angular-karma-sample). You can either download or clone the repository to quickly run your tests.

### Installing Dependencies
You need to install the following dependencies:

**Step 1:** Install npm from the official website by clicking [here](https://www.npmjs.com/). Here is the code you can run in your terminal to upgrade npm.
```bash
npm install npm@latest -g
```
**Step 2:** Next, you need to install [Angular CLI](https://angular.io/cli). Run the below command to install:
```bash
$ npm install -g @angular/cli
```

### Setting up Your Authentication

**Step 3:** Set LambdaTest username and access key in environment variables. It can be obtained from [LambdaTest Automation Dashboard](https://automation.lambdatest.com/).
 * For Linux/macOS:
 `export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"`
 * For Windows:
 `set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"`

### Setting up the Test Environment

**Step 4:** Clone the LambdaTest’s [angular-karma-sample repository](https://github.com/LambdaTest/angular-karma-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/angular-karma-sample
cd angular-karma-sample
```
**Step 5:** Install the project dependencies using the below command:
```bash
$ npm install
```

### Setting up the Test Config

**Step 6:** If you look at `karma.conf.js` file you will find that we are passing browser, browser version, and operating system information, along with LambdaTest Selenium Grid capabilities via capabilities object. The capabilities object in the above code is defined as:
```
customLaunchers: {
        chrome: {
             base: 'WebDriver',
             config: webdriverConfig,
             browserName: 'chrome',
             platform: 'windows 10',
             version: '71.0',
             name: 'Karma With Heartbeat',
             tunnel: true, // In case karma is running on local machine
             video: true, // capture video for your test
             user: process.env.LT_USERNAME,
             accessKey: process.env.LT_ACCESS_KEY,
             pseudoActivityInterval: 15000 // 15000 ms heartbeat to avoid timeouts
        }
    }
```
> You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.

### Writing your Test Cases
The example mentioned below would help you to execute your AngularJS automation testing on Google Chrome.
```
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
 
describe('workspace-project App', () => {
  let page: AppPage;
 
  beforeEach(() => {
    page = new AppPage();
  });
 
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to karma-sample!');
  });
 
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
```
## Run Your First Test
***
Navigate to the directory where you cloned the [sample of Karma-Angular](https://github.com/LambdaTest/angular-karma-sample) and run the following command.
```bash
karma start karma.conf.js
```
or you could also run the test using:
```bash
npm test
```
### Testing Locally Hosted or Privatley Hosted Projects
You can test your locally hosted or privately hosted projects with [LambdaTest Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using LambdaTest Tunnel app. All you would have to do is set up an SSH tunnel using LambdaTest Tunnel app and pass toggle `tunnel = True` via desired capabilities. LambdaTest Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [LambdaTest Tunnel documentation](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish LambdaTest Tunnel.

>Download the binary file of:
>* [LambdaTest Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [LambdaTest Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [LambdaTest Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **LambdaTest Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```bash
tunnel: true,
```
## Running Your Parallel Tests Using AngularJS
***
### Executing Parallel Tests Using AngularJS
To run parallel tests using AngularJS, we would have to execute the below commands in the terminal:

* For the above example code:
```bash
ng test
```
## Additional Links
***
* [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
* [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

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
       AngularJS with Karma and Selenium
      </span>
    </li>
  </ul>
</nav>