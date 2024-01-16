---
id: smartui-github-app-integration
title: Github App Integration with SmartUI
sidebar_label: Github App Integration
description: Effortlessly integrate LambdaTest SmartUI with GitHub App for Visual Regression testing. Follow simple steps to enhance your CI workflow with SmartUI.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
url: https://www.lambdatest.com/support/docs/smartui-github-app-integration/
site_name: LambdaTest
slug: smartui-github-app-integration/
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
          "name": "WebDriverIO With Appium",
          "item": "https://www.lambdatest.com/support/docs/smartui-upload-api-v2/"
        }]
      })
    }}
></script>

:::info
This is the guide to setup your Github Repos with SmartUI projects and run your CI along with visual regression testing.
:::

### Pre-requisites for running Smart UI

- An account with Github with valid permission to install new applications to your repositories.
- Basic understanding of Continuous Integration tools (CI) is required.
- Should have setup the SmartUI suite, else please read [this](/docs/selenium-visual-regression/)

The following steps will guide you in running your first Visual Regression test on LambdaTest SmartUI platform using GitHub App-

### **Step 1**: Integrate the your Lambdatest Account with Github App

The following are the steps to integrate your account with Github App:

1. Go to [Integrations page](https://integrations.lambdatest.com/)
2. Search for Github App and select the integration.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/github-app-landing.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

3. Click on the `OAuth` as your preferred authentication.
4. Click on **Install**.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-github-integration.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

5. You will be redirected to the Github Authentication page to confirm the permissions required for the application to be installed.
6. Click on **Confirm** button to all the authentication requirements from your Github Account.
7. After successful authentication, you can refresh the [Integrations page](https://integrations.lambdatest.com/) to view the Github App installed.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/github-app-installed.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

Now, after the successful installation of the GitHub Integration, please follow the below steps to configure to your project repo:

### **Step 2:** Select your GitHub repository 

Go to your GitHub repository where you want to configure your SmartUI project. 

:::info GitHub Sample

Please check out GitHub sample here: https://github.com/LambdaTest/smartui-node-sample

:::

### **Step 3:** Configure your test suite

 Add the `Github` capability to your current test configuration:

```js
const capabilities: {
  platform: "Windows 10",
  browserName: "chrome",
  version: "latest",
  "smartUI.project": "Smart UI sample test",
  // highlight-start
   github: {
    
    "url": process.env.GITHUB_URL  // Mandatory
    //Github URL format-https://api.github.com/repos/OWNER/REPO/statuses/commitId
    
   }
   // highlight-end
}
```

### **Step 4:** Setting up your CI configuration

Setting up your **CI** workflow to execute on **GitHub**. Here is an example setup with `GitHub Actions`: 

Go to `.github/workflows/<your_ci_file>.yml` 

```yaml
    name: Execute SmartUI Test with Github App Integration
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
      with:
        fetch-depth: 10
        
    - name: Step for push event
      run: |
        echo "This is a push event!"
        echo "The latest commitId $(git log -1 --format='%H')"
        echo "COMMIT_ID=$(git log -1 --format='%H')" >> $GITHUB_ENV
      if: github.event_name == 'push'

    - name: Step for pull_request event
      run: |
        echo "This is a pull_request event!"
        git log -n 5 --format="%H %an %s" | while read line; do echo "$line"; done
        echo "The latest commitId $(git log -n 2 --format='%H' | tail -n 1)"
        echo "COMMIT_ID=$(git log -n 2 --format='%H' | tail -n 1)" >> $GITHUB_ENV
      if: github.event_name == 'pull_request'

    - name: Create Github URL
      run: |
        API_HOST=https://api.github.com
        echo "The latest commitId is $COMMIT_ID"
        GITHUB_URL=$API_HOST/repos/$GITHUB_REPOSITORY/statuses/$COMMIT_ID
        echo "GITHUB_URL: $GITHUB_URL"
        echo "GITHUB_URL=$GITHUB_URL" >> $GITHUB_ENV
```

:::info Note

We also support other Continuous Integrations (CI) tools to execute the similar process as well. 

:::

### **Step 5**: Execute your test suite with CI

After the setup is completed, you can now execute your test suite with the Continuous Integration (CI) pipeline with any tool of your choice. 

:::tip GitHub Actions - Example

If your current pipeline is set to `GitHub Actions` then you can configure your `workflow` to trigger the test suite by committing the changes to the `Github Repo` or on raising a `Pull Request` to merge any changes to the branch as per your branch rules. 

:::

<img loading="lazy" src={require('../assets/images/smart-visual-testing/github-app-sample.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

### GitHub App Feedback State

Here is an example of **Successful** feedback app state: 
<img loading="lazy" src={require('../assets/images/smart-visual-testing/approved-state-1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

Here is an example of **Failed** feedback app state: 
<img loading="lazy" src={require('../assets/images/smart-visual-testing/failed-state-1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

:::tip Note
 
You can click on `Details` link which will redirect the user to the build of the SmartUI test to view the results

:::

To understand more about the Github Actions, setup please read this article : https://docs.github.com/en/actions/quickstart




