---
id: robot-with-selenium-running-robot-automation-scripts-on-lambdatest-selenium-grid
title: Robot Framework Selenium:Run Automation Scripts on Selenium Grid Cloud
hide_title: true
sidebar_label: Robot
description: Now you can run your automation scripts using Selenium with Robot on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - robot
  - robot selenium
  - python selenium
  - robot automation testing
  - selenium webdriver robot
  - selenium python testing tutorial
  - python selenium framework
  - lambdatest python
  - framework on lambdatest

url: https://www.lambdatest.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: robot-with-selenium-running-robot-automation-scripts-on-lambdatest-selenium-grid/
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
          "name": "Robot Selenium :Run Automation Scripts on Selenium Grid using Robot Testing Framework",
          "item": "https://www.lambdatest.com/support/docs/robot-with-selenium-running-robot-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>

# Robot with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *

In this topic, you will learn how to configure and run your Python automation testing scripts on [LambdaTest Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) using **Python** framework **Robot**. 

## Objective
***

By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Robot** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on LambdaTest platform.
4. Explore advanced features of LambdaTest.

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Repository on GitHub](https://github.com/LambdaTest/Robot-Selenium-Sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Robot Selenium Tests
* * *
Before you can start performing Python automation testing using Robot, you would need to:

* Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
* Make sure **pip** is installed in your system. You can install **pip** from [official pip documentation](https://pip.pypa.io/en/stable/installation/).
* Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of **Selenium Client** and **WebDriver** are ideal for running your automation script on LambdaTest Selenium cloud grid.
* Install **virtualenv** which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.
```bash
pip install virtualenv
```
### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone the LambdaTest’s [Robot-Selenium-Sample repository](https://github.com/LambdaTest/Robot-Selenium-Sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/Robot-Selenium-Sample
cd Robot-Selenium-Sample
```
**Step 2:** Create a virtual environment in your project folder the environment name is arbitrary.
```bash
virtualenv venv
```
**Step 3:** Activate the environment.
```bash
source venv/bin/activate
```
**Step 4:** Install the [required packages](https://github.com/LambdaTest/Robot-Selenium-Sample/blob/master/requirements.txt) from the cloned project directory:
```bash
pip install -r requirements.txt
```
### Setting up Your Authentication
Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

**Step 5:** Set LambdaTest `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`export LT_USERNAME= ${ YOUR_LAMBDATEST_USERNAME()}
export LT_ACCESS_KEY= ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

  * For **Windows**:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`set LT_USERNAME= ${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY= ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

## Run Your First Test
***
### Sample Test Case
Here is `common.robot` file to setup mandatory details to run at LambdaTest.
```python
*** Settings ***
Library  Selenium2Library
 
*** Variables ***
 
@{_tmp}
    ...  browserName: %{browserName},
    ...  platform: %{platform},
    ...  version: %{version},
    ...  name: RobotFramework Lambda Test
 
${BROWSER}          %{ROBOT_BROWSER}
${CAPABILITIES}     ${EMPTY.join(${_tmp})}
${KEY}              <YOUR_LAMBDATEST_USERNAME>:<YOUR LAMBDATEST ACCESS KEY>
${REMOTE_URL}       https://${KEY}@hub.lambdatest.com/wd/hub
 
 
*** Keywords ***
 
Open test browser
    Open browser  https://lambdatest.github.io/sample-todo-app/  browser=${BROWSER}
    ...  remote_url=${REMOTE_URL}
    ...  desired_capabilities=${CAPABILITIES}
 
Close test browser
    Close all browsers
```
> You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.

### Executing the Test 

**Step 6:** Please execute the command below to run your tests:
```bash
make test_Windows_10_chrome_latest
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on LambdaTest automation dashboard. [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using Robot Framework 
***
### Executing Parallel Tests Using Robot
To run parallel tests using Robot, we would have to execute the below commands in the terminal:
```bash
make run_all_in_parallel
```
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
```bash
"tunnel" = true
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
      Robot Automation Testing  </span>
    </li>
  </ul>
</nav>