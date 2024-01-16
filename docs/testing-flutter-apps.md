---
id: test-flutter-apps
title: How to test flutter apps using Appium framework
hide_title: true
sidebar_label: Testing Flutter Apps
description: Learn how to test flutter apps for Appium testing across 3000+ real Android and iOS devices.
keywords:
- how to test flutter apps
- how to test flutter apps on android
- test flutter apps on ios
- test flutter apps on iphone
- flutter test app
url: https://www.lambdatest.com/support/docs/testing-flutter-apps/
site_name: LambdaTest
slug: testing-flutter-apps/
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
          "name": "Testing Flutter Apps With Appium",
          "item": "https://www.lambdatest.com/support/docs/testing-flutter-apps/"
        }]
      })
    }}
></script>

# Testing Flutter Apps With Appium
***

Google's Flutter is an open-source tool for developing native mobile apps. It enables developers to create cross-platform apps for both Android and iOS using a single codebase and programming language.

You can now test Flutter apps on the LambdaTest [Appium testing](#) platform across 3000+ real Android and iOS devices. LambdaTest supports Appium’s Flutter driver that lets you test Flutter apps using the Appium framework. To test Flutter apps, you will need to upload apps on LambdaTest cloud servers and then run your automated tests. 

## Prerequisites
***

Before automating Flutter apps using Appium, make sure you have the following things configured.

1. Your Flutter App must be compiled in `debug` or `profile` mode, as  Appium Flutter Driver does not support Flutter App running in release mode. 

2. Add the below dependencies in Flutter app's `pubspec.yaml`

```
 dev_dependencies:
   test: Demo
   flutter_test:
     sdk: flutter
   flutter_driver:
     sdk: flutter
```

3. In `main.dart` file, ensure the app has `enableFlutterDriverExtension()` enabled before `runApp`.

```
void main() {
    enableFlutterDriverExtension();
    init();
    runApp(MyApp());
 }
 ```

 4. Set the `automationName` capability to `flutter` in Appium desired capabilities.

```
 desiredCapabilities.setCapability("automationName", "flutter");
```

Shown below is the test script for automating Flutter apps on LambdaTest platform.

```py
import os

from appium.webdriver import Remote
from appium_flutter_finder.flutter_finder import FlutterElement, FlutterFinder

# Example

driver = Remote('http://<LT username>:<LT accesskey>@mobile-hub.lambdatest.com/wd/hub/', dict(
    platformName='Android',
    automationName='flutter',
    platformVersion='11',
    deviceName='Google Pixel 4',
    app='<App URL>',
    isRealMobile=True
))

finder = FlutterFinder()

text_finder = finder.by_text('You have pushed the button this many times:')
text_element = FlutterElement(driver, text_finder)
print(text_element.text)

key_finder = finder.by_value_key("next_route_key")
goto_next_route_element = FlutterElement(driver, key_finder)
print(goto_next_route_element.text)
goto_next_route_element.click()

back_finder = finder.page_back()
back_element = FlutterElement(driver, back_finder)
back_element.click()

tooltip_finder = finder.by_tooltip("Increment")
driver.execute_script('flutter:waitFor', tooltip_finder, 100)

floating_button_element = FlutterElement(driver, tooltip_finder)
floating_button_element.click()

counter_finder = finder.by_value_key("counter")
counter_element = FlutterElement(driver, counter_finder)
print(counter_element.text)
```

>In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@lambdatest.com.

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
       Testing Flutter Apps With Appium
      </span>
    </li>
  </ul>
</nav>
