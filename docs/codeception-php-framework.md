---
id: codeception-php-framework
title: Codeception Framework Integration to Run Codeception Selenium Tests on Online Grid
hide_title: true
sidebar_label: Codeception
description: Using Codeception selenium framework with LambdaTest, you can execute automated cross browser testing across 3000+ browsers through our on-cloud Selenium Grid.
keywords:
  - codeception
  - codeception selenium    
  - php selenium
  - php automation testing
  - selenium webdriver php
  - selenium php testing tutorial
  - php selenium framework
  - selenium
  - selenium automation testing
  - selenium testing tool
  - selenium testing tutorial
image: /assets/images/og-images/Codeception-Integration-With-LambdaTest.jpg
url: https://www.lambdatest.com/support/docs/codeception-integration-with-lambdatest/
site_name: LambdaTest
slug: codeception-integration-with-lambdatest/
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
          "name": "Codeception Test",
          "item": "https://www.lambdatest.com/support/docs/codeception-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# Codeception with Selenium: Tutorial to Run Your First Test on LambdaTest
***

In this topic, you will learn how to configure and run your PHP automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **PHP** framework **Codeception**.

## Objective
***

By the end of this topic, you will be able to:

1. Set up an environment for testing your locally hosted web pages using **Codeception** automation testing.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on LambdaTest platform.
4. Explore advanced features of LambdaTest.

>**Note:** All the code samples in this documentation can be found in the [Codeception LambdaTest Repository on  GitHub](https://github.com/LambdaTest/codeception-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Codeception With Selenium
***
Before you begin automation testing with Selenium and Codeception, you would need to:

* Make sure that you have the latest **PHP** installed on your system. You can download and install **PHP** using following commands in the terminal:

  * **MacOS:** Previous versions of **MacOS** have **PHP** installed by default. But for the latest **MacOS** versions starting with **Monterey**, **PHP** has to be downloaded and installed manually by using below commands: 
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  brew install php
  ```
    * **Windows:** 
  ```bash
  sudo apt-get install curl libcurl3 libcurl3-dev php
  ```
  **Note:** For **Windows**, you can download **PHP** from [here](http://windows.php.net/download/). Also, refer to this [documentation](http://php.net/manual/en/install.windows.php) for ensuring the accessibility of PHP through Command Prompt(cmd).

* Download **composer** in the project directory ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

  **Note:** To use the **composer** command directly, it either should have been downloaded in the project directory or should be accessible globally which can be done by the command below:
  ```bash
  mv composer.phar /usr/local/bin/composer
  ```

### Installing Selenium Dependencies and Tutorial Repo
**Step 1:** Clone the LambdaTest’s [codeception-selenium-sample repository](https://github.com/LambdaTest/codeception-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/codeception-selenium-sample
cd codeception-selenium-sample
```
**Step 2:** Install the composer dependencies in the current project directory using the command below:
```bash
composer install
```

### Setting Up Your Authentication
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
### Sample Test with Codeception

Below is a sample acceptance test through PHP.

```php
<?php
class FirstCest
    {
        public function frontpageWorks(AcceptanceTester $I)
        {
            sleep(5);
            $I->amOnPage('/sample-todo-app');
            sleep(2);
            $I->checkOption('/html/body/div/div/div/ul/li[4]/input');
            sleep(2);
            $I->checkOption('/html/body/div/div/div/ul/li[5]/input');
        }
    }
```
### Configuration of Your Test Capabilities
**Step 4:** In the test script, you need to update your test capabilities. Notice the declaration of class name **“AcceptanceTester”**. We used this class to specify test configuration, port number, browser name, browser version and other desired capabilities.

```php
# Codeception Test Suite Configuration
#
# Suite for acceptance tests.
# Perform tests in browser using the WebDriver or PhpBrowser.
# If you need both WebDriver and PHPBrowser tests - create a separate suite.
  
class_name: AcceptanceTester
modules:
    enabled:
        - WebDriver:
            url: 'https://lambdatest.github.io/sample-todo-app/'
            host: '{username}:{token}@hub.lambdatest.com' #provide your LambdaTest credentials
            port: 80
            browser: chrome
             
            capabilities:
            name: 'Codeception Example'
            build: '1.0'   
            browserName: 'Chrome' # request the latest version of chrome
            platform: 'ANY'
            version: '71.0'
            tunnel: false # sets tunnel value to true for routing traffic through your local machine
```
> **Note:** You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**.

### Executing the Test
**Step 5:** The tests can be executed in the terminal using the following command:
```bash
./vendor/bin/codecept run --steps
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

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
LT --user {user’s login email} --key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT --user lambdatest@example.com --key 123456
```
Once you are able to connect **LambdaTest Tunnel** successfully, you would just have to pass on to set the tunnel value to true by adding the following line in your config files:
**Tunnel Capabilities**

```php
tunnel: true
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
        Codeception Test
      </span>
    </li>
  </ul>
</nav>