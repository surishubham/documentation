---
id: asana-integration
title: Asana Integration For Easy Browser Testing | LambdaTest
hide_title: true
sidebar_label: Asana Integration
description: With LambdaTest - Asana integration, now you can mark your bug to Asana dashboard directly from LambdaTest while performing testing.
keywords:
  - LambdaTest Asana integration
  - How to integrate Asana with LambdaTest
  - bug management tools in LambdaTest
image: /assets/images/og-images/default-user-image.png
url: https://staging.lambdatest.com/support/docs/asana-integration/
site_name: LambdaTest
slug: asana-integration/
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
          "name": "Asana Integration",
          "item": "https://www.lambdatest.com/support/docs/asana-integration/"
        }]
      })
    }}
></script>

# Asana Integration
***

> Asana is a popular tool for teams following Agile methodology as a part of their Software Development Life Cycle. With Asana, you can coordinate all your team’s work by eliminating roadblocks and pinpointing risks. It offers a free flowing dashboard for sprint planning. Allowing everyone to acknowledge who is doing what and when! You can manipulate tasks freely from one state to another. You can also set out ambitious goals and create a path towards achieving it by different tasks displayed on the dashboard.

The LambdaTest Asana Integration allows you to create a task directly to your specified Asana dashboard from LambdaTest platform. Share your UI observations and input with your teammates anytime, by capturing a screenshot, even in the middle of your test session. You can annotate the screenshot & highlight your issue or input. The fields populated by you when marking as bug through LambdaTest are displayed as information on Asana for that testing instance.

**Asana Integration with LambdaTest, like all of the integrations to 3rd party applications, is available for freemium as well as premium plan.**

## How To Integrate Asana With Your LambdaTest Account?

* * *

**Step 1:** Login to your LambdaTest account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **'ADD'** under the block that says 'Asana'.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-1.webp').default} alt="asana-integration" width="1341" height="605" className="doc_img"/>

**Step 4:** If you are already logged into **Asana**, you'll be asked to grant permission to LambdaTest for accessing your user-owned resources.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-2.webp').default} alt="asana-integration" width="1365" height="638" className="doc_img"/>

**Step 5:** If you are not already logged in, then you will be redirected to a page where you can do so. Provide your login crendentials. You can even login using your **Google account**.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-2.webp').default} alt="asana-integration" width="1365" height="638" className="doc_img"/>

---

* **Why we ask for your login credentials?**

Asana APIs uses OAuth 2.0's [authorization code grant flow](https://tools.ietf.org/html/rfc6749#section-4.1) for generating access tokens on user's behalf. It can also communicate with API from the command line with the help of Personal Access Token.

* **What is a Personal Access Token?**

In scenarios where OAuth is excessively utilized, Personal Access Tokens comes to aid in accessing the API. While generating a token, make sure you provide a description that is easy to remember, as your Personal Access Token will be derived from it. Treat this token just as you would treat your own password! Access tokens are strings with authorization key required to access an API. They are issued to the client server and are usually opaque. They are used for requesting access to protected, user-specific resources. Access tokens are vital from a security point of view & can be generated in different formats, depending upon security requirements specified on the resource server.

---

**Step 7:** If you are logging into **'Asana'** for the first time, then you will be asked to choose teams concerned to your organizations. This is optional, you can skip and add teams later as well.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-integration-4.webp').default} alt="asana-integration" width="298" height="702" className="doc_img"/>

**Step 8:** That's it! Go to Integrations again and you will be able to notice a green tick indicating that Asana is successfully added.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-3.webp').default} alt="asana-integration" width="1343" height="615" className="doc_img"/>


## How To Log Your First Bug Through Asana Integration?

* * *

> **Note:** If you are using Asana for the first time, then make sure to create a project for yourself. It is a pre-requisite in order to push screenshots from your LambdaTest account.

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking "**Real Time Testing**" option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit '**Start**'.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-4.webp').default} alt="asana-integration" width="1342" height="575" className="doc_img"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for capturing a screenshot of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-5.webp').default} alt="asana-integration" width="1328" height="619" className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor**. Once you are done highlighting the bug, click on the button that says **"Mark as Bug"**.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-6.webp').default} alt="asana-integration" width="1320" height="618" className="doc_img"/>


**Step 5:** After clicking on **"Mark as Bug"** button a form would open up. Fill the fields as per your requirement.

* You can choose from your **Workspaces** to which you would like to share.
* You can choose from your **Projects** as well.
* You can assign the bug to a colleague by populating the field **'Assignee'**.
* You also get to post a **description** to help relate the cause of the issue or the task.


At the bottom of the form you will find a button **"Create Issue"**.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-integration-9.webp').default} alt="asana-integration" width="1347" height="610" className="doc_img"/>

**Step 6:** After you click on **"Create Issue"**, you will be able to observe it being successfully marked through a single click effort. You will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. After few seconds you will be notified with a prompt message "**Bug successfully marked**" indicating that the screenshot has been pushed to your workspace.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-integration-10.webp').default} alt="asana-integration" width="347" height="75" className="doc_img"/>

Login to your Asana workspace and you will be able to notice the logged issue right away! All the data you provided through Lambdatest would already be presented in it. LambdaTest automatically includes test environment details and related screenshots in the screenshot as attachments.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-integration-11.webp').default} alt="asana-integration" width="1357" height="620" className="doc_img"/>

You can set a due date to the task in Asana to help you organize your tasks easily.

## How To Remove Asana Integration?

* * *

> You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **Remove** your current integration. Here is how you can do that.

**Step 1:** Login to your LambdaTest account.

**Step 2:** Select 'Settings' from the left navigation menu bar & click on 'Integrations'. This will guide you to a screen where you will find 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **'Remove'**. You can find the Revoke button right under the **'Asana'** block which would be highlighted with a green tick.

<img loading="lazy" src={require('../assets/images/asana-integration/asana-7.webp').default} alt="asana-integration" width="1343" height="615" className="doc_img"/>

---

That was all you need to know for LambdaTest + Asana Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing!

---

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
        Asana Integration
      </span>
    </li>
  </ul>
</nav>