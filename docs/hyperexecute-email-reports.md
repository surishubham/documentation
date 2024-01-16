---
id: hyperexecute-email-reports
title: Receive Job Reports and Artifacts via Email 
hide_title: true
sidebar_label: Receive Job Reports and Artifacts via Email
description: Streamline testing with HyperExecute Email Reports! Learn how to effortlessly automate test runs and receive detailed reports. Boost efficiency today.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-email-reports/
site_name: LambdaTest
slug: hyperexecute-email-reports/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-email-reports/"
        }]
      })
    }}
></script>

# Receive Job Reports and Artifacts via Email

Downloading Job Reports and Artifacts manually from the HyperExecute UI can be a time-consuming and repetitive task. To address this pain point, HyperExecute now provides the convenience of receiving Job Reports and Artifacts directly to your specified email addresses. This eliminates the need for manual downloads, allowing you to access critical job information instantly and effortlessly. Embrace the efficiency of automated delivery and spend less time navigating the UI and more time focusing on your development tasks.

## YAML Configuration

To receive the Artifacts and Reports via mail, you will have to add the `email` flag with a `to` tag to select the email IDs where the report or artifacts should be sent. The example added below shows you how to add your email IDs:

```bash
email:
  to: 
    - <your_email_id@example.com>
    - <another_email_id@example.com>
```

You can also use the `currentUser` and `org` tag to send the reports to the email ID of your choice.

- **currentUser**: This tag will allow you to send the report to the email ID associated with your LambdaTest account.

```bash
email:
  to: 
    - currentUser
```

- **org**: This tag will allow you to send the report to all the email IDs associated with your organization on LambdaTest.

```bash
email:
  to:
    - org 
```

## How to receive your Artifacts via Email?

Follow the below mentioned steps to receive your Artifacts via email:

**Step 1:** You need to mention the `email` flag along with the `to` tag under the `uploadArtifacts` flag in the YAML file configuration.

> **NOTE:** You can also add a separate email ID for each report generated, as mentioned below in the YAML code.

```bash
uploadArtifacts:
  - name: Reports 1
    path:
      - ProtractorTestReport.html
      - xmlresults.xml
    email:
      to: 
        - <your_email_id@example.com>
        - <another_email_id@example.com>
        
  - name: Reports 2
    path:
      - ProtractorTestReport.html
      - xmlresults.xml
    email:
      to: 
        - currentUser
        
  - name: Reports 3
    path:
      - ProtractorTestReport.html
      - xmlresults.xml
    email:
      to: 
        - org
```

## How to receive your Job Report via Email?

Follow the below mentioned steps to receive your Job Reports via email:

**Step 1:** Set the `report` flag to `true` in the HyperExecute YAML.

**Step 2:** Make sure to check the `location`, `type` and `frameworkName` fields in the `partialReports` flag are configured correctly.

**Step 3:** Add the `email` flag with `to` tag in the YAML file configuration:

```bash
report: true
partialReports:
  frameworkName: testng
  location: target/surefire-reports/html
  type: html
  email:
    to: 
      - <your_email_id@example.com>
      - <another_email_id@example.com>
```

## Correct format of entering the Email IDs

The Email IDs that you enter must be valid. You can enter your email IDs in the formats mentioned below.

```bash
- John Doe <johndoe@example.com>
- John <johndoe@example.com>
- johndoe@example.com
```

However, if your email IDs are added in an unsupported format, the feature will not work. A few examples of unsupported email ID formats are added below.

```bash
- John Doe johndoe@example.com>
- John <<johndoe@example.com>
- John johndoe@example.com
- John Doe
```

Now that you have added your email IDs successfully, you can access your job reports. Download the report from the email, and get all the information that you need. Alternatively, you can also open the clickable link in the email and view the report on your browser.

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
        Downloading Job Reports via Email ID
      </span>
    </li>
  </ul>
</nav>