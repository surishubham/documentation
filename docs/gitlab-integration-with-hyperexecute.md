---
id: gitlab-integration-with-hyperexecute
title: GitLab Integration
hide_title: true
sidebar_label: GitLab
description: LambdaTest integrates with GitLab Pipeline to boost your go-to market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
  - lambdatest integrations
  - lambdatest integrations with ci/cd tools
  - ci/cd tools
  - continuous integration,continuous delivery
  - continuous integration tools
  - gitlab ci
url: https://www.lambdatest.com/support/docs/gitlab-integration-with-hyperexecute/
site_name: LambdaTest
slug: gitlab-integration-with-hyperexecute/
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
          "name": "GitHub Actions Pipeline Integration",
          "item": "https://www.lambdatest.com/support/docs/gitlab-integration-with-hyperexecute/"
        }]
      })
    }}
></script>

# GitLab Integration with HyperExecute
* * *

GitLab is a web-based Git repository that provides free open and private repositories, issue-following capabilities, and wikis. It is a complete DevOps platform that enables professionals to perform all the tasks in a project—from project planning and source code management to monitoring and security.

This document will show you how to integrate GitLab Pipeline with HyperExecute to greatly shorten your test cycles.

## How To Integrate GitLab Pipeline with Hyperexecute

***

To integrate GitLab Pipeline with HyperExecute, follow the below steps: 
### 1. Log into your GitLab account


### 2. Create a New Project

To create a new project and connect your external repository to GitLab CI/CD, click the **Run CI/CD for external repository** tab on the bottom right. 
 
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/create_gitlab_project.png').default} alt="Create New Project" width="" height=""/>

### 3. Connect Your External Repository:

On GitLab, you can either connect your external repository from [GitHub](https://www.github.com) or by URL. In this example, we will connect our external repository by URL. 

To connect your external repository by URL, fill in the required information in the form below and click the **Create Project** button at the bottom of the page.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/connect_gitlab_by_url.png').default} alt="Create New Project" width="" height=""/>


### 4. Configure the Pipeline
- To configure the new pipeline that you just created, click the **Configure Pipeline** button in the center of the page.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/configure_gitlab.png').default} alt="Create New Project" width="" height=""/>

<p></p>

- Click on the **+Set up CI/CD** button as shown below.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/set_up_cicd_gitlab.png').default} alt="Create New Project" width="" height=""/>
<p></p>

- Create a new `.gitlab-ci.yml` file at the root of the repository.

Below is a sample of GitLab YAML created for your reference:

```
stages:          # List of stages for jobs, and their order of execution
  - build
  - test
  - deploy

build-job:       # This job runs in the build stage, which runs first.
  stage: build
  script:
    - echo "Compiling the code..."
    - echo "Compile complete."

unit-test-job:   # This job runs in the test stage.
  stage: test    # It only starts when the job in the build stage completes successfully.
  script:
    - echo "Running unit tests... This will take about 60 seconds."
    - sleep 60
    - echo "Code coverage is 90%"

lint-test-job:   # This job also runs in the test stage.
  stage: test    # It can run at the same time as unit-test-job (in parallel).
  script:
    - echo "Linting code... This will take about 10 seconds."
    - sleep 10
    - echo "No lint issues found."

deploy-job:      # This job runs in the deploy stage.
  stage: deploy  # It only runs when *both* jobs in the test stage complete successfully.
  environment: production
  script:
    - echo "Deploying application..."
    - echo "Application successfully deployed."
```

### 5. Run Your Job
- To commit your changes and run your job, click the **Commit Changes** button.
<p></p>
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/new_yaml_file.png').default} alt="Create New Project" width="" height=""/>

<p></p>

**Below is an example of a Hyperexecute job that was triggered through the above pipeline:**
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/ci-cd/gitlab/successful_gitlab.png').default} alt="Create New Project" width="" height=""/>

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