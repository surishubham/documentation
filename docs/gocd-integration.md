---
id: gocd-integration
title: How to integrate GoCD With LambdaTest
sidebar_label: GoCD Integration
hide_title: true
description: LambdaTest integration with GoCD will help your perform Selenium test automation for your code changes on more than 3000+ real browsers for both mobile and desktop. You can trigger your Selenium testing scripts directly from GoCD instance and they would be executed over your LambdaTest automation dashboard.
keywords:
  - gocd
  - lambdatest
  - gocd integrations
  - gocd pipelines
  - gocd lambdatest
  - gocd integration with lambdatest
  - lambdatest integration with gocd pipelines
  - ci/cd
url: https://www.lambdatest.com/support/docs/gocd-integration-with-lambdatest/
site_name: LambdaTest
slug: gocd-integration-with-lambdatest/
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
          "name": "GoCD Integration",
          "item": "https://www.lambdatest.com/support/docs/gocd-integration-with-lambdatest/"
        }]
      })
    }}
></script>

# GoCD Integration With LambdaTest
***

GoCD offers a free and open-source platform to help you configure robust CI/CD pipelines with ease. The intuitive UI offers an end-to-end view wherein you can visualize the entire migration path to production in a collective view. That way, you can easily pinpoint the inefficient areas to optimize the CI/CD process. By leveraging GoCD, you can achieve faster feedback loops through its modelling constructs which makes your complex CI/CD pipeline looks a lot simpler. You also get features like dependency management & parallel execution to help you deliver better products quicker.

LambdaTest integration with GoCD will help your perform Selenium test automation for your code changes on more than 3000+ real browsers for both mobile and desktop. You can trigger your Selenium testing scripts directly from GoCD instance and they would be executed over your LambdaTest automation dashboard.

## Prerequisites
***

1. Copy the YAML configuration file from our [GitHub repository for GoCD](https://github.com/LambdaTest/nightwatch-gocd-sample/blob/master/nightwatch-gocd-sample.gocd.yaml).

2. **LambdaTest Authentication Credentials**
    Be aware of your LambdaTest authentication credentials i.e. your LambdaTest username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [LambdaTest automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

    * **For Linux/Mac:**

    ---
    $ export LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`
    
    $ export LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

    ---

    * **For Windows:**

    ---
    $ set LT_USERNAME= `{YOUR_LAMBDATEST_USERNAME}`
    
    $ set LT_ACCESS_KEY= `{YOUR_LAMBDATEST_ACCESS_KEY}`

    ---

3. Make sure to install GoCD in your system.

## Configuring GoCD Pipeline For LambdaTest Selenium Grid
***

**Step 1:** Visit your GoCD Dashboard and create a new pipeline by selecting the option to “Use Pipeline as Code”.

<img loading="lazy" src={require('../assets/images/gocd-integration/gocd-1.webp').default} alt="GoCD Integration" width="1344" height="574" className="doc_img"/>

**Step 2:** Scroll-down to the section to “Register Your Pipelines as Code Repo with GoCD” and untick the box for using the same SCM repository.

<img loading="lazy" src={require('../assets/images/gocd-integration/gocd-1-1.webp').default} alt="GoCD Integration" width="1365" height="542" className="doc_img"/>

**Step 3:** Provide the [LambdaTest GitHub repository for GoCD](https://github.com/LambdaTest/nightwatch-gocd-sample) as the repository URL. Test you connection and provide a label for this repository. In our case, we have provided the label as Sample-Pipeline, you may keep something else for your instance.

<img loading="lazy" src={require('../assets/images/gocd-integration/gocd-1-2.webp').default} alt="GoCD Integration" width="1123" height="402" className="doc_img"/>

**Step 4:** After providing the GitHub repository, you will need to Scan it. Hit the highlighted button to Scan repository and you will notice that a respective YAML definition file would be through the repository.

<img loading="lazy" src={require('../assets/images/gocd-integration/gocd-1-3.webp').default} alt="GoCD Integration" width="456" height="229" className="doc_img"/>

**Step 5:** After scanning the repository, you need to scroll to bottom and hit finish. Make sure to specify the username and password under the advanced setting, for private repositories.

<img loading="lazy" src={require('../assets/images/gocd-integration/gocd-1-4.webp').default} alt="GoCD Integration" width="1365" height="598" className="doc_img"/>

**Step 6:** Once you hit the finish button. Under the Config repositories, you will find the details of the repository as specified by you.

<img loading="lazy" src={require('../assets/images/gocd-integration/gocd-1-5.webp').default} alt="GoCD Integration" width="1351" height="609" className="doc_img"/>

**Step 7:** Now, if you visit your GoCD dashboard, you will find the pipeline generated and the job in running state.

<img loading="lazy" src={require('../assets/images/gocd-integration/gocd-1-6.webp').default} alt="GoCD Integration" width="1337" height="578" className="doc_img"/>

**Step 8:** If you open the pipeline and refer to the console then you will notice the current job status as passed.

<img loading="lazy" src={require('../assets/images/gocd-integration/gocd-1-7.webp').default} alt="GoCD Integration" width="1344" height="570" className="doc_img"/>

Great work! You have successfully integrated your GoCD instance with your LambdaTest account. Follow our another documentation, if you wish to configure a private YAML and then integrate your GoCD pipeline with LambdaTest.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href="https://www.lambdatest.com/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">GoCD Integration With LambdaTest</span>
    </li>
  </ul>
</nav>