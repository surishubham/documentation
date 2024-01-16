---
id: gitlab-ci-integration
title: GitLab CI Integration
hide_title: true
sidebar_label: Gitlab CI Integration
description: Integrate GitLab CI seamlessly with LambdaTest for efficient and automated testing, supported by step-by-step guides and detailed support doc.
keywords:
  - lambdatest integrations
  - lambdatest integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.lambdatest.com/support/docs/gitlab-ci-integration-with-lambdatest/
site_name: LambdaTest
slug: gitlab-ci-integration-with-lambdatest/
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
          "name": "GitLab CI Integration",
          "item": "https://www.lambdatest.com/support/docs/gitlab-ci-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# GitLab CI Integration
* * *
GitLab is one of the finest tools which facilitates continuous integration for Git projects from small to enterprise level clients. Now, deploy your code rapidly and test it thoroughly for a robust delivery in your go-to-market launch.

LambdaTest now integrates with GitLab CI to boost your go-to-market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines, on our cloud servers. Perform automation testing in parallel with LambdaTest’s Selenium grid to drastically trim down your test cycles.

This topic will demonstrate how you can leverage LambdaTest Integration with GitLab CI. We will be running our automation script using the Protractor framework.

## Prerequisites For Integrating GitLab CI With Our Online Selenium Grid
* * *
In order to perform your protractor tests with LambdaTest, you would need the below things to be already set up.

1. **Global Dependencies**

* A Git or GitHub repository.
* Download and install node.js and node package manager or npm.
* To install node.js with homebrew use the command below.

```
$ brew install node
```

* If you have npm already installed, you may want to upgrade it to latest version. Here the code you can run in your terminal to upgrade npm.
* Upgrade npm to latest version using the below command.

```
npm install npm@latest –g
```

* Install protractor using npm with the below command.

```
npm install –g protractor
```

2. **LambdaTest Authentication Credential**

Be aware of your LambdaTest authentication credentials i.e. your LambdaTest username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your LambdaTest automation dashboard by clicking on the key icon near the help button.

* **For Linux/Mac**

```
$ export LT_USERNAME=<YOUR_LAMBDATEST_USERNAME> 
$ export LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
```

* **For Windows**

```
$ set LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
$ set LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
```

## Integrating LambdaTest With GitLab CI
* * *
To integrate GitLab CI with LambdaTest you need to make minor tweaks in the .gitlab-ci.yml which is the configuration file for your GitLab CI instance. The changes you need to make will revolve around the environment variables such as access key, username, grid config and so on.

Below is a sample config file for integrating GitLab CI with LambdaTest. You can use the sample file to test your own automation test suite by replacing the environment variables according to your need. All the code used for the demonstration of this topic can be find in our [GitHub repository](https://github.com/LambdaTest/protractor-selenium-sample-gitlab).

```
//Sample Configuration For GitLab CI

# Choose language and version
image: node:7.10

# setup required installers
before_script:
  - |
    cd ~/protractor-selenium-sample-gitlab
    echo 'export LT_USERNAME="{your_lambdatest_username}"' >> ~/.bashrc
    echo 'export LT_ACCESS_KEY="{your_lambda_access_key}"' >> ~/.bashrc
    npm install
    npm install -g protractor
  
job:
  script:
    #Running test!
    protractor single.conf.js
```

LambdaTest offers a [Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to fetch coded values for your desired test configurations. For Instance, if you select the below configurations:

| FIELDS | SELECTED VALUES |
| ------- | -------------- |
| Operating System | Windows 8.1 |
| Browser | Mozilla Firefox |
| Browser Version | 62.0 |
| Resolution | 1280×1024 |
| Selenium Version | 3.11.0 |

Then Capabilities Generator at LambdaTest will provide you with the below program:

```
// Basic Test Configurations For JavaScript

var capabilities = {
    "build" : "your build name", //You can edit this and assign a build name
    "name" : "your test name", // Assign a name to your Test
    "platform" : "Windows 8.1", // The operating system on which you want to test your website
    "browserName" : "Firefox", // The browser on which you want to test
    "version" : "62.0", // The browser version which you've selected to perform the test upon
    "resolution" : "1280x1024", // The resolution in which you want to run the test as per your operating system
    "selenium_version" : "3.11.0", //The version of Selenium on which the test will run
    "visual" : true,
    "firefox.driver" : v0.21.0
}
```

> For more information, refer to our documentation on Selenium Automation Capabilities.

## Testing Locally Hosted or Privately Hosted Projects
* * *
To help you perform cross browser testing of your locally stored web pages, LambdaTest provides an SSH(Secure Shell) tunnel connection with the name Lambda Tunnel. With Lambda Tunnel, you can execute a test server inside your GitLab CI build a container to perform automated cross browser testing on browsers offered by Selenium grid on LambdaTest. So you make sure how well your changes look, even before your customers.
Curious to know more about Lambda Tunnel?

>Follow our documentation on Lambda Tunnel to know it all. OS-specific instructions to download and set up tunnel binary are at the following links.
>
>- [Documentation For Windows User](/docs/local-testing-for-windows/)
>- [Documentation For Mac User](/docs/local-testing-for-macos/)
>- [Documentation For Linux User](/docs/local-testing-for-linux/)

>**Download the binary file of:**
>
>- [Lambda Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
>- [Lambda Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
>- [Lambda Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

The below example of **.gitlab-ci.yml** file would demonstrate you on how to leverage LambdaTest’s Selenium grid by performing a browser test through your testing server contained in your GitLab CI build.

```
// Example of .gitlab-ci.yml for Lambda Tunnel

image: node:7.10

before_script:
  - |
    cd /builds/qarachit/protractor-selenium-sample-gitlab
    wget https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip
    #Extracting tunnel binary
    sudo apt-get install unzip
    unzip LT_Linux.zip
    #Executing tunnel library
    ./LT -user ${LAMBDATEST_EMAIL} -key ${LAMBDATEST_KEY} &
    sleep 30
    #Installing Dependencies
    echo 'export LT_USERNAME="{your_lambdatest_username}"' >> ~/.bashrc
    echo 'export LT_ACCESS_KEY="{your_lambda_access_key}"' >> ~/.bashrc
    npm install
    npm install -g protractor
  
job:
  script:
    #Running Test!
    protractor single.conf.js
```

Once, the tunnel is successfully set up. You can add the below code to your capabilities for testing internal servers on your network.

```
"desiredCapabilities": {
        "tunnel":true
      }		
```

## Parallel Testing
* * *
Parallel Testing is one of the most demanding features of LambdaTest Selenium Grid. By parallel testing, you can run more than one test case, simultaneously. This means that Parallel testing would allow you to execute numerous automation test cases altogether. So you execute a single test scenario across different browsers or could run different test scenarios across the same browser but with different browser versions.

```
protractor parallel.conf.js
```

Monitor and analyze your test result on the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/).

Deploy your code in a reliable manner at scale using GitLab CI integration with LambdaTest, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

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
        GitLab CI Integration
      </span>
    </li>
  </ul>
</nav>