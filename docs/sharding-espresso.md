---
id: sharding-espresso
title: Sharding for Espresso 
sidebar_label: Sharding for Espresso
description: This document will cover how to execute Espresso Tests on real devices with HyperExecute. Before starting, please make sure you have App Automation plans on your account.
keywords:
  - sharding
  - Espresso
  - appium
  - real devices
  - lambdatest cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.lambdatest.com/support/docs/sharding-espresso-rd-hyperexecute/
site_name: LambdaTest
slug: sharding-espresso-rd-hyperexecute/
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
          "name": "Sharding in Espresso",
          "item": "https://www.lambdatest.com/support/docs/sharding-espresso-rd-hyperexecute/"
        }]
      })
    }}
></script>


Running **Espresso** tests sequentially can be laborious and time-intensive. This guide offers an efficient solution by introducing the concept of **sharding**. By breaking down tests into shards, they can be executed in parallel, significantly trimming down the total testing duration.

Furthermore, this document provides insights on executing Espresso Tests on real devices using the innovative **HyperExecute** platform. Designed with precision, HyperExecute stands out as a test orchestration solution, tailored to execute end-to-end tests at breakneck speed. To streamline its setup and configuration, a user-friendly `YAML` file is employed. Dive into this guide to make your testing process more agile and efficient.

:::tip Note
You can learn more about the HyperExecute portal and UI by going through our [Guided Walkthrough](/support/docs/hyperexecute-guided-walkthrough/) page. It contains all the relevant information that you need to optimize your testing process with HyperExecute. 
:::

## Objectives

---

By the end of this topic, you will be able to:
1. Speed up your Espresso tests with sharding
2. Learn more about HyperExecute
3. Explore advanced features of LambdaTest

## Pre-requisites

---

Before you start performing your App automation testing with Espresso, please make sure:

- You have access to LambdaTest username and accessKey. If you have not registered yet, you can do the same by visiting our [website](https://accounts.lambdatest.com/register). You will be able to access the credentials at the [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile)
- Make sure you have App Automation Cloud plans on your account.


## Uploading your App & Test suite

### Step 1: Upload Your Application

Upload your **android** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format ```Username:AccessKey``` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request.

Here is an example cURL request to upload your app using our REST API:


**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial.apk"' \\
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"/Users/macuser/Downloads/proverbial.apk"" -F "type="espresso-android""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>



>Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step as `appId`.



### Step 2: Uploading Test Suite

Upload your **test suite** (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/ProverbialEspressoTest.apk"' \
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/ProverbialEspressoTest.apk"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>


>Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the next step as ``testSuiteAppId``


## How to use Sharding

---

1. Firstly, create a folder on your local.
2. Download the **HyperExecute CLI** file and put it under this folder based on your platform.
#### Download HyperExecute CLI

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |


## Types of Sharding
Sharding can be categorized into two types:

**Manual Sharding**: This feature enables users to manually specify shards along with their definitions, offering multiple strategies such as class, package, and more. By doing so, users can have greater flexibility and control over the sharding process.

Refer to the sample `.yaml` file here

```bash title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: android
autosplit: false

framework:
  name: "android/espresso"
  args:
    buildName: "Espresso"
    video: true
    deviceLog: true
    
    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath. Both examples are given below.

    #highlight-next-line
    appPath: Proverbial.apk 

    testSuitePath: ProverbialExpressoTest.apk
    # We have used the appPath and testSuitePath here. 

    
    #highlight-next-line
    appId: lt://APP1010461471690377432133206
    testSuiteAppId: lt://APP10104592261690377454846669
    # We have used the appId and testSuiteAppID here.

    deviceSelectionStrategy: all
    devices: ["Galaxy.*", "Pixel.*"]

    shards:
      mappings:
     - name: shard1
        strategy: "class"
        values: ["com.lambdatest.proverbial.BrowserTest"]
    # The strategy for this shard is based on "class".
    # This shard will run all tests from the class com.lambdatest.proverbial.BrowserTest.
     - name: shard2
       strategy: "package"
       values: ["com.lambdatest.proverbial"]
    # The strategy for this shard is based on "package". 
    # This shard will run all tests that belong to the package com.lambdatest.proverbial.l.
     - name: shard3
       strategy: "skipClass"
       values: ["com.lambdatest.proverbial.BrowserTest"]
    # The strategy for this shard is to skip a specific class. 
    # This shard will avoid running tests from the class com.lambdatest.proverbial.BrowserTest.
```


:::tip When shards are added

If you are using the `deviceSelectorStrategy: all`,then in that case all the specified shards will be executed on every device available.<br/>
**For example:** If there are 3 shards, 2 devices in list (d1, d2) and test suites contains total 10 test cases.
Then, d1 has 3 shards, i.e., total 3 devices of d1 configuration will be used. 10 test cases distributed among these 3 shards and similarly d2 also has 3 shards, i.e., total 3 devices of d2 configuration will be used. 10 test cases will be distributed among these 3 shards.

If you are using the `deviceSelectorStrategy: any`, then in that case all the mentioned shards will be executed on just one device from the provided list.<br/>
**For example:** If there are 2 shards mentioned in `.yaml`and 3 devices mentioned, the system will create 2 shards. These shards might use any 2 devices from the given 3 configurations. It's also possible that the same device configuration could be used for both shards. In this setup, test cases will be distributed between these shards.
:::

---


**Auto Sharding** : The system intelligently determines the distribution of tests across devices, employing specific criteria to optimize the testing process.

Refer to the sample `.yaml` file here

```bash title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: android
autosplit: true

framework:
  name: "android/espresso"
  args:
    buildName: "Espresso"
    video: true
    deviceLog: true
    
    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath. Both examples are given below.

    #highlight-next-line
    appPath: Proverbial.apk 

    testSuitePath: ProverbialExpressoTest.apk
    # We have used the appPath and testSuitePath here. 

    
    #highlight-next-line
    appId: lt://APP1010461471690377432133206
    testSuiteAppId: lt://APP10104592261690377454846669
    # We have used the appId and testSuiteAppID here.

    deviceSelectionStrategy: all
    devices: ["Galaxy.*", "Pixel.*"]

```


:::tip When shards aren't added

If you are using the `deviceSelectorStrategy: all`, then in that case the tests will be executed on all mentioned devices in `.yaml` based on the concurrency.  <br/>
**For example:** If the concurrency is 3, 2 devices in list (d1, d2) and test suites contains total 10 test cases.
Then, d1 has 3 shards, i.e., total 3 devices of d1 configuration will be used. 10 test cases distributed among these 3 shards and similarly d2 also has 3 shards, i.e., total 3 devices of d2 configuration will be used. 10 test cases will be distributed among these 3 shards.

If you are using the `deviceSelectorStrategy: any`, then in that case all the specified tests will be executed on each device from the provided list, considering the concurrency setting. <br/>
**For example:** If the concurrency is set to 2 and 3 devices mentioned, the system will create 2 shards. These shards might use any 2 devices from the given 3 configurations. It's also possible that the same device configuration could be used for both shards. In this setup, test cases will be distributed between these shards.
:::



4. Go to the location of the folder on the terminal and run the below commands. After the second command, you may need to give permission on **System Settings/Privacy & Security**. 

```bash
chmod u+x <cliFileNAme>
./<cliFileNAme> --user <userName> --key <accessKey> --verbose -i <yamlFileName>.yaml
```

You can refer to this example and screenshot below:
```
./hyperexecute --user my_user_name --key xyx123abc --verbose -i hyperexecute.yaml
```
<img loading="lazy" src={require('../assets/images/app-automation/example-folder.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


5. After the test is started you can follow the test on the below links.
- [LambdaTest Automation](https://appautomation.lambdatest.com/build)
<img loading="lazy" src={require('../assets/images/app-automation/espresso_sharding.png').default} alt="cmd" width="768" height="373" className="doc_img"/>
- [LambdaTest HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute)
<img loading="lazy" src={require('../assets/images/app-automation/espresso_cli.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Filters in Sharding

You can filter the Classes / Tests that you'd like to execute using filters.
Here's an example of the same.This will not work


```java
filters:
      attributes:
      - type: class
        values: ["com.lambdatest.proverbial.BrowserTest","com.lambdatest.proverbial.MainActivityTest"]
      - type: package
        values: ["com.lambdatest.proverbial"]
```

This example will fetch all the test cases from 2 classes and 1 package as defined above and divide them with respect to concurrency given in the yaml file.

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