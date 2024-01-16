---
id: tas-tutorial-cloud-demo
title: TAS Cloud Demo
hide_title: true
sidebar_label: TAS Cloud Demo
description: Demo Repository integration for TAS Cloud
keywords:
  - LambdaTest TAS
  - Test at Scale
  - TAS - TAS Cloud Demo
  - TAS - Tutorial
url: https://www.lambdatest.com/support/docs/tas-tutorial-cloud-demo/
site_name: LambdaTest
slug: tas-tutorial-cloud-demo/
---

# TAS Cloud Demo
***

In this section we will explain how you can setup a sample repo on TAS Cloud and run your first test execution job.

<div className="ytframe"> 
<div className="youtube" data-embed="b3PnqF7A24I" data-loading-attribute="eager">
    <div className="play-button"></div>
</div>
</div>

## Step 1
***
1. **Fork** any one of our **sample repos** into your GitHub account. Sample repos : [Mocha](https://github.com/LambdaTest/mocha-demos), [Jest](https://github.com/LambdaTest/jest-demos), [Jasmine](https://github.com/LambdaTest/jasmine-node-js-example).
2. **[Create an account](/support/docs/tas-getting-started-creating-an-account)** or **Login** by visiting [TAS Login Page](https://tas.lambdatest.com/login/). (Or [TAS Home Page](https://tas.lambdatest.com/))

  <p align="center">
  <img loading="lazy" src={require('../assets/images/tas/tutorial/tas-cloud/tas-cloud-repo-fork.gif').default} alt="Forking the repo and making account" width="1340" height="617" className="doc_img"/>
  </p>

## Step 2
***
3. After login, **select your organisation** and continue with TAS Cloud.
4. Import the same sample repository on the TAS Portal that you have forked earlier.
5. Now its time to configure your `.tas.yml`. For this demo repo `.tas.yml` file is already present 👍, therefore just proceed to **Step 3** below.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/tutorial/tas-cloud/tas-cloud-new-project.gif').default} alt="Select mode and post-merge" width="1340" height="617" className="doc_img"/>
</p>



## Step 3
***
6. On the bottom left corner click **Already have a .tas.yml** and read the instructions.
7. In order make a commit open the **readme file**, make some changes (you can make any changes as we just have to do a dummy commit) and commit them directly to the master branch.
8. Go back to the portal and click on **Understood** to proceed further.
9. You should see a new job under queued or initiating status on your TAS portal.

<p align="center">
<img loading="lazy" src={require('../assets/images/tas/tutorial/tas-cloud/tas-cloud-commit.gif').default} alt="Select mode and post-merge" width="1340" height="617" className="doc_img"/>
</p>

**Congratulations 🎉** <br/>
You have successfully initiated your first job.
Once this job finishes you should be able to see the test results for this job.
