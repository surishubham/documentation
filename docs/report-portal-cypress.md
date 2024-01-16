---
id: report-portal-cypress
title: ReportPortal.io Integration With LambdaTest For Cypress
sidebar_label: Report Portal IO Integration For Cypress
description: This article will guide you on how to integrate the LambdatTest platform with Report Portal platform for running your Cypress automation tests.
keywords:
  - lambdatest integrations
  - report portal io
  - reportportal for cypress
  - lambdatest cypress with report portal io
  - cypress automation
  - lambdatest integration with report portal
  - cross browser testing
  - free cross browser testing tool
url: https://www.lambdatest.com/support/docs/applitools-integration-with-lambdatest/
site_name: LambdaTest
slug: report-portal-cypress/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

---

This article will guide you on how to integrate the **LambdaTest** platform with **ReportPortal.io** platform for running your **Cypress** automation tests. Before you can get started, make sure you have an account on [ReportPortal.io](http://reportportal.io/).

> By default, the LambdaTest **Cypress-Multi-Reporter** mechanism generates **mochaawesome**. To override it with some other reporting options (report portal in this case), you have to create a different file to define the reporting configuration.

## Steps To Integrate

---

- Navigate to [ReportPortal.io](http://reportportal.io/) and login into your account. Then open your **Report Portal IO Profile**.

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report1.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Copy the Report Portal Credentials

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report2.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Open your Cypress project and create a new file for defining report portal configuration/credentials

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report3.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Define the file name in the “`reporter_config_file`“ capability of `lambdatest-config.json` file as mentioned in the below screenshot

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report4.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Define the **reportportal.io** dependency (`@reportportal/agent-js-cypress`) in your **lambdatest-config.json** or **package.json** file

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report5.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

- Integration is now done, open the Dashboard to see the results.

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report6.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  ***

  <img loading="lazy" src={require('../assets/images/report-portal-cypress/report7.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

> That’s all! you have successfully integrated **ReportPortal.io** and **LambdaTest** for running your **Cypress** tests. In case you have any questions or need any additional information, you could reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@lambdatest.com.

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
       Report Portal IO Integration For Cypress
      </span>
    </li>
  </ul>
</nav>
