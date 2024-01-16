---
id: npm-plugin-for-testcafe-integration-with-lambdatest
title: npm Plugin For TestCafe Integration With LambdaTest | LambdaTest
hide_title: true
sidebar_label: npm Plugin For TestCafe
description: LambdaTest with an npm plugin would allow you to integrate TestCafe with your LambdaTest account. That way, you can expand your test coverage using LambdaTest Selenium Grid of 3000+ real browsers, and browser versions running across various operating systems for mobile, desktop, and tablets. Similar to TestCafe, LambdaTest Selenium Grid also allows you to perform parallel testing.
keywords:
  - testcafe
  - testcafe integration
  - node.js
  - cross browser testing
  - developer tools
  - npm package
image: /assets/images/og-images/npm-testcafe-integration.jpg
url: https://www.lambdatest.com/support/docs/npm-plugin-for-testcafe-integration-with-lambdatest/
site_name: LambdaTest
slug: npm-plugin-for-testcafe-integration-with-lambdatest/
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
          "name": "npm Plugin Testcafe",
          "item": "https://www.lambdatest.com/support/docs/npm-plugin-for-testcafe-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# npm Plugin For TestCafe Integration With LambdaTest

***
TestCafe offers a comprehensive and extensive platform to perform end-to-end tests for node.js applications. It supports both JavaScript and Typescript so that you can write tests in either one of the two. With TestCafe, you can create stable tests that are easy to integrate with your continuous integration process. You can also execute multiple test cases in parallel.

LambdaTest, a cloud-based, cross browser testing platform, is out with an npm plugin that would allow you to integrate TestCafe with your LambdaTest account. That way, you can expand your test coverage using LambdaTest [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) on 3000+ real browsers and browser versions running across various operating systems for mobile, desktop, and tablets. Similar to TestCafe, LambdaTest Selenium Grid also allows you to perform parallel testing.

## Prerequisites
***

>**Important:** Visit LambdaTest [npm package for TestCafe](https://www.npmjs.com/package/testcafe-browser-provider-lambdatest).

* Add the dependency `"testcafe": "<testcafe_version>"` in the package.json file.

* Make sure you have your [TestCafe Credentials][1].

   * For Linux/Mac:  

        ``` js
        $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
        $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
        ```

    * For Windows: 
        ``` js
        $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
        $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
        ```




## Install LambdaTest npm Plugin For TestCafe
-----------------------------------------------------------------------------------------------------------------------------
Use the below command for installing the npm plugin to integrate LambdaTest with TestCafe.

``` js
npm install testcafe-browser-provider-lambdatest
```

## How To Use npm Plugin For LambdaTest & TestCafe Integration?
-----------------------------------------------------------------------------------------------------------------------------
To acknowledge all available browsers aliases offered by LambdaTest Selenium Grid, type the below command:

``` js
testcafe -b lambdatest
```

To execute the test from cmd/terminal by declaring the browsers and operating systems to test:

``` js
$ testcafe "lambdatest:Chrome@74.0:Windows 8" 'path/to/test/file.js'
```


For Parallel testing:

``` js
$ testcafe "lambdatest:Chrome@74.0:Windows 8","lambdatest:Chrome@75.0:Windows 10" "path/to/test/file.js"
```


If you are using API, then you need to declare the aliases inside your `browser()` method:

``` js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('lambdatest:Chrome@74.0:Windows 8')
    .run();
```

## Additional Configuration Parameters
-----------------------------------------------------------------------------------------------------------------------------
>**Note**: TestCafe integration with LambdaTest does not support Geolocation testing.

In case you wish to make some additional configurations to your automation test scripts, then you can incorporate the below variables:

| VARIABLE            | DESCRIPTION                                                                                                                                                                                                                                                                          |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LT_TEST_NAME        | To specify a name to your test on LambdaTest Selenium Grid.                                                                                                                                                                                                                          |
| LT_BUILD            | To specify a name to your build on LambdaTest Selenium Grid.                                                                                                                                                                                                                         |
| LT_CAPABILITY_PATH  | To specify the path of a JSON file that declares additional Desired Capabilities. <br/> `     "Chrome@63.0:Windows 8.1" : {`             <br/>`"network" : true,`         <br/>`"visual" : true,`         <br/>`"timezone" : "UTC+11:00"`     <br/>`}`  <br/>Here, ``Chrome@63.0:Windows 8.1`` represents browser alias. |
| LT_RESOLUTION       | To perform cross browser testing on a specific screen resolution in the ${width}x${height} format.                                                                                                                                                                                   |
| LT_LOGFILE          | Presents detailed logs of your automation script execution. Provide a specific path to this file. If you won’t provide a path, then the logs would be saved in your present working directory by the filename: tunnel.log.                                                            |
| LT_VERBOSE          | Set flag for verbose to either true or false.                                                                                                                                                                                                                                         |
| LT_PROXY_HOST       | A mandatory variable if you wish to perform cross browser testing through proxy. This variable is where you need to declare the hostname/IP of proxy.                                                                                                                                |
| LT_PROXY_PORT       | Port of the proxy. Default value for proxy port would be 3128.                                                                                                                                                                                                                       |
| LT_PROXY_USER       | Username for connecting to proxy, mandatory value for using ‘proxypass’.                                                                                                                                                                                                             |
| LT_PROXY_PASS       | Password for the USERNAME option.                                                                                                                                                                                                                                                    |
| LT_TUNNEL_NAME      | Human readable tunnel identifier (Name of the tunnel)..                                                                                                                                                                                                                               |
| LT_DIR              | Path of the local folder you want to test.                                                                                                                                                                                                                                           |
| LT_SELENIUM_VERSION | Browser specific capability.                                                                                                                                                                                                                                                          |
| LT_CONSOLE          | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_NETWORK          | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_VIDEO            | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_SCREENSHOT       | Set flag as true or false.                                                                                                                                                                                                                                                           |
| LT_TIMEZONE         | Configure tests to run on a custom time zone.                                                                                                                                                                                                                                        |
| LT_TUNNEL_NUMBER       |  Number of tunnels to be spawned at a time.                                                                                                                                                                                                                                                           |
| LOAD_BALANCED_MODE       | Load Balanced Mode in Testcafe                                                                                                                                                                                                                                                         |



## Example
***
``` js
export LT_RESOLUTION="1920x1080"
export LT_TEST_NAME="Test TestCafe"
export LT_BUILD="Build x"
export LT_TUNNEL_NUMBER=2
export LOAD_BALANCED_MODE=true
testcafe "lambdatest:Chrome","lambdatest:Chrome@74.0:Windows 8" tests/
```

[1]: https://bitbucket.org/dashboard/overview

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href="https://www.lambdatest.com/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">npm Plugin Testcafe</span>
    </li>
  </ul>
</nav>
