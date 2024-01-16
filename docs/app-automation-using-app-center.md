---
id: app-center-automation
title: How to automate apps using App Center on LambdaTest
hide_title: true
sidebar_label: App Center For Automation
description: Learn how to configure App Center on LambdaTest platform to run App automation tests on real device cloud.
keywords:
  - App Center
  - Microsoft App Center
  - VS App Center
  - Configuring App Center on LambdaTest
  - Auto upload apps on LambdaTest
  - LambdaTest Cloud Platform
url: https://www.lambdatest.com/support/docs/app-automation-using-app-center/
site_name: LambdaTest
slug: app-automation-using-app-center/
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
          "name": "Migration",
          "item": "https://www.lambdatest.com/support/docs/app-automation-using-app-center/"
        }]
      })
    }}
></script>

# App Test Automation Using App Center
***

Visual Studio App Center is an integrated solution for mobile app development on iOS, Android, Windows, and macOS. It combines a number of mobile development services, such as build, test, distribute, monitoring, diagnostics, etc., into a single integrated cloud platform. By automating the upload process, Visual Studio App Center can ease the manual effort of uploading an app.

In this documentation, learn how to install apps from App Center for automated app testing.

## Prerequisites
***

Getting started with the setup requires access to the following:

1. Access to LambdaTest Real Devices.
2. Access to App Center and permissions to generate API tokens on App Center.

## Step 1 - Generating API Token On App Center
***

Below are the steps to generate the API Token on App Center -

1. Launch App Center. Navigate to your Profile avatar and click **Account Settings**.

<img loading="lazy" src={require('../assets/images/app-center-integration/app-center01.webp').default} alt="cmd" className="doc_img"/>

2. Click on **User API tokens** to generate a token.

<img loading="lazy" src={require('../assets/images/app-center-integration/app-center02.webp').default} alt="cmd" className="doc_img"/>

3. Click on **Add new API token** to add the new token.

<img loading="lazy" src={require('../assets/images/app-center-integration/app-center03.webp').default} alt="cmd" className="doc_img"/>

>**Important**: It’s recommended to provide **Read Only** access.

4. Once you get the API token, click on the Copy icon to copy the generated token. This token will be used in Step 2.

<img loading="lazy" src={require('../assets/images/app-center-integration/app-center04.webp').default} alt="cmd" className="doc_img"/>

## Step 2: Listing All The Apps For The API Token
***

You can get all the Apps (specific to the API token) by using the API call below with the API token you generated in the previous step. 

```js
curl -sX GET "https://api.appcenter.ms/v0.1/apps" \ 
-H "Content-Type: application/json" \ 
-H "X-Api-Token: {your_api_token}"
```

Shown below is the response of the above API call.

```json
[
   {
      "id":"19c6645d-3146-4853-97f4-22b1fc0a3ec4",
      "app_secret":"9bdaef87-c3b7-4b8b-8a64-944bafdd870a",
      "description":null,
      "display_name":"Demo-2",
      "name":"Demo-2",
      "os":"iOS",
      "platform":"Objective-C-Swift",
      "origin":"appcenter",
      "icon_url":null,
      "created_at":"2022-03-31T11:29:39.019Z",
      "updated_at":"2022-03-31T11:29:39.019Z",
      "release_type":"Alpha",
      "owner":{
         "id":"29536631-e7c3-4035-a78e-4040bc96e9ce",
         "avatar_url":null,
         "display_name":"Gaurav Raj",
         "email":"gauravraj@lambdatest.com",
         "name":"gauravraj-lambdatest",
         "type":"user"
      },
      "azure_subscription":null,
      "member_permissions":[
         "manager"
      ]
   },
   {
      "id":"2c90096a-ac95-4911-a545-4b40e4f66b7b",
      "app_secret":"781a8f31-b593-48ce-8c31-497be0da89b5",
      "description":null,
      "display_name":"TodoApp",
      "name":"TodoApp",
      "os":"Android",
      "platform":"Java",
      "origin":"appcenter",
      "icon_url":"https://appcenter-filemanagement-distrib4ede6f06e.azureedge.net/364affef-e00b-4f93-81 d3-5ee4a00755c9/launcher.png?sv=2019-02-02&sr=c&sig=OCEgMuaJlZt2wHqrLp4j8aO9xMT%2BOcy8 X4ty%2B2SKsGo%3D&se=2022-04-11T13%3A28%3A49Z&sp=r",
      "created_at":"2022-03-07T11:44:09.627Z",
      "updated_at":"2022-03-14T12:23:34.342Z",
      "release_type":"Alpha",
      "owner":{
         "id":"29536631-e7c3-4035-a78e-4040bc96e9ce",
         "avatar_url":null,
         "display_name":"Gaurav Raj",
         "email":"gauravraj@lambdatest.com",
         "name":"gauravraj-lambdatest",
         "type":"user"
      },
      "azure_subscription":null,
      "member_permissions":[
         "manager"
      ]
   },
   {
      "......."
   }
]
```

## Step 3: Fetch All The Releases For An App
***

If you have the {name} and {owner.name} (as received in Step 2), you can use the API call below to retrieve all the Release information for a particular app.

```js
curl -X GET "https://api.appcenter.ms/v0.1/apps/{owner.name}/{name}/releases" \ -H "Content-Type: application/json" \ 
-H "X-Api-Token: {your_api_token}"
```

Shown below is the response of the above API call.

```js
[
  {
    "origin": "appcenter",
    "id": 1,
    "short_version": "2.7.50393-r-2022-02-10",
    "version": "50393",
    "uploaded_at": "2022-03-07T11:46:06.590Z",
    "enabled": true,
    "is_external_build": false,
    "file_extension": "apk",
    "destinations": [
      {
        "id": "00000000-0000-0000-0000-000000000000",
        "name": "Collaborators",
        "destination_type": "group"
      }
    ],
    "distribution_groups": [
      {
        "id": "00000000-0000-0000-0000-000000000000",
        "name": "Collaborators"
      }
    ]
  },
  {
    "origin": "appcenter",
    "id": 4,
    "short_version": "2.7.50392-r-2022-01-24",
    "version": "50392",
    "uploaded_at": "2022-03-17T10:44:11.524Z",
    "enabled": true,
    "is_external_build": false,
    "file_extension": "apk",
    "destinations": [
      {
        "id": "00000000-0000-0000-0000-000000000000",
        "name": "Collaborators",
        "destination_type": "group"
      }
    ],
    "distribution_groups": [
      {
        "id": "00000000-0000-0000-0000-000000000000",
        "name": "Collaborators"
      }
    ]
  }
]
```

## Step 4: Fetch The Required App Release Information For An App
***

Using the API call below, use the {name} and {owner.name} (received from Step 2), and the id (received from Step 3) to fetch Release information for a specific App: 

```js
curl -X GET "https://api.appcenter.ms/v0.1/apps/{owner.name}/{name}/releases/{id}" \ -H "Content-Type: application/json" \ 
-H "X-Api-Token: {your_api_token}" 
```

Shown below is the response of the above API call.

```js
{
  "app_name": "BCDE-1",
  "app_display_name": "BCDE-1",
  "app_os": "Android",
  "app_icon_url": "https://appcenter-filemanagement-distrib1ede6f06e.azureedge.net/ad7ca44e-0459-459c-9e de-0c72fa78ae03/launcher.png?sv=2019-02-02&sr=c&sig=eFvMnfD%2B9FdYReu4OiG%2BnqvFkTTdXE LlN0dpoAItqig%3D&se=2022-04-14T12%3A03%3A16Z&sp=r",
  "is_external_build": false,
  "origin": "appcenter",
  "id": 1,
  "version": "50393",
  "short_version": "2.7.50393-r-2022-02-10",
  "size": 13833051,
  "min_os": "5.0",
  "android_min_api_level": "21",
  "device_family": null,
  "bundle_identifier": "org.wikipedia",
  "fingerprint": "6a42317cc91fae15b9847f4bb4745e6f",
  "uploaded_at": "2022-03-07T11:46:06.590Z",
  "download_url": "https://appcenter-filemanagement-distrib3ede6f06e.azureedge.net/bd52eda2-b239-480b-b2 de-25205f705e63/Wikipedia_v2.7.50393-r-2022-02-10_apkpure.com.apk?sv=2019-02-02&sr=c&s ig=i170%2FkTlpX8146XrKVyxQRLiTUiDoPkfJYGOm%2B1UeZM%3D&se=2022-04-09T09%3A58%3A42Z&sp=r ",
  "install_url": "https://appcenter-filemanagement-distrib3ede6f06e.azureedge.net/bd52eda2-b239-480b-b2 de-25205f705e63/Wikipedia_v2.7.50393-r-2022-02-10_apkpure.com.apk?sv=2019-02-02&sr=c&s\nig=i170%2FkTlpX8146XrKVyxQRLiTUiDoPkfJYGOm%2B1UeZM%3D&se=2022-04-09T09%3A58%3A42Z&sp=r ",
  "enabled": true,
  "fileExtension": "apk",
  "release_notes": "",
  "package_hashes": [
    "d1c86bcc8784a35a2ee5ada2112cde3056c2b6fb0bc9ca700af5f2826564fc98"
  ],
  "destinations": [
    {
      "destination_type": "group",
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Collaborators"
    }
  ],
  "destination_type": "group",
  "distribution_groups": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Collaborators"
    }
  ]
}
```

The download_url (For e.g. `https://appcenter-filemanagement-distrib3ede6f06e.azureedge.net/de-25205f705e63/Wikipedia_v2.7.5393-r-2022-02-10_am.apk?sv=2019-&s ig=i170%2FkTlpX%3D&se=202Z&sp=r`) from the above API response will be used to upload your App Release on LambdaTest.

## Step 5: Upload the Release Version Of An App On LambdaTest
***

You can upload the release version of your app on LambdaTest by using the following API call -

```js
curl -u "<username>:<access_key>" \ 
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \ -F "url=<download_url>" \ 
-F "name=<app_name>" 
```

Below is the response of the above cURL request.

```js
{ 
"app_id": "APP100201841649371040473417", 
"name": "name", 
"type": "ios",
"app_url": "lt://APP100201848749371040473417" 
} 
```

Using the `app_url` obtained in the response, you can execute your Appium tests on LambdaTest.

## Step - 6 Executing Your Tests
***

Once your app is successfully uploaded, you can refer to [Getting Started With Appium Testing](https://www.lambdatest.com/support/docs/getting-started-with-appium-testing/) for more information on executing Appium tests on LambdaTest.

***

> That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>24X7 Chat Support</span> or mail us directly at support@lambdatest.com.

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
      App Test Automation Using App Center
      </span>
    </li>
  </ul>
</nav>







