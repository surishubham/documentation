---
id: appium-uploading-retrieving-files
title: Uploading/Retrieving files on Real Devices 
sidebar_label: Uploading/Retrieving files on Real Devices
description: You can use sample data provided by LambdaTest in case you need to check uploading files, contacts etc. to your application. This document also shows how to retrieve files from LambdaTest rela devices to local and vice-versa.
keywords:
  - upload a file
  - app test automation
  - sample data
  - push pull
  - retrieving files
  - lambdatest
  - framework on lambdatest
  - app testing appium
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/appium-uploading-retrieving-files/
site_name: LambdaTest
slug: appium-uploading-retrieving-files/
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
          "name": "Uploading/Retrieving files on Real Devices",
          "item": "https://www.lambdatest.com/support/docs/appium-uploading-retrieving-files/"
        }]
      })
    }}
></script>
---

Whenever you are testing your application on **LambdaTest Real Devices**, you might have felt the need for some set of sample data that can help you achieve required output. Thus, to fulfill this need LambdaTest provides you with sample data like **pre-loaded contacts, media files etc.**

You can also upload files to the real device for testing and can also save the files produced for future reference. Let's see how.

## Transferring the files
---

### How to copy a file or folder to the real device?

We recognise that you need some files or folders on the device to test various things, such as uploading something to your app etc. Therefore, LambdaTest provides you with a set of pre-loaded media files on the real device so that you can test your apps. But, in case you need to **upload** something specific, you can upload and use it wherever required. For this functionality, we generally use Appium’s [push file](https://appium.readthedocs.io/en/latest/en/commands/device/files/push-file/) command to copy files into any folder.

### How to retrieve a file or directory from the real device?

If your app has a feature of **saving a file** to the real device and you want to **retrieve** that file for later, you can do it by running the Appium's [pull command](https://appium.readthedocs.io/en/stable/en/commands/device/files/pull-file/)

Refer to the code snippets given below for push and pull commands in different languages.

<Tabs className="docs__val">

<TabItem value="Android" label="Android" default>

While using pull and push features of Appium, please copy the files and retrieve them from the given folders, `/sdcard/Download/`, `/sdcard/Pictures` and `/sdcard/Android/data/<app_package>`, on the LambdaTest Real Device.

<Tabs className="docs__val">

<TabItem value="python" label="Python" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {` # Push a file
dest_path = '/sdcard/Download/file.txt'
driver.push_file(dest_path, 'Hello World'.encode("utf-8"))
# Pull a file
file_base64 = driver.pull_file(dest_path)
`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="JavaScript" label="JavaScript" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-javascript">
  {`// Push a file
let data = new Buffer("Hello LambdaTest").toString('base64');
driver.pushFile('/sdcard/Download/sample.txt', data);
// Pull file
let data = driver.pullFile('/sdcard/Download/sample.txt');`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="PHP" label="PHP" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-php">
  {`// Push a file
$driver->pushFile('/sdcard/Download/sample.txt', 'QXJlIHlvdXIgYmVlcnMgb2theT8=');
// Pull file
$data = $driver->pullFile('/sdcard/Download/sample.txt');`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="Java" label="Java" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-java">
  {`// Push a file
driver.pushFile("/sdcard/Download/sample.jpg", new File("/Users/macuser/Desktop/sample.jpg"));
// Pull file
byte[] fileBase64 = driver.pullFile("/sdcard/Download/sample.jpg");`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="Ruby" label="Ruby" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-ruby">
  {`# Push a file
driver.push_file('/sdcard/Download/sample.jpg', File.read('/Users/macuser/Desktop/sample.jpg'))
# Pull file
pull_file('/sdcard/Download/sample.jpg')`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="C#" label="C#" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-csharp">
  {`// Push a file
driver.PushFile("/sdcard/Download/sample.jpg", new FileInfo("/Users/macuser/Desktop/sample.jpg"))
// Pull file
byte[] fileBase64 = driver.PullFile("/sdcard/Download/sample.jpg");`}
  </CodeBlock>
  </div>
</TabItem>
</Tabs>

</TabItem>

<TabItem value="iOS" label="iOS" default>

While using pull and push feature of Appium in iOS, please adhere to the following points:

- Copy and save the files in the app's **documents folder** on the real device.
- Make sure that the app has `UIFileSharingEnabled` key set to true in the **Info.plist**
- Follow this specific format for the destination path while using push feature: `@<app_bundle_id>:documents/<sample_image>.png` 

<Tabs className="docs__val">

<TabItem value="python" label="Python" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {` # Push file
driver.push_file('@com.lambdatest.proverbial:documents/sample-image1.png', source_path='/Users/macuser/Desktop/sample-image1.png')
# Push a text file
dest_path = '@com.lambdatest.proverbial:documents/file.txt'
driver.push_file(dest_path, 'Hello LambdaTest'.encode("utf-8"))
# Pull file
file_base64 = driver.pull_file(dest_path)
`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="JavaScript" label="JavaScript" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-javascript">
  {`// Push file
let data = new Buffer("Hello LambdaTest").toString('base64');
driver.pushFile('@com.lambdatest.proverbial:documents/sample.txt', data);
// Pull file
let data = driver.pullFile('@com.lambdatest.proverbial:documents/sample.txt');`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="PHP" label="PHP" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-php">
  {` // Push file
  $driver->pushFile('@com.lambdatest.proverbial:documents/foo.bar', 'QXJlIHlvdXIgYmVlcnMgb2theT8=');
// Pull file
$data = $driver->pullFile('@com.lambdatest.proverbial:documents/foo.bar');`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="Java" label="Java" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-java">
  {`// Push file
driver.pushFile("@com.lambdatest.proverbial:documents/sample-image.jpg", new File("/Users/macuser/Desktop/sample-image.jpg"));
// Pull file
byte[] fileBase64 = driver.pullFile("@com.lambdatest.proverbial:documents/sample-image.jpg");`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="Ruby" label="Ruby" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-ruby">
  {`# Push file
driver.push_file('@com.lambdatest.proverbial:documents/sample-image.jpg', File.read('/Users/macuser/Desktop/sample-image.jpg'))
# Pull file
pull_file('@com.lambdatest.proverbial:documents/sample-image.jpg')`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="C#" label="C#" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-csharp">
  {`// Push file
driver.PushFile("@com.lambdatest.proverbial:documents/sample-image.jpg", new FileInfo("/Users/macuser/Desktop/sample-image.jpg"))
// Pull file
byte[] fileBase64 = driver.PullFile("@com.lambdatest.proverbial:documents/sample-image.jpg");`}
  </CodeBlock>
  </div>
</TabItem>
</Tabs>

</TabItem>

</Tabs>



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
      Uploading/Retrieving files on Real Devices</span>
    </li>
  </ul>
</nav>