---
id: selenified-integration-with-lambdatest
title: How to integrate selenified with LambdaTest
hide_title: true
sidebar_label: Selenified Integration
description: With LambdaTest integration to Selenified, you can perform cross browser testing in parallel on more than 2000 real browsers available at an online Selenium Grid offered by LambdaTest. So you don’t have to worry about configuring an in-house testing infrastructure as LambdaTest will take care of that for you.
keywords:
  - selenified integration
  - selenified
  - selenium integration
  - Selenium Grid
url: https://www.lambdatest.com/support/docs/selenified-integration-with-lambdatest/
site_name: LambdaTest
slug: selenified-integration-with-lambdatest/
--- 
# Selenified Integration With LambdaTest
Previously known as SecureCI™ Testing Framework, Selenified is an open-source test automation framework as a wrapper to Selenium with extra features such as detailed **traceable reporting**, **custom reporting**, ability to invoke **dynamic waits**, etc. so you could test your web-application across the web and even API level. The framework is built on top of TestNG, making it intuitive for beginners and offers support with multiple build tools such as Maven, Gradle, and Ant, making it easier to integrate with your DevOps build environments.

With LambdaTest integration to Selenified, you can perform cross browser testing in parallel on more than 2000 real browsers available at an online Selenium Grid offered by LambdaTest. So you don't have to worry about configuring an in-house testing infrastructure as LambdaTest will take care of that for you.

## Prerequisites
-----------------------------------------------------------------------------------------------------------------------------
* Basic understanding of running tests from Selenified. If you haven't run a Selenified test before, you can refer to their [official GitHub repository][1].
* LambdaTest Hub URL
* **LambdaTest Authentication Credentials**   
You will need your LambdaTest authentication credentials i.e., your LambdaTest username, access key, and HubURL. You need to set them up as your environment variables. You can retrieve them from your **[LambdaTest automation dashboard][2]** by clicking on the key icon near the help button.

   * For Linux/Mac:  

        ```
        $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
        $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
        ```

    * For Windows: 
        ```
        $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
        $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
        ```
## Running Selenified Tests On LambdaTest Cloud Grid
-----------------------------------------------------------------------------------------------------------------------------
You can run your Selenified test cases on a cloud-based Selenium Grid, such as LambdaTest, by declaring any of the two aspects into your test automation script.

1. Feeding a remote Hub URL.
2. Configuring authentication credentials as the environment variables.

### Hub URL
-----------------------------------------------------------------------------------------------------------------------------
By default, your Selenified tests would be executed over a standalone server. To run your tests using a remote server for LambdaTest Selenium Grid, you will need to provide your LambdaTest HubURL.

```
-Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com
```

>**Note:** If required, you can also declare extra parameters such as a particular port or IP.

### Authentication Credentials
***
You can also run your Selenified test automation scripts on LambdaTest Selenium Grid by simply declaring your LambdaTest authentication credentials as the environment variables in your Selenified test automation script.


>**Note:** LambdaTest clubs your test cases under a group and assigns them under a build. If you wish to override the build name, then you can do so by invoking the `buildName` parameter in your Selenified script.

```
-Dhub=https://LT_USERNAME:LT_ACCESS_KEY@hub.lambdatest.com
```

That is all you need to tweak to run your Selenified tests on LambdaTest Selenium Grid. In case you have any questions, feel free to share them with us in the comments or wave them to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 in-app customer chat support**</span>. You could also email us through [support@lambdatest.com][3]. Happy testing! 🙂

[1]: https://github.com/Coveros/selenified
[2]: https://automation.lambdatest.com
[3]: mailto:support%40lambdatest.com

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/docs/getting-started-with-lambdatest-automation/">Automation Testing</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Selenified Integration With LambdaTest</span>
    </li>
  </ul>
</nav>
  