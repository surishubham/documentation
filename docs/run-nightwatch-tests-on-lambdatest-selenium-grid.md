---
id: run-nightwatch-tests-on-lambdatest-selenium-grid
title: Nightwatch Automation Testing:Run Nightwatch Tests on Online Selenium Grid | LambdaTest
hide_title: true
sidebar_label: Nightwatch
description: Run your automation scripts using Selenium with Nightwatch on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - nightwatch selenium
  - nightwatch js
  - nightwatch js selenium
  - javascript selenium
  - javascript automation testing
  - selenium webdriver javascript
  - selenium javascript testing tutorial
  - javascript selenium framework
image: /assets/images/og-images/nightwatch-automation.jpg 
url: https://www.lambdatest.com/support/docs/nightwatch-with-selenium-running-nightwatch-automation-scripts-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: nightwatch-with-selenium-running-nightwatch-automation-scripts-on-lambdatest-selenium-grid/
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
          "name": "JavaScript Nightwatch with Selenium",
          "item": "https://www.lambdatest.com/support/docs/nightwatch-with-selenium-running-nightwatch-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>

# Nightwatch with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *

In this topic, you will learn how to configure and run your JavaScript automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **JavaScript** framework **Nightwatch**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Nightwatch** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **Nightwatch** with Selenium to reduce build times.
4. Test your locally hosted pages on LambdaTest platform.
5. Explore advanced features of LambdaTest. 

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Repository on GitHub](https://github.com/LambdaTest/nightwatch-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites To Run Automation Tests With Selenium & Nightwatch Framework
* * *
Before getting started with Automated Scripts using Selenium with Nightwatch framework on LambdaTest Automation, you need to:

* Download and install **NodeJS**. You should be having **NodeJS v6** or newer. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on LambdaTest’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

**Step 1:** Clone the LambdaTest’s [nightwatch-selenium-sample repository](https://github.com/LambdaTest/nightwatch-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/nightwatch-selenium-sample
cd nightwatch-selenium-sample
```
**Step 2:** Install the required project dependencies using the command below:
```bash
npm i
```

### Setting up Your Authentication
Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

**Step 3:** Set LambdaTest `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  ```bash
  export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```
  * For **Windows**:
  ```bash
  set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```

## Run Your First Test
***
### Sample Test with NightwatchJS
Let’s check out a sample **Nightwatch** framework code running on LambdaTest Selenium Grid. This is a simple Nightwatch automation script that tests a sample to-do list app. The code marks two list items as done, adds a list item and then finally gives the total number of pending items as output.
```js
//googleTest.js

var https = require("https");
var lambdaRestClient = require("@lambdatest/node-rest-client");
var lambdaCredentials = {
  username: process.env.LT_USERNAME,
  accessKey: process.env.LT_ACCESS_KEY
};
var lambdaAutomationClient = lambdaRestClient.AutomationClient(
  lambdaCredentials
);
module.exports = {
  "@tags": ["test"],
  TodoTest: function(client) {    
    client
      .url("https://lambdatest.github.io/sample-todo-app/")
      .waitForElementPresent("body", 1000)
      .setValue("input[id=sampletodotext]", "Complete LambdaTest tutorial.")
      .click("input[id=addbutton]")
      .pause(1000)
      .end();  
 
  },
  after: function(browser) {
    console.log("Closing down...");
  },
  afterEach: function(client, done) {
    if (
      process.env.LT_USERNAME &&
      process.env.LT_ACCESS_KEY &&
      client.capabilities &&
      client.capabilities["webdriver.remote.sessionid"]
    ) {
      
      lambdaAutomationClient.updateSessionById(
        client.capabilities["webdriver.remote.sessionid"],
        { status_ind: client.currentTest.results.failed ? "failed" : "passed" },
        function(error, session) {
          console.log(error)
          if (!error) {
            client.pause(1000)
            done();
          }
        }
      );
    } else {
      console.log("Test Run Successfully!");
      client.pause(1000)
      done();
    }
  }
};
```
### Configuration of Your Test Capabilities
**Step 4:** Below is the `nightwatch.conf.js` file where we will be declaring the desired capabilities. Since we are using remote webdriver, we have to define which browser environment we want to run the test. We do that by passing browser environment details to LambdaTest Selenium Grid via desired capabilities class.

```js
//nightwatch.conf.js

module.exports = (function(settings) {
  console.log(settings["test_settings"]["default"]["username"])
  if (process.env.LT_USERNAME) {
    settings["test_settings"]["default"]["username"] = process.env.LT_USERNAME;
  }
  if (process.env.LT_ACCESS_KEY) {
    settings["test_settings"]["default"]["access_key"] = process.env.LT_ACCESS_KEY;
  }
  if (process.env.SELENIUM_HOST) {
    settings.selenium.host = process.env.SELENIUM_HOST;
  }
  if (process.env.SELENIUM_PORT) {
    settings.selenium.host = process.env.SELENIUM_PORT;
  }
  return settings;
})(require('./nightwatch.json'));
```
> You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.

### Executing the Test

**Step 5:** The tests can be executed in the terminal using the following command
```bash
npm run single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using Nightwatch Framework
***
### Executing Parallel Tests with Nightwatch

To run parallel tests using **Nightwatch**, we would have to execute the below command in the terminal:
```bash
npm run parallel
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build).

## Testing Locally Hosted or Privately Hosted Projects
***
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
```js
const capabilities = {
        tunnel: true,
}
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
       JavaScript Nightwatch with Selenium
      </span>
    </li>
  </ul>
</nav>