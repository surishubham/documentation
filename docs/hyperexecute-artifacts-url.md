---
id: hyperexecute-artifacts-url
title: Construct URLs for your Artifacts
hide_title: true
sidebar_label: Test Artifact Management
description: Efficiently manage and access your HyperExecute Artifacts with our detailed guide! Learn to navigate, construct URLs, and apply filters for streamlined artifact retrieval and viewing.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-artifacts-url/
site_name: LambdaTest
slug: hyperexecute-artifacts-url/
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
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-artifacts-url/"
        }]
      })
    }}
></script>

# Test Artifacts Management

HyperExecute now allows you to access your _Artifacts_ directly from the HyperExecute UI and create URLs for them.

***

## Navigating Artifacts

To view or download your Artifacts, click the **Artifacts** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/0.png').default} alt="Image"  className="doc_img"/>

### For a Single file

If you only have one file as an _Artifact_, then a preview of the file will be opened on your browser. 

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/1.png').default} alt="Image"  className="doc_img"/>

### For Multiple files

If you have multiple files as an _Artifact_, then you will get an option to download all the files directly.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/4.png').default} alt="Image"  className="doc_img"/>

## Managing Test Artifacts URL

To make the most of this feature, follow the steps below.

> **Prioritize**: To access your _Artiacts_ for a particular _Job ID_, they must have a name.

### 1. Constructing the URL

The URL to view an _Artifact_ in a standard job is:

`https://hyperexecute.lambdatest.com/artifact/view/<job-id>?artifactName=<artifact-name>`

- Insert the **_Job ID_** of your test and the name of your _Artifact_ in place of the `<job-id>` and `<artifact-name>` placeholder values.
    
- This URL will take you to a page where you can access the _Artifact_ and its contents.

For example, if you want to access the _Artifacts_ for a job with _Job ID_: `2d835a95-e7ea-4ea7-83e8-608c2f71d95c`, and the name of your _Artifact_ is `ExecutionSnapshots`, then your URL should be:

`https://hyperexecute.lambdatest.com/artifact/view/`**2d835a95-e7ea-4ea7-83e8-608c2f71d95c**`?artifactName=`**ExecutionSnapshots**

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/3.png').default} alt="Image"  className="doc_img"/>

***

### 2. Additional Filters

You can also use this feature to cycle through the files in your _Artifacts_.

**1. `filter=*.log`:** You can filter through all of your files by adding this at the end of your URL. However, you will have to insert the entire path of your _Artifacts_ folder or the names of the folder you want to use the filter in.  
      
- For example, if you want to filter through the `.html` files of a folder called `site` with the path `/target/site/`, for the same job that was used above, then your URL will be:

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&`**filter=target/site/*.html**

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/4.png').default} alt="Image"  className="doc_img"/>

***

**2. `view=flat`:** If you add this at the end of the Artifact URL, then you will be able to view your artifacts in a list instead of a tree structure.

- For example, if you want to view the results of the filter used above in a flat manner, then your URL will be:  

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&filter=target/site/*.html&`**view=flat**

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/5.png').default} alt="Image"  className="doc_img"/>

***

**3. `&taskId=<task-id>`:** If you want to access the Artifacts for a particular task, then add this in your URL.  

- For example, if you want to view the _Artifacts_ for a task with _Task ID_ `df8604cf-7af2-48b6-903d-786028078640` for the same job that was used above, then your URL will be:  

`https://hyperexecute.lambdatest.com/artifact/view/2d835a95-e7ea-4ea7-83e8-608c2f71d95c?artifactName=ExecutionSnapshots&`**taskId=2731df9f-bc9f-4fbc-85c4-fe675aeffeb7**

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/6.png').default} alt="Image"  className="doc_img"/>

***

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
        Construct URLs for Your Artifacts
      </span>
    </li>
  </ul>
</nav>