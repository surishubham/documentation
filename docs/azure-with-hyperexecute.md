---
id: azure-with-hyperexecute
title: Azure DevOps Integration
hide_title: true
sidebar_label: Azure DevOps
description: LambdaTest now integrates with Azure DevOps Pipeline to boost your go-to market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - lambdatest integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.lambdatest.com/support/docs/azure-with-hyperexecute/
site_name: LambdaTest
slug: azure-with-hyperexecute/
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
          "name": "Azure Devops Integration",
          "item": "https://www.lambdatest.com/support/docs/azure-with-hyperexecute/"
        }]
      })
    }}
></script>

# Azure DevOps Pipeline Integration with Hyperexecute
* * *

Azure DevOps offers developer services that enable teams to plan their work, collaborate on code development, and build and deploy applications. Azure DevOps fosters a collaborative culture and set of processes that bring together software developers, project managers, and contributors. It enables organizations to create and improve products at a much faster rate than traditional software development approaches allow.

<div className="ytframe"> 
<div className="youtube" data-embed="0Nzrfjcqymw">
    <div className="play-button"></div>
</div>
</div>

This document will show you how to integrate Azure Devops Pipeline with HyperExecute to greatly shorten your test cycles.

## How To Integrate Azure DevOps Pipeline with Hyperexecute

***

To integrate Azure DevOps Pipeline with HyperExecute, follow the below steps: 
### 1. Log into your Azure DevOps account

### 2. Create a New Project
 Go to the top-right corner of your Azure Devops profile page and click the **+ New Project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/azure/1.png').default} alt="Create New Project" width="" height=""/>

Follow the prompts to successfully create a new project.

### 3. Create a New Pipeline

Next, you need to create a new pipeline. To create a new pipeline, click the **Pipelines** button from the left panel or from the main page.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/azure/2.png').default} alt="Create New Pipeline" width="" height=""/>

### 4. Configure the Azure Pipeline YAML to Execute Hyperexecute CLI Binary:

To configure the Azure DevOps pipeline YAML to execute the HyperExecute CLI Binary, run the following command: 

```
trigger:
- main

pool:
  vmImage: windows-latest
  
steps: 
   
- script: |
           curl -O https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe 
// download HyperExecute CLI binary 
           
          hyperexecute.exe -u $(LT_USERNAME) -k $(LT_ACCESS_KEY) -i yaml/win/.hyperexecute_autosplits.yaml

// Execute HyperExecute CLI binary. 
```

- **Trigger:** In the **trigger** section, state the branch of your your test repository that you would like to trigger.
Here, the **main** branch is selected as the test repository to commit the Azure Pipeline Yaml.
- **Pool:** In the **pool** section, state the OS flavor of the Virtual Machine Image that you would like to use.
- **Steps:** In the **steps** section, declare the flow of the pipeline execution. 
- **Script:** In the **script** section, state the command that you would like to execute in the following steps: 
    - Download a fresh version of the HyperExecute CLI binary
    - Execute the Hyperexecute CLI binary. (The Hyperexecute CLI binary contains LambdaTest username, access key and path   of the Yaml created for Hyperexecute. You can find more information on this [here.](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid))

> **Note**: Ensure that your username and access key for your LambdaTest account is visible in the script. 

***

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/azure/3.png').default} alt="Create New Project" width="" height=""/>

***

### 5. Run the Pipeline
To run the new pipeline that you just created, click the **Run** or **Save and Run** button at the top-right corner of the page.


<p></p>

**An example of how a test that is run on the Azure DevOps pipeline gets executed:**
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/azure/azure_execution.png').default} alt="Create New Project" width="" height=""/>

<p></p>

**An example of a Hyperexecute job that was triggered through the above pipeline:**
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/azure/azure_execution2.png').default} alt="Create New Project" width="" height=""/>


>
**Run your tests at speeds never seen before. Happy testing! :)**

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        GitHub Integration
      </span>
    </li>
  </ul>
</nav>