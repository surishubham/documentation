---
id: analytics-modules-test-intelligence-command-logs-analytics
title: Command Logs Analytics with Test Intelligence
sidebar_label: Command Logs Analytics
description: A Explore LambdaTest's powerful Analytics Modules for comprehensive test intelligence and command logs analytics. Elevate your testing efficiency today.
keywords:
  - analytics
url: https://www.lambdatest.com/support/docs/analytics-modules-command-logs/
site_name: LambdaTest
slug: analytics-modules-test-intelligence-command-logs-analytics/
---

import NewTag from '../src/component/newTag';


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
          "name": "Test Overview",
          "item": "https://www.lambdatest.com/support/docs/analytics-modules-flaky-test/"
        }]
      })
    }}
></script>


### Introduction to AI-Powered Command Logs Analytics

Lambdatest Analytics help you intelligently analyze your test execution steps on the platform. It provides you with the insights on the errors that are causing your test runs to fail. 


### Pre-requisites for using Command Logs Analytics
The following are the steps to use Command Logs Analytics:
1. You should have a LambdaTest account. If you don't have one, you can sign up [here](https://accounts.lambdatest.com/register).
2. You should have access to the `Test Intelligence` subscription plan. You can join the waitlist [here](https://www.lambdatest.com/test-intelligence).
3. Go to `Analytics` from the left navigation menu and create a new Dashboard by clicking on the `Create New Dashboard` button.
4. Select the `Create Custom Dashboard` option from the `Create New Dashboard` dropdown.
5. Select the `Command Logs` option from the `Analytics Modules` section.
6. Click on `Add` for the widgets required to your dashboard. 
7. Input your `Dashboard Name` and click on `Create Dashboard` to create your dashboard.


### **Command Status Summary Widget** <NewTag value="BETA" bgColor="#ffec02" color="#000" />

   **About the Widget**
   
   The Command Logs Status Summary Widget offers a summary of the response statuses for Selenium commands executed on the platform. This is visualized using a tree map, giving a quick and clear overview of the system's status.

   **Widget Simulation**

   A tree map is shown with each rectangle representing different command response codes. The size of each rectangle corresponds to the number of commands with that response code. This gives you a visual representation of the overall system health at a glance. 

   **Use Cases**
   1. Quickly identifying the system's health status
   2. Monitoring status codes over a specific timestamps
   3. Tracking system performance and identifying potential issues
   4. Analyzing command logs status distribution
   5. Filtering and focusing on specific response codes for further investigation

### **Command Error Status Trends Widget** <NewTag value="BETA" bgColor="#ffec02" color="#000" />

   **About the Widget**

   The Command Logs Status Trends Widget provides a time-series representation of command log HTTP response statuses. It groups tests with similar response statuses for a clearer view of the system's health and performance trends.

   **Widget Simulation**

   A line or bar chart is displayed with the x-axis representing the timestamp of the tests run and the y-axis representing the total number of unique errors in tests with command logs of respective response statuses. 

   <img loading="lazy" src="https://www.lambdatest.com/resources/images/errorAi.png" alt="cmd" width="768" height="373" className="doc_img"/>

   **Use Cases**
   1. Tracking response status trends over time
   2. Identifying periods of increased error response codes
   3. Evaluating system health based on response status trends
   4. Comparing system performance over different periods
   5. Analyzing the frequency of retries or error status codes over time

### **Command Type Trends Widget** <NewTag value="BETA" bgColor="#ffec02" color="#000" />

   **About the Widget** 

   The Command Logs Type Trends Widget shows the trends of endpoint usage over time by displaying the count of commands for each command name mapped to the endpoint/request path. It helps to identify potential system bottlenecks and optimization opportunities.

   **Widget Simulation**

   A horizontal bar chart is shown with the y-axis representing the W3C command name and the x-axis showing the count of commands. The command response codes are stacked on each bar for further granularity.

   **Use Cases**
   1. Identifying the most frequently used command types
   2. Discovering potential bottlenecks in specific command types
   3. Comparing usage of different command types
   4. Tracking changes in command type usage over time
   5. Correlating command type usage with system performance

### **Command Error Messages Categorization Widget** <NewTag value="BETA" bgColor="#ffec02" color="#000" />

   **About the Widget** 

   The Command Logs Error Messages Categorization Widget categorizes error messages from command logs, allowing users to identify common issues and prioritize bug fixes. 

   **Widget Simulation**

   A table displays unique error messages, occurrences dots, the percentage of occurrences, the timestamp of the last error message, and tests with the error message command logs.

   <img loading="lazy" src="https://www.lambdatest.com/resources/images/commandaifold.webp" alt="cmd" width="768" height="373" className="doc_img"/>

   **Use Cases**
   6. Identifying common error messages for prioritizing bug fixes
   7. Tracking the frequency of specific error messages
   8. Analyzing the proportion of error messages in the total commands
   9. Finding correlations between error message occurrences and system performance
   10. Inspecting tests with specific error messages for debugging

### **Command Success Trends Widget** <NewTag value="UPCOMING" bgColor="#7c39ff" color="#fff" />

   **About the Widget** 

   The Command Logs Success Trends Widget provides a time-series view of the number of tests where all commands were successfully executed with a "200 SUCCESS" status.

   **Widget Simulation**

   A line or bar chart displays with the x-axis representing the timestamp of the tests run and the y-axis showing the total number of tests where all command logs had a "200 SUCCESS" status.

   **Use Cases**
   1. Tracking trends of successful command execution over time
   2. Comparing successful command execution rates over different periods
   3. Correlating successful command execution rates with system performance
   4. Analyzing the consistency of system performance based on successful command executions
   5. Evaluating the effectiveness of bug fixes or performance enhancements by tracking changes in successful command execution rates.
