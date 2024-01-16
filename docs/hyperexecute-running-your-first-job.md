---
id: hyperexecute-running-your-first-job
title: Running Your First Job on HyperExecute
hide_title: true
sidebar_label: Running Your First Job 
description: Run your first job on HyperExecute
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - Run your first job on HyperExecute
url: https://www.lambdatest.com/support/docs/hyperexecute-running-your-first-job/
site_name: LambdaTest
slug: hyperexecute-running-your-first-job/
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
          "name": "Running Your First Job on HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-running-your-first-job/"
        }]
      })
    }}
></script>

# Running Your First Job on HyperExecute

This page outlines how you can run your first test execution job on HyperExecute.

***

## Before you start

We recommend to run your first test execution job using a sample project on HyperExecute. This can be done in 3 different ways as mentioned below:
1. [**Using Quick Run**](/support/docs/hyperexecute-running-your-first-job/#1-using-quick-run) - Execute tests directly from the HyperExecute Portal. ([Recommended](https://hyperexecute.lambdatest.com/quickstart) for new users) 
2. [**Using Local System**](/support/docs/hyperexecute-running-your-first-job/#2-using-local-system) - Execute tests from your Local System. (Requires [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/))
3. [**Using GitPod**](/support/docs/hyperexecute-running-your-first-job/#3-using-gitpod) -  Execute tests using GitPod. (Requires a [GitPod](https://gitpod.io/login/) account)

***

## 1. Using Quick Run

As you are running tests directly from the HyperExecute GUI, you don't need to do anything.
The platform automatically gets the instructions from the HyperExecute YAML file and starts the execution using the HyperExecute CLI.

1. Go to the [Quickstart](https://hyperexecute.lambdatest.com/quickstart) page.

2. Select your preferred test automation framework and hit **Get Started**.
  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/1.png').default} alt="Image"  className="doc_img"/>

3. You can overwrite the [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml) here (Optional).
Otherwise just click on **Trigger test** to run your first job. 
  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/2.png').default} alt="Image"  className="doc_img"/>

4. At this step the test execution is initiated using the HyperExecute CLI in the background.
  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/3.png').default} alt="Image"  className="doc_img"/>

5. Click on **View Test Result** to navigate to HyperExecute Dashboard where you can see the job getting executed and the test results.

  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/10.png').default} alt="Image"  className="doc_img"/>

***

## 2. Using Local System

<img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/onboarding.png').default} alt="Image"  className="doc_img"/>

To run your Test Scripts on HyperExecute from you Local system, you'll need the following:
- [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution [Job](/support/docs/hyperexecute-concepts/#1-jobs).
- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)

We will be taking care of everything one by one, just follow the steps given below: 

1. Go to the [Quickstart](https://hyperexecute.lambdatest.com/quickstart) page.

2. Choose your test automation framework, Select **Run on Local System** and click on **Get Started**. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/4.png').default} alt="Image"  className="doc_img"/>

3. Download a sample project by clicking on **Code Sample**. (Skip this step if you already have a project you want to test)

  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/5.png').default} alt="Image"  className="doc_img"/>

4. Download the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) as per the OS that you are on.

  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/6.png').default} alt="Image"  className="doc_img"/>

5. Select the OS on which you want to run your tests and then download the `HyperExecute YAML` file shown on screen. This contains all the configurations required for running tests on HyperExecute. 

  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/7.png').default} alt="Image"  className="doc_img"/>

    <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/8.png').default} alt="Image"  className="doc_img"/>

   > **Note**: Your Yaml file should be in the root directory of your project. If you are renaming it, also change the file name in the execution script as well. You can learn more about the advanced configurations [here](/support/docs/deep-dive-into-hyperexecute-yaml/), however for the given sample projects you can simply download the file using the small icon on top right. 

6. In order to run your tests, copy the command from screen and run in your terminal: 
  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/9.png').default} alt="Image"  className="doc_img"/>

7. The generic command required to initiate test execution is given below. You will need to insert the [Username, Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/) and name of your YAML file in place of the `<your_username>`, `<your_acess_key>`  and `<your_yaml_file_name>` before running this command. (Skip if you already used the command from Step 6. )

    ```bash
    ./hyperexecute --user <your_username> --key <your_access_key> --config <your_yaml_file_name>"
    ```
   
    > In case of MAC, if you get a permission denied warning while executing CLI, simply run `chmod u+x ./hyperexecute` to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General** tab.

8. When you run this command, the HyperExecute CLI will send your test scripts to the HyperExecute Platform for execution across multiple parallel Test Execution Nodes.

9. Once your Job is running, you can click on **View Test Results** to navigate to HyperExecute Dashboard where you can see the job getting executed along with the test results.
  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/10.png').default} alt="Image"  className="doc_img"/>

> If you are facing any issues in running your first job? Watch our [Webinar Video](/support/docs/hyperexecute-running-your-first-job/#hyperexecute-webinar-video)

***

## 3. Using Gitpod

1. Go to the [Quickstart](https://hyperexecute.lambdatest.com/quickstart) page.

2. Choose your test automation framework, select **Run test on Gitpod** and click on **Get Started**.

  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/11.png').default} alt="Image"  className="doc_img"/>

3. You will need to login into your Gitpod account, or create a new one. <br/>
  (If you are creating a new account, choose your preferred editor. We recommend VS Code)

  <img loading="lazy" src={require('../assets/images/hyperexecute/getting_started/run-first-job/12.png').default} alt="Image"  className="doc_img"/>

4. As you are running a sample project, Fetching of the Test Scripts, [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and Triggering your tests using the `Execution Command` will be automated. 

5. Once you see the `Job Link` in the logs, you can visit the [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute) to see the tests getting executed.

## HyperExecute Webinar Video

<div className="ytframe"> 
<div className="youtube" data-embed="7aZv7knyViw">
    <div className="play-button"></div>
</div>
</div>

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
        Running Your First Job on HyperExecute
      </span>
    </li>
  </ul>
</nav>
