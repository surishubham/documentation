---
id: appium-php-behat
title: Behat With Appium
sidebar_label: Behat
description: Now you can run your automation scripts using Appium with PHP Behat on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - appium
  - php
  - lambdatest php
  - framework on lambdatest
  - Behat
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/appium-php-behat/
site_name: LambdaTest
slug: appium-php-behat/
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
          "name": "PHP With Appium",
          "item": "https://www.lambdatest.com/support/docs/appium-php-behat/"
        }]
      })
    }}
></script>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Tutorial To Run Your First Test On LambdaTest

---

In this topic, you will learn how to configure and run your **PHP Behat** automation testing scripts with **Appium** on **LambdaTest Real Device Cloud platform**.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of **PHP Behat** for application testing with **Appium** on **LambdaTest**.
2. Learn more about Desired Capabilities for Appium testing.
3. Explore advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/LT-appium-php-behat" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you begin automation testing with Appium, you would need to follow these steps:

<details>

<summary id="summary_2"> <strong>Install PHP (latest)</strong> </summary>

Download and install the latest version of PHP in your system.

<Tabs className="docs__val">

<TabItem value="phpmac" label="MacOS" default>

Previous versions of **MacOS** have **PHP** installed by default. But for the latest **MacOS** versions starting with **Monterey**, **PHP** has to be downloaded and installed manually by using below commands:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install php
```
</TabItem>

<TabItem value="phplinux" label="Linux" default>

```bash
sudo apt-get install curl libcurl3 libcurl3-dev php
```
</TabItem>

<TabItem value="phpwindows" label="Windows" default>

For **Windows**, you can download **PHP** from [here](http://windows.php.net/download/). Also, refer to this [documentation](http://php.net/manual/en/install.windows.php) for ensuring the accessibility of PHP through Command Prompt(cmd).

Please add PHP to Windows System Variables Path.
</TabItem>
</Tabs>
</details>

<details>

<summary id="summary_2"> <strong>Download Composer in the project directory</strong>
</summary>

1. Download **composer** in the project directory from here ([Linux/MacOS](https://getcomposer.org/download/), [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)).

:::tip note

To use the **composer** command directly, it should have been downloaded in the project directory. In windows the composer gets installed in different directory. So, copy the 'composer.phar' to the project directory using copy command:

```bash
copy C:\ProgramData\ComposerSetup\bin\composer.phar
```

:::

2. Install the composer dependencies in the current project directory using the command below:

```php
composer update
php composer.phar require phpwhois/phpwhois
php composer.phar install
php composer.phar require php-webdriver/webdriver
php composer.phar require behat/behat
```

In case of any error, please try restarting.

</details>

## Run Your First Test

---

### 1. Upload your application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**
 <div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""
`}
</CodeBlock>
</div>

**Using App URL:**

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"
`}
</CodeBlock>
</div>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - <lt://APP123456789123456789> and will be used in the next step.

:::

### 2. Clone The Sample Project

Clone the LambdaTest’s :link: [LT-appium-php](https://github.com/LambdaTest/LT-appium-php) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-php-behat
cd LT-appium-php-behat
```

### 3. Set Up Your Authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://appautomation.lambdatest.com/). Set LambdaTest `Username` and `Access Key` in environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

### 4. Write your automation script

An automation script for the sample application available above has been provided here.


```php title="FeatureContext.php"
<?php

require "vendor/autoload.php";

class FeatureContext extends LambdaContext {
    /**
     * @Given I am on the proverbial home page
     */
    public function iAmOnTheProverbialHomePage()
    {
      echo "I am on the proverbial home page";

    }

    /**
     * @When I click on color
     */
    public function iClickOnColor()
    {
      $element = self::$driver->findElement(WebDriverBy::id("color"));
      $element->click();
    }

    /**
     * @When I click on text element
     */
    public function iClickOnTextElement()
    {
      $element = self::$driver->findElement(WebDriverBy::id("Text"));
      $element->click();
    }

    /**
     * @When I click on notification element
     */
    public function iClickOnNotificationElement()
    {
      $element = self::$driver->findElement(WebDriverBy::id("notification"));
      $element->click();
    }

    /**
     * @Then I click on toast element
     */
    public function iClickOnToastElement()
    {
      $element = self::$driver->findElement(WebDriverBy::id("toast"));
      $element->click();
    }
}
```

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests. The capabilities object in the sample code are defined as:

<Tabs className="docs__val">

<TabItem value="ios-config" label="iOS" default>

```php title="iossingle.conf.yml"
user: "YOUR USERNAME HERE"       #Add LambdaTest username here 
key: "YOUR ACCESS KEY HERE"      #Add LambdaTest accessKey here
    capabilities:
        build: "behat-appium-ios"
        name: "single-behat-test"
        isRealMobile: true
        app: "lt://proverbial-ios"    #Add app url here
    environments:
        -
        deviceName: iPhone 11
        platform: ios
        platformVersion: 14
```

</TabItem>
<TabItem value="android-config" label="Android" default>

```php title="androidsingle.conf.yml"
user: "YOUR USERNAME HERE"       #Add LambdaTest username here 
key: "YOUR ACCESS KEY HERE"      #Add LambdaTest accessKey here
    capabilities:
        build: "behat-appium-android"
        name: "single-behat-test"
        isRealMobile: true
        app: "lt://proverbial-android"   #Add your app url here
    environments:
        -
        deviceName: Galaxy S21 Ultra 5G
        platform: Android
        platformVersion: 11
```

</TabItem>

</Tabs>

:::info Note

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)**. For more details, please refer to our guide on [Desired Capabilities in Appium](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

:::

### Executing your test

Execute the following command to run your test on LambdaTest platform:

<Tabs className="docs__val">

<TabItem value="ios" label="iOS" default>

```php
composer iossingle   #for single tests
composer iosparallel  #for parallel tests
```

</TabItem>

<TabItem value="android" label="Android" default>

```php
composer androidsingle   #for single tests
composer androidparallel  #for parallel tests
```

</TabItem>

</Tabs>

:::info
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the :link: [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build).
:::

## Additional Links

---

- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/)
- [How to integrate LambdaTest with CI/CD](https://www.lambdatest.com/support/docs/integrations-with-ci-cd-tools/)

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
      Behat With Appium</span>
    </li>
  </ul>
</nav>
