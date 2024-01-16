---
id: getting-started-with-flutter-dart-android-automation
title: Flutter Dart Testing On LambdaTest
sidebar_label: Flutter Dart Android
description: Now you can run your automation scripts for Flutter dart on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
- flutter
- lambdatest
- framework on lambdatest
- app testing
- real devices
url: https://www.lambdatest.com/support/docs/getting-started-with-flutter-dart-android-automation/
site_name: LambdaTest
slug: getting-started-with-flutter-dart-android-automation/
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
          "name": "Getting Started With Espresso Testing on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/getting-started-with-espresso-testing/"
        }]
      })
    }}
></script>

---

Flutter, an open-source UI toolkit created by Google, is a popular choice among developers to build natively compiled applications for mobile, web, and desktop from a single codebase. With Dart as its programming language, Flutter enables fast development of beautiful apps with a highly productive, extensible and open-source set of features.

In this guide, we will explore how to run your first Flutter Dart test on an Android device using the LambdaTest Real Device Cloud. By combining the capabilities of Flutter Dart and LambdaTest, you can ensure the proper functioning of your app across different devices and make your app more reliable and robust.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of an Flutter Test
2. Learn more about capabilities supported for Flutter Dart testing.


## Prerequisites for Getting Started

---

1. Flutter SDK installed on your system
2. You will need a LambdaTest username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/).
3. Access to an android **Sample** app (.apk) and an **Sample Test Suite** app (.apk file).

:::tip

If you do not have any **Flutter Android** app (.apk) and an **Flutter Test Suite** app (.apk) file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/sample-flutter-app.apk) and a sample :link: [Test Suite](https://prod-mobile-artefacts.lambdatest.com/assets/docs/sample-flutter-testsuite.apk).

:::

## Run Your First Test

---

### **Step 1: Upload Your Application**

Upload your **android** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/sample-flutter-app.apk"' \
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/proverbial_android.apk"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - <lt://APP123456789123456789> and will be used in the last step.

:::

### **Step 2: Uploading Test Suite**

Upload your **test suite** (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/sample-flutter-testsuite.apk"' \
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/proverbial_android_expressotest.apk"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - <lt://APP123456789123456789> and will be used in the next step.

:::

### **Step 3: Executing The Test**

#### Basic Authentication

:::info
You will need base64 encoded authentication in order to execute your Espresso automation test suite. You need to enter your username:accesskey **[here](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** in order and click on encode to generate the base64 authentication. Take note of the **base64** encoded authentication which needs to be added in the next step.
:::

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

#### Execute Command

Once you have uploaded your app and test suite, you need to you can execute your test by running the following command:

:::info
Make sure to enter your **basic authentication**, **app url** (generated in the first step) and **testSuite url** (generated in the second step) in the below command.
:::

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "lt://APP_ID",
    "testSuite": "lt://TestSuite_ID",
    "device" :  ["Galaxy S21 5G-12"],
    "testTimeout": 150, 
    "deviceLog": true,
    "network": false,
    "build" : "Sample-Flutter"
}'
```

</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="lamguage-powershell">

```
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/flutter/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"app\" : \"lt://APP_ID\",\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"],\"testTimeout\": 150,\"deviceLog\": true,\"network\": false,\"build\" : \"Sample-Flutter\"}"
```

  </CodeBlock>
</div>

</TabItem>
</Tabs>

### **Step 4: View Test Execution**

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [LambdaTest Automation](https://accounts.lambdatest.com/login).

## Capabilities Supported

---

The following capabilities are supported:

1. **app:** Enter the app id generated while uploading the app. Example:`lt://APP123456789123456789`
2. **testSuite:** Enter the test suite id generated while uploading the test suite. Example: `lt://APP123456789123456789`
3. **device:** Enter the name and os version of the device in “DeviceName-OSVersion” format. Example: `Pixel 3 XL-9` or `Galaxy S21 Ultra 5G-11`.
4. **video:** Generate video for all the tests that have run. Example: `true`.
5. **testTimeout:** Max wait time for test execution (default value - 900 secs)
6. **queueTimeout:** Enter the time in seconds after which you want your build to timeout from queue for device allocation. Example: `900`.
7. **deviceLog:** Boolean value to generate device logs. Example: `true`. 
8. **build:** Set the name of the Espresso test build. Example: `My Flutter Build`.


## Running Tests in Parallel

---

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "app_id",
    "testSuite": "testsuite_id",
    "device" :  ["Galaxy S20-10","Galaxy S20-10","Redmi Note 9-10","Galaxy S10+-10","Galaxy S7 edge-8","Galaxy S9+-8"],
    "queueTimeout": 10800,
    "deviceLog": true,
    "build" : "Sample-Flutter"
}'
```

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
      Espresso Testing </span>
    </li>
  </ul>
</nav>
