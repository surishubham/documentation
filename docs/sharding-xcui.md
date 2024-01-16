---
id: sharding-xcui
title: Sharding for XCUI
sidebar_label: Sharding for XCUI
description: This document will cover how to execute XCUI Tests on real devices with HyperExecute. Before starting, please make sure you have App Automation and HyperExecute Cloud plans on your account.
keywords:
  - sharding
  - XCUIT
  - appium
  - real devices
  - lambdatest cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.lambdatest.com/support/docs/sharding-rd-hyperexec/
site_name: LambdaTest
slug: sharding-rd-hyperexec/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Sharding in XCUIT",
          "item": "https://www.lambdatest.com/support/docs/sharding-rd-hyperexec/"
        }]
      })
    }}
></script>


Generally the XCUI tests are run in sequence which is a time taking process. This document explains how you can speed up this process by splitting the tests into **shards**. We can divide the various tests into shards which can run parallelly and save time while running various XCUI tests. 

This document will cover how to execute **XCUI Tests** on real devices with **HyperExecute**. HyperExecute is a smart test orchestration platform to run end-to-end tests at the fastest speed possible. HyperExecute is configured using a YAML file.

:::tip Note
You can learn more about the HyperExecute portal and UI by going through our [Guided Walkthrough](/support/docs/hyperexecute-guided-walkthrough/) page. It contains all the relevant information that you need to optimise your testing process with HyperExecute. 
:::

## Objectives

---

By the end of this topic, you will be able to:
1. Speed up your XCUI tests with sharding
2. Learn more about HyperExecute
3. Explore advanced features of LambdaTest

## Pre-requisites

---

Before you start performing your App automation testing with XCUI, please make sure:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials at the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Make sure you have App Automation and HyperExecute Cloud plans on your account.

## Uploading your App & Test suite

### Step 1: Upload Your Application

Upload your **iOS** application (.ipa file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format ```Username:AccessKey``` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request.

Here is an example cURL request to upload your app using our REST API:


**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial.ipa"' \\
--form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"/Users/macuser/Downloads/proverbial.ipa"" -F "type="xcuit-ios""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - `APP123456789123456789` and will be used in the last step as `appId`.

:::

### Step 2: Uploading Test Suite

Upload your **test suite** (.ipa file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_ios_xcuitest.ipa"' \
--form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/proverbial_ios_xcuitest.ipa"" --form "type=\"xcuit-ios\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - `APP123456789123456789` and will be used in the next step as ``testSuiteAppId``

:::
## How to use Sharding

---

1. Firstly, create a folder on your local.
2. Download the HyperExecute CLI file and put it under this folder. You may download HyperExecute CLI from either of the following ways:
- Download it from our HyperExecute documentation page [here](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/), or
- "Get Started" through HyperExecute [onboarding](https://hyperexecute.lambdatest.com/quickstart) and download the CLI.
3. Refer to the sample `.ipa` files and `.yaml` file given below. Put all of them under this folder.
- [ProverbialTest.ipa](https://prod-mobile-artefacts.lambdatest.com/assets/docs/ProverbialTest.ipa)
- [LambdaUiKitIOS.ipa](https://prod-mobile-artefacts.lambdatest.com/assets/docs/LambdaUiKitIOS.ipa) 

Refer to the sample `.yaml` file here

```bash title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: ios
autosplit: true
maxRetries: 2
retryOnFailure: true

framework:
  name: "ios/xcui"
  args:
    buildName: "XCUIT"
    video: true
    networkLog: true
    deviceLog: true
    
    # You can use either the appId (APP1234567) or provide the path of the application using appPath.

    #highlight-next-line
    appPath: LambdaUiKitIOS.ipa
    # We have used the appPath here instead of appId

    # You can use either the APP ID (APP1234567) or provide the path of the application.

    #highlight-next-line
    testSuiteAppId: lt://APP10160202521675167637685231
    # We have used the testSuiteAppID here instead of testSuitePath

    deviceSelectionStrategy: all
    devices: ["iPhone 12 Pro-14", "iPad Air (2019)-16", "Galaxy Note10+-11", "Galaxy Note20 Ultra 5G-11"]

    shards:
      mappings:
      - name: shard1
        strategy: "only-testing/skip-testing"
        values: ["<className>/<className/testName>"]
     - name: shard2
       strategy: "only-testing/skip-testing"
       values: [""<className>/<className/testName>"", ""<className>/<className/testName>""]
```

:::tip When shards are added

If you are using the `deviceSelectorStrategy: all`, then in that case all the mentioned shards will be executed on all the devices.<br/>
**For example:** There are 2 shards and 2 devices mentioned, then the 2 shards will be executed on 2 devices (2 Shards * 2 Devices).

If you are using the `deviceSelectorStrategy: any`, then in that case all the mentioned shards will be executed on any one device from the list provided.<br/>
**For example:** There are 2 shards and 2 devices mentioned, then the 2 shards will be executed on any device (2 shards * any device mentioned).

:::

:::caution When shards aren't added

If you are using the `deviceSelectorStrategy: all`, then in that case all the tests will be executed on all the devices based on the concurrency. <br/>
**For example:** There are 6 tests and 10 devices mentioned, then the 6 tests will be auto distributed on the devices based on the max concurrency.


If you are using the `deviceSelectorStrategy: any`, then in that case all the mentioned tests will be executed on any one device from the list provided. <br/>
**For example:** There are 6 tests and 10 devices mentioned, then the 6 tests will be executed on any one device.

:::


4. Go to the location of the folder on the terminal and run the below commands. After the second command, you may need to give permission on **System Settings/Privacy & Security**. 

```bash
chmod u+x <cliFileNAme>
./<cliFileNAme> --u <userName> --k <accessKey> --verbose -i <yamlFileName>.yaml
```

You can refer to this example and screenshot below:
```
./hyperexecute --u my_user_name --k xyx123abc --verbose -i hyperexecute.yaml
```
<img loading="lazy" src={require('../assets/images/app-automation/example-folder.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


5. After the test is started you can follow the test on the below links.
- [LambdaTest Automation](https://appautomation.lambdatest.com/build)
<img loading="lazy" src={require('../assets/images/app-automation/sharding-appauto.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
- [LambdaTest HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute)
<img loading="lazy" src={require('../assets/images/app-automation/sharding-he.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Filters in Sharding

You can filter the Classes / Tests that you'd like to execute using filters.
Here's an example of the same.


```java
filters:
      attributes:
      - type: className
        values: ["LambdaUiKitIOSUITests","LambdaUiKitIOSUITestsLaunchTests"]
      - type: testName
        values: ["LambdaUiKitIOSUITests/testverifyAppLaunch"]
```

This example will run only the 2 classes & one test as mentioned from the TestSuite.

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
      Sharding in XCUIT</span>
    </li>
  </ul>
</nav>
