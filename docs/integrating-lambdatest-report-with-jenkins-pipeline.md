---
id: lambdatest-report-with-jenkins-pipeline
title: Integrate LambdaTest Report With Jenkins Pipeline
hide_title: true
sidebar_label: Integrate LambdaTest Report
description: Learn how to integrate LambdaTest Report with Jenkins Pipeline.
keywords:
  - jenkins 
  - freestyle project 
  - lambdatest 
  - jenkins integration 
  - lambdatest integration with jenkins 
  - jenkins freestlye
url: https://www.lambdatest.com/support/docs/integrating-lambdatest-report-with-jenkins-pipeline
site_name: LambdaTest
slug: integrating-lambdatest-report-with-jenkins-pipeline/
---
# Integrating LambdaTest Report With Jenkins Pipeline
---

This documentation provides a comprehensive guide on how to integrate LambdaTest Report with your Jenkins Pipeline for web and app test automation.

> **Note**: Before you proceed, make sure to integrate [LambdaTest Plugin for Jenkins](/docs/jenkins-with-lambdatest/).

1. Login to your Jenkins account. From the left menu, navigate to **New Item**.

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/new_item.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

2. Enter the Item name, select **Pipeline** and click **OK**. 

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/ok.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

It will route you to a Configuration dashboard. 

4. From the left menu, click **Pipeline**.

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/pipeline.png').default} alt="Image" width="1024" height="483" className="doc_img img_center"/> <br/>

5. In the **Script** field, enter your Jenkins pipeline script and click **Pipeline Syntax**.

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/enter_script.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

6. From the *Sample Step* dropdown, select `lambdaTestReportPublisher:LambdaTest Pipeline Report`.

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/reportdrop.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

7. Select either of the options: *Automation* or *App Automation* from the **Select Product** dropdown.

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/automation.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

8. After selecting the product, click **Generate Pipeline Script** and copy the generated pipeline syntax.

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/generatedsyntax.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

9. To initiate the steps for LambdaTest Report creation, copy and paste the pipeline syntax in the Stage section of your Jenkins pipeline script. After that, click **Save** or **Apply**.

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/save.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

10. To initiate the build process, navigate to the left menu and select **Build Now**. This will start the build process. 

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/buildnow.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

11. Upon successful completion of the build process, click on the corresponding build. 

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/build.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

12. To view the test report, click on the **LambdaTest Pipeline Report**.

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/pipelinereport.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> <br/>

The test report will show up, containing build details such as **Name**, **Status**, **Browser/Device**, **OS**, and **Duration**. 

<img loading="lazy" src={require('../assets/images/lambdatestreport-jenkins/generatedreport.png').default} alt="Image" width="1919" height="900" className="doc_img img_center"/> 






