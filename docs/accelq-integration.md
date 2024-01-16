---
id: accelq-integration
title: ACCELQ Integration
hide_title: true
sidebar_label: ACCELQ Integration
description: Accelerate your end-to-end digital testing journey with LambdaTest and ACCELQ.  Automate your web and mobile apps across 3000+ real browsers, devices and operating system combinations.
keywords:
  - lambdatest integration with accelq
  - lambdatest and accelq integration 
  - accelq integration
url: https://www.lambdatest.com/support/docs/accelq-integration/
site_name: LambdaTest
slug: accelq-integration/
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
          "name": "ACCELQ Integration",
          "item": "https://www.lambdatest.com/support/docs/accelq-integration/"
        }]
      })
    }}
></script>

# ACCELQ Integration
***

ACCELQ is an AI-powered Codeless automation testing and management platform. It enables you automate web, mobile, API, database, and packaged applications.

By integrating LambdaTest with ACCELQ, you can perform web and mobile app automation on an online device farm of 3000+ real browsers, devices, and OS combinations, and accelerate your end-to-end digital testing efforts.

## Prerequisites
---

1. Make sure you have a LambdaTest account.  If you don't have an account yet, [sign up for free](https://accounts.lambdatest.com/register).

2. To integrate LambdaTest with ACCELQ, you will need a LambdaTest username and access key.

<img loading="lazy" src={require('../assets/images/accelq-integration/key.png').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

3. Install the ACCELQ Agent Dashboard.

## Integrating LambdaTest From ACCELQ Agent Dashboard
---

1. Open your ACCELQ Agent Dashboard.

2. Once you are in the target agent, click **Edit Configuration**.

<img loading="lazy" src={require('../assets/images/accelq-integration/accel_2.png').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

3. You need to use the external device provider for web, mobile, or both platforms. For example, if you wish to perform web browser automation, select **Use external device provider for Web**.

<img loading="lazy" src={require('../assets/images/accelq-integration/accel_1.png').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

4. Now enter your LambdaTest username and access key and save/restart the ACCELQ Agent.

### Executing The Tests

1. Once the agent is operable, you can choose browser, device and OS combinations from the list that LambdaTest support.

2. From the Run modal, select the agent from the AGENT/HOST section. After that, choose browser and device from the corresponding sections.

## Capturing Views For Mobile Automation
---

1. From the **Record View** dialog box, click **Cloud Provider**.

2. Select *LambdaTest* from the **Provider** dropdown. Enter your LambdaTest username and access key, and click **Authenticate**.

<img loading="lazy" src={require('../assets/images/accelq-integration/accel_3.png').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

3. Once the authentication is successful, you can select the real devices that is fetched from the LambdaTest platform.

4. In the **App Url**, provider your LambdaTest App URL.

5. Now click **Start Capture** and it will launch your test session on the selected device.

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
        ACCELQ Integration
      </span>
    </li>
  </ul>
</nav>







