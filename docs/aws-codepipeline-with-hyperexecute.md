---
id: aws-codepipeline-with-hyperexecute
title: How to integrate AWS CodePipeline with HyperExecute
hide_title: true
sidebar_label: AWS CodePipeline
description: Optimize AWS CodePipeline with HyperExecute for seamless, efficient testing. Streamline your CI/CD workflow with LambdaTest's comprehensive guide.
keywords:
  - lambdatest integrations
  - lambdatest integrations with ci/cd tools
  - hyperexecute integrations
  - hyperexecute integrations with ci/cd tools
  - continuous integration
  - aws codepipeline
  - continuous integration tools
  
url: https://www.lambdatest.com/support/docs/aws-codepipeline-with-hyperexecute/
site_name: LambdaTest
slug: aws-codepipeline-with-hyperexecute/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/"
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "AWS CodePipeline Integration with HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/aws-codepipeline-with-hyperexecute/"
        }]
      })
    }}
></script>

# AWS CodePipeline Integration With HyperExecute

AWS CodePipeline is a cloud-based continuous delivery platform for fully automating your release pipelines. Provides an intuitive interface for configuring & modeling different stages of release cycles, so you can envision how your code changes would look when pushed across these different changes. You can also track your pipeline in real-time, and look into the pipeline history to understand the timestamps involved in the execution of various pipelines.

This document will show you how to integrate AWS CodePipeline with HyperExecute to greatly shorten your test cycles.

## How to Integrate AWS CodePipeline with HyperExecute

***

To integrate AWS CodePipeline with HyperExecute, follow the below mentioned steps:

### Step 1: Create a new AWS CodePipeline pipeline.

- Enter the Pipeline Name.
- Under Service role, select **New service role.** Click Next.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/aws/STEP1.webp').default} alt="Image"  className="doc_img"/>

### Step 2: Add a Source Provider

- In the **Source Provider**, select the **GitHub (Version 2)** option.
- Connect your GitHub account.
- Select the desired Repository.
- Select the specified branch name, for which you want to establish the pipeline.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/aws/STEP2.webp').default} alt="Image"  className="doc_img"/>

### Step 3: Select the Build Provider

- Add a Build action to the pipeline. Select the **CodeBuild** as the build provider.
- Click on **Create a Project** button.
- For the demo we are selecting OS as Amazon Linux 2, Runtime as standard, Image - amazonlinux2-x86_64_standard:4.0, and Runtime Environment as Linux.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/aws/STEP3.webp').default} alt="Image"  className="doc_img"/>

### Step 4: Create a `buildspec.yml` file

- Create a `buildspec.yml` file in the root directory of the repository where the tests are written.

- ### Sample `buildspec.yml` file

```bash
version: 0.2
phases:
  build:
    commands:
      - curl -O http://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
      - chmod +x hyperexecute
      - ./hyperexecute --user <your_user_name> --key <your_access_key> --config <your_yaml_file>
```

- In the **buildspec** specification, choose the first option - **“Use a buildspec file”**.

- Now Click the **“continue to code pipeline”** button and then click on **Next**.

- You can “**Skip deploy stage”** and finally click **“Create Pipeline”** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/aws/STEP4.webp').default} alt="Image"  className="doc_img"/>

### Save the pipeline.

Once the pipeline is created, it will start automatically. The first time the pipeline runs, it will fetch the latest code from your GitHub repository and build your project. The built project will then be deployed to HyperExecute.

**Output**

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/aws/STEP5.webp').default} alt="Image"  className="doc_img"/>
