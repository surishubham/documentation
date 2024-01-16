---
id: playwright-caps
title: Capabilities for Playwright Testing
hide_title: true
sidebar_label: Playwright Capabilities
description: Master Playwright testing with our guide on configuring capabilities! Select browsers & OS, organize tests, adjust desktop resolution, and more for efficient and precise testing outcomes.
keywords:
  - playwright testing
  - playwright e2e testing
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on lambdatest
  - playwright testing lambdatest

url: https://www.lambdatest.com/support/docs/capabilities-for-playwright/
site_name: LambdaTest
slug: capabilities-for-playwright/
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
          "name": "Test Execution Setup",
          "item": "https://www.lambdatest.com/support/docs/capabilities-for-playwright/"
        }]
      })
    }}
></script>

# Capabilities for Playwright Testing
---

The LambdaTest Capability Generator allows you to automatically create the capabilities class needed to run your
Playwright automation scripts on LambdaTest. Here are a few capabilities that you can configure to run your Playwright
tests.

| Key | Expected Values | Description |Capability|
|----|----------|----------|------------|
| browserName| Chrome, Microsoft Edge<br/> <br/>**Playwright Bundled Browsers**: pw-chromium, pw-webkit, and pw-firefox| Specify the browser to test on | `const capability = {"browserName": "pw-webkit"}`                                    | 
| browserVersion | Chrome 83 & above, Edge 83 & above | Specify the browser version to test on                        | `const capability = {"browserVersion": "latest"}` |
| platform | **Windows**: 11, 10, 8, 8.1, 7 <br/><br/> **macOS**: Monterey, Big Sur, Catiline, Mojave| Specify the platform name | `const capability = { "LT:Options": {"platform": "Windows 10",}}`|
| build | Playwright Sample Build | Represent the build number for your test | ```const capability = {"LT:Options": {"build": "<build_name>",}}```                  |
| name| Playwright Sample Test| Represents the name of a test| `const capability = {"LT:Options": {"name": "<test_name>",}}`|
| projectName | Playwright Sample Project| Represents the name of a project | `const capability = {"LT:Options": {"projectName": "<project_name>",}}`|
| tags| ["tag1", "tag2", "tag3"]| Group your Playwright tests | ``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}``|
| buildTags| ["build1", "build2","build3"]| Group your Playwright builds| `const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |
| resolution| String, **Default value**: 1920x1080 <br/> <br/> **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536` <br/><br/> **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080` | Specifying your desktop resolution before initiating the test | `const capabilities = { "LT:Options": {"resolution": "2048x1536",}}`|
| projectName| My Test| Represent the name of your project| `const capability = { "LT:Options": {"projectName": "<project_name>",}}`|
| network| true/false| Enable network logs| `const capability = { "LT:Options": {"network": true,}}`|
| console| true/false| Enable browser console logs| `const capabilities = { "LT:Options": {"console": true,}}`|
| video| true/false| Enable video recording of the entire screen| `const capability = { "LT:Options": {"video": true,}}`|
| visual| true/false| Captures screenshot for every command| `const capability = { "LT:Options": {"visual": true,}}`|
| tunnel| true/false| Enable tunnel for local testing| `const capability = { "LT:Options": {"tunnel": true,}}`|
| tunnelName | true /false | Specify tunnel name | `const capability = { "LT:Options": {"tunnelName": "<tunnel_name>",}}`|
| geoLocation | AR (Argentina) | Specify country code | `const capability = { "LT:Options": {"geoLocation": "AR",}}`|
| idleTimeout | number| Specifies the timeout of the commands in seconds. <br /><br /> <b>Default value:</b> 300 <br /><br /> <b>Max value:</b> 1800<br /><br /> If a value greater than 1800 is added, idleTimeout will be set to 1800.| `const capability = { "LT:Options": {"idleTimeout": "<number>",}}`|


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
       Capabilities for Playwright
      </span>
    </li>
  </ul>
</nav>
