---
id: running-serenity-test-on-selenium-grid
title: Serenity with Selenium
sidebar_label: Serenity BDD
description: This document will help you run Serenity automation tests over LambdaTest Grid. LambdaTest enables you to run your Serenity automated tests across 3000+ real browsers for desktop &amp; mobile combination on its cloud Selenium Grid.
keywords:
  - serenity selenium
  - serenity bdd
  - selenium
  - serenity automation testing
  - serenity testing tutorial
  - serenity selenium framework
url: https://www.lambdatest.com/support/docs/serenity-test-on-selenium-grid/
site_name: LambdaTest
slug: serenity-test-on-selenium-grid/
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
          "name": "Running Serenity Test On Selenium Grid",
          "item": "https://www.lambdatest.com/support/docs/serenity-test-on-selenium-grid/"
        }]
      })
    }}
></script>

# Tutorial to Run Your First Test on LambdaTest

---

In this topic, you will learn how to configure and run your Java automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **Java** framework **Serenity**.

## Objective

---

By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Serenity** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **Serenity** with Selenium to reduce build times.
4. Test your locally hosted pages on LambdaTest platform.
5. Explore advanced features of LambdaTest.

:::tip Sample repo

All the code samples in this documentation can be found on **LambdaTest's Github Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/Serenity-Selenium-Sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Pre-requisites

---

Before you can start performing Java automation testing with Selenium, you would need to:

- Install the latest **Java development environment**. We recommend to use **Java 11** version.

- Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of Selenium Client and WebDriver are ideal for running your automation script on LambdaTest Selenium cloud grid.

- Install **Maven**. It can be downloaded and installed following the steps from [the official website](https://maven.apache.org/). Maven can also be installed easily on **Linux/MacOS** using [**Homebrew**](https://brew.sh/) package manager.

### Cloning Repo and Installing Dependencies

**Step 1:** Clone the LambdaTest’s [Serenity-Selenium-Sample](https://github.com/LambdaTest/Serenity-Selenium-Sample) repository and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/Serenity-Selenium-Sample
cd Serenity-Selenium-Sample
```

You may also want to run the command below to check for outdated dependencies.

```bash
mvn versions:display-dependency-updates
```

### Setting up Your Authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

**Step 2:** Set LambdaTest **Username** and **Access Key** in environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \\
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \`
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Run Your First Test

---

### Sample Test with Serenity

To run your first Serenity Test on LambdaTest Selenium Grid, let’s understand our test case scenario, the test case below checks for the word "**LambdaTest**" on Google and tests if the title of the resultant page is "**LambdaTest-Google Search**".

```bash
Feature: Google's Search Functionality
    Scenario: Can find search results
        When I type query as "LambdaTest"
        And I submit
        Then I should see title "LambdaTest - Google Search"
```

Following below is the `GooglePage.java` file for the above Test Case Scenario.

```java title="GooglePage.java"
package com.lambdatest.cucumber.pages;

import static org.assertj.core.api.Assertions.assertThat;

import org.openqa.selenium.support.FindBy;

import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;
import net.thucydides.core.pages.PageObject;

@DefaultUrl("https://www.google.com/ncr")
public class GooglePage extends PageObject {

    @FindBy(name = "q")
    WebElementFacade search;

    @FindBy(name = "btnK")
    WebElementFacade searchButton;

    public void searchForString(String searchString) {
        search.sendKeys(searchString);
    }
 public void submitForm() throws Exception {
        searchButton.click();
        Thread.sleep(5000);
    }

    public void titleShouldMatch(String matchTitle) {
        assertThat(this.getTitle()).containsIgnoringCase(matchTitle);
    }
}
```

Below is the `LambdaTestSerenityDriver.java` file that shows the integration of Serenity with LambdaTest.

```java title="LambdaTestSerenityDriver.java"
package com.lambdatest;

import java.net.URL;
import java.util.Iterator;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import net.thucydides.core.util.EnvironmentVariables;
import net.thucydides.core.util.SystemEnvironmentVariables;
import net.thucydides.core.webdriver.DriverSource;

public class LambdaTestSerenityDriver implements DriverSource {

    public WebDriver newDriver() {
        EnvironmentVariables environmentVariables = SystemEnvironmentVariables.createEnvironmentVariables();

        String username = System.getenv("LT_USERNAME");
        if (username == null) {
            username = (String) environmentVariables.getProperty("lt.user");
        }

        String accessKey = System.getenv("LT_ACCESS_KEY");
        if (accessKey == null) {
            accessKey = (String) environmentVariables.getProperty("lt.key");
        }

        String environment = System.getProperty("environment");
                DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("plugin","Serenity LambdaTest Plugin");

        Iterator it = environmentVariables.getKeys().iterator();
        while (it.hasNext()) {
            String key = (String) it.next();

            if (key.equals("lt.user") || key.equals("lt.key") || key.equals("lt.grid")) {
                continue;
            } else if (key.startsWith("lt_")) {
                capabilities.setCapability(key.replace("lt_", ""), environmentVariables.getProperty(key));

            } else if (environment != null && key.startsWith("environment." + environment)) {

                capabilities.setCapability(key.replace("environment." + environment + ".", ""),
                        environmentVariables.getProperty(key));
            }
        }

        try {
            String url = "https://" + username + ":" + accessKey + "@" + environmentVariables.getProperty("lt.grid")
                    + "/wd/hub";
            return new RemoteWebDriver(new URL(url), capabilities);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    public boolean takesScreenshots() {
        return false;
    }
}
```

:::info Note

You can generate capabilities for your test requirements with the help of our inbuilt :link: **[Capabilities Generator Tool](https://www.lambdatest.com/capabilities-generator/)**.

:::

### Executing the Test

**Step 3:** The tests can be executed in the terminal using the following command:

```bash
mvn verify -P single
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

:::

## Run Your Parallel Test Using Serenity

---

### Setting up the Parallel Environment

To run parallel tests with Serenity, we will run **single.feature** test case in four different environments Chrome, Firefox, IE, and Safari.

```java title="ParallelChromeTest.java"
//Running Parallel Test On Chrome

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features = "src/test/resources/features/single.feature")
public class ParallelChromeTest extends LambdaTestSerenityTest {
}
```

Similarly we define the class for the remaining browsers.

### Executing Parallel Tests Using Serenity

To run parallel tests using Serenity, we would have to execute the below commands in the terminal:

```bash
mvn verify -P parallel
```

:::info

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build).

:::

## Testing Locally Hosted or Privately Hosted Projects

---

You can test your locally hosted or privately hosted projects with [LambdaTest Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using LambdaTest Tunnel app. All you would have to do is set up an SSH tunnel using LambdaTest Tunnel app and pass toggle `tunnel = True` via desired capabilities. LambdaTest Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

:::tip Tunnel Help

Refer our :link: [LambdaTest Tunnel documentation](https://www.lambdatest.com/support/docs/testing-locally-hosted-pages/) for more information.

:::

Here’s how you can establish LambdaTest Tunnel.

:::info Download the binary file

- [LambdaTest Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
- [LambdaTest Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
- [LambdaTest Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

:::

Open command prompt and navigate to the binary folder.

Run the following command:

```bash
./LT -user {user’s login email} -key {user’s access key}
```

So if your user name is **lambdatest@example.com**, the command would be:

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`./LT -user lambdatest@example.com -key ${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

Once you are able to connect **LambdaTest Tunnel** successfully, you would just have to pass on tunnel capabilities in the code as shown:

```java title="Tunnel Capability"
tunnel = true
```

### Executing Local Tests Using Serenity

To run local tests using Serenity, we would have to execute the below commands in the terminal:

```bash
mvn verify -P local
```

## Additional Links

---

- [Advanced Configuration for Capabilities](https://www.lambdatest.com/support/docs/selenium-automation-capabilities/)
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
       Running Serenity Test On Selenium Grid
      </span>
    </li>
  </ul>
</nav>
