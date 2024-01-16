---
id: automation-testing-with-mocha-and-selenium
title: Automation Testing With Mocha And Selenium | LambdaTest
hide_title: true
sidebar_label: Mocha
description: Run your automation test scripts using Mocha and Selenium Grid cloud on 3000+ real browsers. Leverage parallel testing and test your locally hosted web pages on hundreds of mobile and desktop browsers.
keywords:
  - mocha
  - selenium
  - mocha and selenium
  - selenium javascript
  - mocha selenium test
  - automation testing
  - selenium automation
  - selenium testing
image: /assets/images/og-images/Mocha-Selenium.jpg
url: https://www.lambdatest.com/support/docs/automation-testing-with-mocha-and-selenium/
site_name: LambdaTest
slug: /automation-testing-with-mocha-and-selenium/
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
          "name": "JavaScript Mocha with Selenium",
          "item": "https://www.lambdatest.com/support/docs/automation-testing-with-mocha-and-selenium/"
        }]
      })
    }}
></script>



# Mocha with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *
In this topic, you will learn how to configure and run your JavaScript automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **JavaScript** framework **Mocha**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Mocha** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **Mocha** with Selenium to reduce build times.
4. Test your locally hosted pages on LambdaTest platform.
5. Explore advanced features of LambdaTest. 

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Repository on GitHub](https://github.com/LambdaTest/mocha-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Mocha Test Automation Scripts Using Selenium
* * *
Before getting started with Selenium automation testing on LambdaTest, you need to:
* Download and install **NodeJS** from [official NodeJS documentation](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the [official npm website](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on LambdaTest’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

**Step 1:** Clone the LambdaTest’s [mocha-selenium-sample repository](https://github.com/LambdaTest/mocha-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/mocha-selenium-sample
cd mocha-selenium-sample
```
**Step 2:** Install the required project dependencies using the command below:
```bash
npm i
npm install selenium-webdriver
```

### Setting up Your Authentication
Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

**Step 3:** Set LambdaTest `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`export LT_USERNAME= "${ YOUR_LAMBDATEST_USERNAME()}" 
export LT_ACCESS_KEY= "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

  * For **Windows**:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`set LT_USERNAME= "${ YOUR_LAMBDATEST_USERNAME()}" 
set LT_ACCESS_KEY= "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

## Run Your First Test
***
### Sample Test with MochaJS
```js
//single_test.js

var assert = require("assert"),
  webdriver = require("selenium-webdriver"),
  conf_file = process.argv[3] || "conf/single.conf.js";

var caps = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
      LT_USERNAME +
      ":" +
      LT_ACCESS_KEY +
      "@hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
};

describe("Google's Search Functionality for " + caps.browserName, function() {
  var driver;
  this.timeout(0);

  beforeEach(function(done) {
    caps.name = this.currentTest.title;
    driver = buildDriver(caps);
    done();
  });

  it("can find search results", function(done) {
    driver.get("https://www.lambdatest.com").then(function() {
      driver.getTitle().then(function(title) {
        setTimeout(function() {
          console.log(title);
          assert(
            title.match(
              "Cross Browser Testing Tools | Test Your Website on Different Browsers | LambdaTest"
            ) != null
          );
          done();
        }, 10000);
      });
    });
  });

  afterEach(function(done) {
    if (this.currentTest.isPassed()) {
      driver.executeScript("lambda-status=passed");
    } else {
      driver.executeScript("lambda-status=failed");
    }
    driver.quit().then(function() {
      done();
    });
  });
});
```
### Configuration of Your Test Capabilities
**Step 4:** In `conf/single.conf.js` file, you need to update your capabilities. In this code, we are passing browser, browser version, and operating system information, along with LambdaTest Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```js
exports.capabilities = {
        'build': 'Mocha-Selenium-Sample', //Build name
        'name': 'Your Test Name', // Test name
        'platform':'Windows 10', // OS name
        'browserName': 'chrome', // Browser name
        'version': 'latest', // Browser version
        'visual': false,  // To take step by step screenshot
        'network':false,  // To capture network Logs
        'console':false, // To capture console logs.
        'tunnel': false // If you want to run the localhost than change it to true
};
```
> You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.

### Executing the Test

**Step 5:** The tests can be executed in the terminal using the following command.
```bash
npm run single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using Mocha Framework
***
### Setting up the Parallel Environment
Here is the `parallel_test.js` file which would help you to run a single test on various browsers at the same time.
```js
//parallel_test.js

var assert = require("assert"),
  webdriver = require("selenium-webdriver"),
  conf_file = process.argv[3] || "conf/single.conf.js";

var capabilities = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
        LT_USERNAME +
        ":" +
        LT_ACCESS_KEY +
        "@hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
};

capabilities.forEach(function(caps) {
 
  describe("Google's Search Functionality for " + caps.browserName, function() {
    var driver;
    this.timeout(0);

    beforeEach(function(done) {
      caps.name = this.currentTest.title;
      driver = buildDriver(caps);
      done();
    });

    it("can find search results" + caps.browserName, function(done) {
      driver.get("https://www.lambdatest.com").then(function() {
        driver.getTitle().then(function(title) {
          setTimeout(function() {
            console.log(title);
            assert(
              title.match(
                "Cross Browser Testing Tools | Test Your Website on Different Browsers | LambdaTest"
              ) != null
            );
            done();
          }, 10000);
        });
      });
    });

    afterEach(function(done) {
      if (this.currentTest.isPassed()) {
        driver.executeScript("lambda-status=passed");
      } else {
        driver.executeScript("lambda-status=failed");
      }
      driver.quit().then(function() {
        done();
      });
    });
  });
});
```
### Executing Parallel Tests using Mocha

To run parallel tests using **Mocha**, we would have to execute the below command in the terminal:
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
       JavaScript Mocha with Selenium
      </span>
    </li>
  </ul>
</nav>