---
id: tosca-integration-with-hyperexecute-for-sap
title: Tosca Integration for SAP
hide_title: true
sidebar_label: Tosca Integration for SAP
description: This documentation provides a detailed guide on seamlessly integrating Tosca with HyperExecute 
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - tosca
    - tricentis
    - tosca for sap
url: https://www.lambdatest.com/support/docs/tosca-integration-with-hyperexecute-for-sap/
site_name: LambdaTest
slug: tosca-integration-with-hyperexecute-for-sap/
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
          "name": "Tosca Integration with HyperExecute for SAP",
          "item": "https://www.lambdatest.com/support/docs/tosca-integration-with-hyperexecute-for-sap/"
        }]
      })
    }}
></script>

# Tosca Integration for SAP

This documentation provides a detailed guide on seamlessly integrating Tosca with HyperExecute.

## Prerequisite
    
-  To run Tosca, ensure that you have all the required [licences](https://documentation.tricentis.com/tosca/1600/en/content/licensing/lic_administering_licenses.htm).

## Integrate Tosca with HyperExecute

To Integrate Tosca with HyperExecute, follow the below mentioned steps:

### Step 1: Initialize the Tosca Project

- Go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/). Click on the **Projects**.

- Click on the **Setup a New Project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-commander/Step2.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

- Enter your **Project Name**. Click on Continue.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-commander/tosca-sap.png').default} alt="Image" width="1365" height="650" className="doc_img"/>

### Step 2: Manage your License and Credentials

- Enter the **License Details**, i.e. Username and Password with which you want to execute your tests.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-commander/Step4.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

- Now select your **Database Type**. For the demo purpose, we are using Oracle. Choose how you want to establish the connection, i.e, **via Connection Data** or **via Connection String**, to access the common repository associated with your workspace.

    - For demo purposes, we are selecting the **Connection String**. Enter the connection string for your database.

    - Enter the **Workspace Details**, i.e., Username (mandatory) and Password (optional), that you want to use for this project. Click on the **Save** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-commander/Step5.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

### Step 3: Execute Your Project

- Please wait for the discovered execution list to get populated. Now, select the desired tests that you want to execute, and then click on the **Run** button.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-commander/Step6.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

- Now set the total number of **Concurrent Sessions** that you want to run on HyperExecute and click on the **Run** button.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-commander/Step7.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

### Step 4: Check the Logs Status in Dashboard

- Now go to the [**Jobs**](https://hyperexecute.lambdatest.com/hyperexecute/jobs) section and check the results.
<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/tosca/tosca-commander/Step8.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

> Results will get updated in the **Common Repository** once execution is completed on HyperExecute. The live video of running tests can be viewed from the [HyperExecute job-detail](https://hyperexecute.lambdatest.com/hyperexecute/jobs)dashboard.