---
id: azure-scim
title: Azure AD Scim User Provisioning
hide_title: true
sidebar_label: Azure AD
description: Integrating LambdaTest SCIM with Azure AD 
keywords:
    - LambdaTest SCIM
url: https://www.lambdatest.com/support/docs/scim/azure/
site_name: LambdaTest
slug: scim/azure/
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
          "name": "Scim",
          "item": "https://www.lambdatest.com/support/docs/scim/"
        }]
      })
    }}
></script>




#   LambdaTest SCIM Auto User Provisioning with Azure AD

* * *
## Prerequisites ##
---
Integrate SCIM With LambdaTest:

* You will need an Enterprise plan with LambdaTest.
* SSO must be already integrated. Please complete [LambdaTest SSO & Azure AD Integration](/support/docs/sso-azure-integration/)

## Integrating SCIM with Azure AD
**Step 1:** Sign in to your LambdaTest account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/dashboard.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:**  Head to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:**  Head to the **Authentication and SSO** tab and click and copy the **SCIM Base URL and Bearer Token** option.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/scim-base-url.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 4:** Sign in to the [Azure portal](https://portal.azure.com). Select Enterprise Applications, then select All applications.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/enterprise-applications.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 5:** In the applications list, select application used for LambdaTest SSO setup
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/search-lambdatest-sso.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 6:** Select the Provisioning tab.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/provisioning-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


**Step 7:** Under the Admin Credentials section, input your LambdaTest SCIM Base URL `https://auth.lambdatest.com/api/scim?aadOptscim062020`  and Bearer Token retrieved earlier in Step 3. Click Test Connection to ensure Azure AD can connect to LambdaTest. If the connection fails, ensure your LambdaTest account has Admin permissions and try again.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/credentials.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 8:** Under the Mappings section, select Synchronize Azure Active Directory Users.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/mapping-tab.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 9:** Review the User Attribute mappings:
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/attribute-mapping.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

userName, Active, name.givenName, name.familyName are required attributes

**urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole**: Custom attribute used to set LambdaTest Organization Role for Users, If this attribute is not mapped **User** role would be set by default. Allowed values are (Admin/Guest/User)

For filtering only **userName** attribute is supported and must be selected for filtering, click edit on userPrincipalName and make sure **Apply this mapping** is set to **Always**

<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/userName.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


**Step 10:** To enable the Azure AD provisioning service for LambdaTest, change the Provisioning Status to On in the Settings section.
<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/provisioning-on.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 11:** When you are ready to provision, click Save.

This operation starts the initial synchronization cycle of all users in Scope in the Settings section. The initial cycle takes longer to perform than subsequent cycles, which occur approximately every 40 minutes as long as the Azure AD provisioning service is running.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/azure-ad/save.png').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>



> That's all you need to know about LambdaTest SCIM Auto User Provisioning with Azure AD.In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@lambdatest.com](mailto:support@lambdatest.com).


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
        Single Sign On
      </span>
    </li>
  </ul>
</nav>