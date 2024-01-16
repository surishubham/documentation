---
id: hyperexecute-smart-ui-testing-using-cypress
title: Smart UI Testing Using HyperExecute
hide_title: true
sidebar_label: Using Cypress
description: Boost bug detection speed using HyperExecute smart UI testing with Cypress. Perform Visual UI Regression Testing for perfect app delivery.
keywords:
  - smart ui testing in lambdatest
  - smart ui testing in hyperexecute
  - visual  ui testing,image to image comparison
  - free cross browser testing tool
  - regression testing tool
  - perform visual ui testing online
  - compare image to image
  - internet explorer 9 browser test
  - test on samsung a7 online
  - test on mac 10.11 el capitan online
  - apple mac el capitan virtual machine
url: https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/
site_name: LambdaTest
slug: hyperexecute-smart-ui-testing-using-cypress/
---

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
          "name": "Smart UI Testing",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-testing-using-cypress/"
        }]
      })
    }}
></script>

# Smart UI Tests in HyperExecute using Cypress

---

Smart UI Testing is a powerful tool that enables you to execute regression testing effortlessly and identify Visual UI Regression bugs with ease. This guide will walk you through the process of running Smart UI tests on the HyperExecute platform

## Pre-requisites

- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)

- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution [Job](/support/docs/hyperexecute-concepts/#1-jobs).

- Setup the Environment Variable

- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.

- Basic understanding of Cypress is required.

- To run Smart UI tests, you need to have a **Baseline Image** and a **Comparison** image. A baseline image is the reference image with which you want to compare. You can either upload this image from your computer or take a screenshot from your browser.

---

### Step 1: Setup your Project

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

For macOS / Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Step 2: Configure your Cypress Project

1. Go to your project **YAML** file.

2. Your test files must have this code snippet in order for them to take screenshots.

```java
cy.screenshot('my-image')
```

Here **'my-image'** is the name of the image which will be rendered on the Dashboard.
> Refer to the [Cypress Documentation](https://docs.cypress.io/api/commands/screenshot) to understand the different methods for taking screenshots.

3. Paste the below mentioned code in your YAML file.

```bash
cypressOps:
    Build: "test_01"
    Tags: ["smart-ui", "hyperexecute", "cypress"]
    BuildTags: ["t1"]
    smartUICaps:
    # highlight-next-line
        smartUIProjectName: <Enter your Project Name>
        smartUIOptions:
            output:
                errorColor:
                    red: 0
                    green: 200
                    blue: 0
                errorType: flat,
                transparency: 1,
                largeImageThreshold: 100,
                useCrossOrigin: false,
                outputDiff: true
            scaleToSameSize: true,
            ignore: antialiasing
        SmartUIBaseline: true
```

### Step 3: Execute your Project and Compare the Results

To execute the project run the below command in your terminal at the root folder.

```bash
./hyperexecute --config <yaml-file-path> --download-artifacts --force-clean-artifacts
```
- Now, visit to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) to check the status of your project.

- Click on the **Smart UI Tests** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/cypress/1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

- Click on **Compare** button to compare the changes made.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/lt-products/smart-ui/cypress/2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>
