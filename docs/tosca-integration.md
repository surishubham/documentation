---
id: tricentis-tosca-integration
title: Tricentis Tosca Integration With LambdaTest’s Cloud Based Selenium Grid
sidebar_label: Tricentis Tosca Integration
description: Now you can run your Tosca  automation tests  on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - tricentis tosca
  - lambdatest integrations
  - lambdatest integration with applitools
  - tosca integration
  - cross browser testing
  - free cross browser testing tool
url: https://www.lambdatest.com/support/docs/tricentis-tosca-integration-lambdatest-selenium-grid/
site_name: LambdaTest
slug: tricentis-tosca-integration-lambdatest-selenium-grid/
---

LambdaTest provides support with Selenium WebDriver for pacing the execution of your automation test scripts. LambdaTest is a cloud-based, cross browser testing tool, providing a [Selenium Grid](https://www.lambdatest.com/selenium-automation/) of 3000+ browsers and browser versions running through real operating systems to speed up automation testing of your web-app or website. This topic will help you to automate your website testing using Tricentis Tosca on LambdaTest.

This topic will be focusing on:

- Running a sample Tricentis Tosca testcases on LambdaTest Automation.

## Prerequisites For Running Tricentis Tosca Test Cases On Selenium Grid
***
1. Log in to LambdaTest. If you haven’t signed up yet, [click here](https://accounts.lambdatest.com/register).
2. LambdaTest Authentication Credentials:
   Be aware of your LambdaTest authentication credentials i.e. your LambdaTest username, access key and HubURL.You can retrieve them from your [LambdaTest automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.
3. [Download Tosca](https://www.tricentis.com/software-testing-tool-trial-demo/) by logging in to the Tosca website.

## Sample Test Scenario
***
For demonstrating Tosca-LambdaTest integration, we would be considering the following test scenario:

1. Open [LambdaTest Selenium PlayGround](https://www.lambdatest.com/selenium-playground/).
2. Click the “Simple Form Demo” link. 
3. Enter the text “Happy Testing” in the text box.
4. Click the “Get Checked value” button.
5. Verify if the entered text is present under the “Your Message” section.
   <img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_01.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>


## Integrating Tricentis Tosca With LambdaTest

**Step 1:** Launch the Tosca Commander.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_02.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 2:** Click **Create new** . In **Create new workspace**, select **Type of Repository** as **None** and set workspace as **Tosca_Demo**.
<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_03.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 3:** On the successful project creation, click the **Modules** tab, right-click on the panel, then select **Scan -> Application**.
<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_04.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 4:** Open Chrome browser and enter [test URL](https://www.lambdatest.com/selenium-playground/).

**Step 5:** On the **Select Application** screen, select the Chrome browser instance that was open in the earlier step and click **Scan**


<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_05_01.webp').default} alt="Image" width="1365" height="690" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_05.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>


**Step 6:** Now you will be prompted to install Tosca Extension.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_06.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_06_01.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 7:** Click on **Advanced**  in Tosca XScan Window.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_07.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 8:** Click **Select on screen**.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_08.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 9:** Select the **Simple Form Demo** link and Tosca XScan will capture the highlighted element.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_09.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 10:** Click **Finish Screen**.

**Step 11:** In the browser click the **Simple Form Demo** link, navigate to the **Simple Form Page**. ReOpen Tosca XScan ,Click **Select on screen** and  capture required elements for test case.(input text box, "Get Checked value" button and text area to validate)


**Step 12:**  On completion click **Finish Screen**
 All the captured elements are listed under Modules are below:

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_12.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 13:**  Go to TESTCASES and create a folder named **LambdaTest_TestCase**.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_13.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 14:**  Drag the **Modules** created in the earlier steps to the new test case **Details** tab.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_14.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 15:**  To add commonly used modules in the test case, go back to the **Modules** tab. Click **HOME** in the menu bar, then click **Import Subset**.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_15.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 16:**  Select **standard.tsu** file from *<installation_path>/Tosca_Projects/ToscaCommander* folder.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_16.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 17:**  Navigate back to TestCases Details tab, update the test step names:
 - **New TestCase** to  LT_PlayGroudTest_1 
 - **New TestCase_1** to LT_PlayGroudTest_2 

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_17.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>


**Step 18:**  Select the first test case and press **CTRL + T**. This will display a list of all the common modules. Type **OpenUrl** in the search box and select the **OpenUrl** module to add to the test case.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_18.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 19:** Again press **CTRL + T** type **CloseBrowser** in the search box, select  **CloseBrowser** module to add to the test case.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_19.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

Shown below is the final test case view.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_20.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 20:** Enter relevant details in **Value** and **ActionMode** columns for every test step

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_21.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 21:** For adding test configuration, navigate to the  **TestCase -> Test Configuration**, right-click and click **Create Test configuration parameter** button.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_22.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

**Step 22:** Add below name and values in Test Configuration:

**For Web Browser Automation**

<img loading="lazy" src={require('../assets/images/tosca-integration/web-automate.webp').default} alt="Image" width="976" height="531" className="doc_img"/>

**For Mobile Browser Automation (Emulators & Simulators)**

<img loading="lazy" src={require('../assets/images/tosca-integration/mba-virtual.webp').default} alt="Image" width="1230" height="616" className="doc_img"/>

**For Mobile Browser Automation (Real Device)**

* Enter relevant details in **Value** and **ActionMode** columns for every test step.

<img loading="lazy" src={require('../assets/images/tosca-integration/toscaa.webp').default} alt="Image" width="978" height="872" className="doc_img"/>

* Add below name and values in Test Configuration.

<img loading="lazy" src={require('../assets/images/tosca-integration/mba-real.webp').default} alt="Image" width="1252" height="532" className="doc_img"/>


*You can refer our [Desired Capability Generator](https://www.lambdatest.com/capabilities-generator)
 to choose different browser combination.*


**Step 23:** Go to the **Details** tab then Right-click on the test case and select **Run in ScratchBook**. This will launch the test on LambdaTest Platform.

Once execution is completed result window populate in Tosca

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_24.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

Monitor and analyze your test result on the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/).

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_25.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

## How To Use LambdaTest  Custom Capabilities in Tosca
There are few custom capabilities  like network logs,console logs in LambdaTest platform to enable Logs on execution.

To use a WebDriver capability,

- Prefix the capability with "WebDriver_"*, for ex: WebDriver_console. 
- If the name of the capability contains a dot (.), replace this character with double underscore (\__). If the name of the capability contains a colon (:), replace this character with triple underscore (___).


<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_26.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>


With this enabled log when you execute the test case, you can see logs in LambdaTest Plateform once execution completes.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_26_1.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

## Geolocation Testing in Tosca with LambdaTest

Test the performance of your web-app through different geographic locations by setting LamdaTest Capability "geoLocation". Set this Capability in Tosca as "WebDriver_geoLocation"with Value of "IN"as shows below

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_27.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

In LambdaTest Plateform , You can see check the log to validate the Web Application is launched with given GeoLocation.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_28.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>


## Testing Locally Hosted or Privately Hosted Projects
***
To help you perform [cross browser testing](https://www.lambdatest.com) of your locally stored web pages, LambdaTest provides an SSH(Secure Shell) tunnel connection with the name Lambda Tunnel. With Lambda Tunnel, you can execute a test server inside your GitLab CI build a container to perform automated cross browser testing on browsers offered by Selenium grid on LambdaTest. So you make sure how well your changes look, even before your customers.
Curious to know more about Lambda Tunnel?


Follow our documentation on Lambda Tunnel to know it all. OS-specific instructions to download and set up tunnel binary are at the following links.

- [Documentation For Windows User](/docs/local-testing-for-windows/)
- [Documentation For Mac User](/docs/local-testing-for-macos/)
- [Documentation For Linux User](/docs/local-testing-for-linux/)

**Download the binary file of:**

- [Lambda Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
- [Lambda Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
- [Lambda Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Set the Tunnel Capability in Toasca as shown below

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_29.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>

In LambdaTest logs you can validate whether Tunnel is enaled or not from Tosca as shown below.

<img loading="lazy" src={require('../assets/images/tosca-integration/tosca_int_30.webp').default} alt="Image" width="1365" height="650" className="doc_img"/>


In case you face any problems during the integration, or have any other questions, reach out to us on our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span>.


Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_ self" href="https://www.lambdatest.com/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Tricentis Tosca Integration With LambdaTest</span>
    </li>
  </ul>
</nav>
