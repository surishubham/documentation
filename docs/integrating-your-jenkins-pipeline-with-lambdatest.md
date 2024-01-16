---
id: integrating-your-jenkins-pipeline-with-lambdatest
title: Integrating Your Jenkins Pipeline With LambdaTest
hide_title: true
sidebar_label: Integrating Your Jenkins Pipeline With LambdaTest 
description: LambdaTest now integrates with Jenkins pipeline to boost your go-to market delivery. Perform automated cross browser testing with LambdaTest to ensure your development code renders seamlessly through an online Selenium grid providing 3000+ real browsers running through machines.
keywords:
    - lambdatest integrations
    - lambdatest integrations with ci/cd tools
    - ci/cd tools
    - continuous integration
    - continuous delivery
    - continuous integration tools
    - jenkins pipeline 
image: /assets/images/og-images/JPG-4.jpg
url: https://www.lambdatest.com/support/docs/integrating-your-jenkins-pipeline-with-lambdatest/
site_name: LambdaTest
slug: integrating-your-jenkins-pipeline-with-lambdatest/
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
          "name": "Jenkins Pipeline",
          "item": "https://www.lambdatest.com/support/docs/integrating-your-jenkins-pipeline-with-lambdatest/"
        }]
      })
    }}
></script>

# Integrating Your Jenkins Pipeline With LambdaTest 

* * *

Jenkins Pipeline is also referred to as "Pipeline" offers a suite of plugins to help integrate your continuous delivery pipeline into Jenkins. Jenkins Pipeline does so with the help of Pipeline DSL(Domain Specific Language) syntax that facilitates easy modelling of even the most complex delivery pipeline.

## Prerequisites For Configuring Jenkins Pipeline With LambdaTest

* * *

1.  Jenkins 2.X or greater version.
2.  A Jenkins User with root access.
3.  Ensure you have the Pipeline plugin, although, it is displayed under the "suggested plugins" during the post-installation setup of Jenkins.
4.  **LambdaTest Authentication Credentials**

Be aware of your LambdaTest authentication credentials i.e. your LambdaTest username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your **[LambdaTest automation dashboard](https://automation.lambdatest.com)** by clicking on the key icon near the help button.

*   For Linux/Mac:

    ```javascript
    $ export LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
    $ export LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```

*   For Windows:

    ```javascript
    $ set LT_USERNAME= {YOUR_LAMBDATEST_USERNAME}
    $ set LT_ACCESS_KEY= {YOUR_LAMBDATEST_ACCESS_KEY}
    ```

## Setting Up Jenkins Pipeline

* * *

You can find the Jenkins file for the Pipeline [here](https://github.com/LambdaTest/nightwatch-selenium-sample/blob/master/Jenkinsfile) or you can find the code for the Pipeline below. Below is the code for the Jenkins Pipeline.

```javascript
#!/usr/bin/env groovy

node {
    withEnv(["LT_USERNAME=Your LambdaTest UserName",
    "LT_ACCESS_KEY=Your LambdaTest Access Key",
    "LT_TUNNEL=true"]){

    echo env.LT_USERNAME
    echo env.LT_ACCESS_KEY 

   stage('setup') { 

      // Get some code from a GitHub repository
    try{
      git 'https://github.com/LambdaTest/nightwatch-selenium-sample.git'

      //Download Tunnel Binary
      sh "wget https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip"

      //Required if unzip is not installed
      sh 'sudo apt-get install --no-act unzip'
      sh 'unzip -o LT_Linux.zip'

      //Starting Tunnel Process 
      sh "./LT -user ${env.LT_USERNAME} -key ${env.LT_ACCESS_KEY} &"
      sh  "rm -rf LT_Linux.zip"
    }
    catch (err){
      echo err
   }

   }
   stage('build') {
      // Installing Dependencies
      sh 'npm install'
    }

   stage('test') {
          try{
          sh './node_modules/.bin/nightwatch -e chrome,edge tests'
          }
          catch (err){
          echo err
          }  
   }
   stage('end') {  
     echo "Success" 
     }
 }
}
```

Refer to our [Github sample repository](https://github.com/LambdaTest/nightwatch-selenium-sample). Now, follow the below steps for the setup. 

**Step 1:** Create a new project for Pipeline by going to Jenkins --> New Item. <img loading="lazy" src={require('../assets/images/uploads/jenkins-pipeline-1.webp').default} alt="Jenkins" width="1896" height="216" className="doc_img"/>

 **Step 2:** Select the Pipeline.
  <img loading="lazy" src={require('../assets/images/uploads/jenkins-pipeline-2.webp').default} alt="jenkins pipeline" width="1902" height="904" className="doc_img"/> 
  
  **Step 3:** Scroll down to Advanced Project Options. Paste the Code in the code pane or fetch it via SCM & hit the **Save** button. <img loading="lazy" src={require('../assets/images/uploads/jenkins-pipeline-3.webp').default} alt="Jenkins save button" width="1919" height="906" className="doc_img"/>
   **Note:** To run on the tunnel, Either you can use LT_TUNNEL Environment variable to set the tunnelling capability or you can pass in the code. Instructions on the tunnel are written in Repo Readme file.

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
        Jenkins Pipeline
      </span>
    </li>
  </ul>
</nav>