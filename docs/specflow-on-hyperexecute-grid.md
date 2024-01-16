---
id: specflow-on-hyperexecute-grid
title: Run automation tests on HyperExecute using SpecFlow
hide_title: true
sidebar_label: SpecFlow
description: Learn how to run Selenium automation tests on HyperExecute grid using the SpecFlow framework
keywords:
  - SpecFlow
  - SpecFlow selenium
  - SpecFlow C# Selenium
  - SpecFlow automation testing
  - selenium webdriver SpecFlow
  - selenium SpecFlow testing tutorial
  - SpecFlow C# Selenium framework
  - lambdatest SpecFlow
  - frameworks on lambdatest
  - hyperexecute grid
  - hyperexecute SpecFlow testing
  - hyperexecute python testing
  - hyperexecute automation testing
url: https://www.lambdatest.com/support/docs/specflow-on-hyperexecute-grid/
site_name: LambdaTest
slug: specflow-on-hyperexecute-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "How to run automation tests on HyperExecute using SpecFlow framework",
          "item": "https://www.lambdatest.com/support/docs/specflow-on-hyperexecute-grid/"
        }]
      })
    }}
></script>

# Run automation tests on HyperExecute using SpecFlow
***

HyperExecute lets you run E2E (End-to-End) Selenium tests at the fastest possible speed. Unlike normal Selenium grid that involves multiple hops during the process of test execution, speed of execution on HyperExecute Grid is *super fast* as the code is executed on a secure cloud.

End-to-end encryption of the data (including the source code) ensures that the *data* is secure whether it is rest or in transit. YAML-based workflow helps in realizing the benefits of optimal test execution and orchestration. Along with the unique features offered by HyperExecute, you also get access to a host of LambdaTest cloud features like detailed logs, Smart CI features, network insights, video recording, access to a range of browsers & platforms on the cloud, amongst others.

> HyperExecute has several state of the art features to help you optimize your testing process. Go through the [features page](/support/docs/key-features-of-hyperexecute) to take a look at all the tools that HyperExecute offers. 

>HyperExecute is compliant with leading security standards - SOC2, GDPR, and CCPA. Refer to [HyperExecute Getting Started Guide](/docs/getting-started-with-hyperexecute) for more information about features offered by HyperExecute.

> All the code samples in this documentation can be found in the [SpecFlow HyperExecute GitHub repository](https://github.com/LambdaTest/specflow-selenium-hyperexecute-sample). You can either download or clone the repository to run tests on the HyperExecute Grid.

## Gitpod
***

Follow the below steps to run Gitpod button:

1. Click '**Open in Gitpod**' button (You will be redirected to Login/Signup page).

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

2. Login with Lambdatest credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.


[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Selenium&framework=SpecFlow)


## Getting started with SpecFlow tests on HyperExecute
***

The *HyperExecute* CLI is used for triggering tests on HyperExecute Grid. The CLI provides a host of other useful features that accelerate test execution. You should download the HyperExecute CLI binary on the host system for running tests on HyperExecute. Shown below is the HyperExecute CLI download location for different platforms:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

For detailed information about HyperExecute CLI, please refer to [HyperExecute CLI section](/docs/getting-started-with-hyperexecute/#hyperexecute-cli-to-interact-with-hyperexecute) in the HyperExecute getting started guide.

>
The fundamental difference between running Selenium tests on a cloud Selenium Grid and HyperExecute Grid is that you need not have any configurations on the local machine (i.e. the machine from where HyperExecute CLI is triggered). This is because the source code from the local machine will be zipped and securely uploaded to the cloud where the execution will be performed on the remote Virtual Machine (VM).

## Prerequisites for running SpecFlow tests on HyperExecute Grid
***

Before using HyperExecute, you have to download HyperExecute CLI corresponding to the host OS. You also need to export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile). Follow the below mentioned steps to set the environment variables *LT_USERNAME* & *LT_ACCESS_KEY* from the terminal.

For macOS:

```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```

For Linux:

```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=LT_USERNAME
set LT_ACCESS_KEY=LT_ACCESS_KEY
```

The project requirements (or pre-requisites) must be installed as a part of the *pre* step in HyperExecute. This step remains the same irrespective of whether you are using global or virtual installation of Python packages.

Here are the *pre* steps as mentioned in the sample [Matrix](https://github.com/LambdaTest/specflow-selenium-hyperexecute-sample/blob/master/yaml/specflow_hyperexecute_matrix_sample.yaml) and [Auto-Split](https://github.com/LambdaTest/specflow-selenium-hyperexecute-sample/blob/master/yaml/specflow_hyperexecute_autosplit_sample.yaml) YAML files.

The necessary NuGet packages are fetched using the [*dotnet list package*](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-list-package) command. All the local packages are cleared using the *nuget locals all -clear* command, post which the entire project is built from scratch using the *dotnet build -c Release* command.

```yaml
pre:
 # https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-list-package
 - dotnet list $project package > packages.txt
 - nuget locals all -clear
 - dotnet build -c Release
```

To reduce the upload size, it is recommended to include *files to be added in the ignore list* in *.hyperexecuteignore* which is located at the root of the project. You can modify the content of *.hyperexecuteignore* as per your project requirements:

```
txt
hyperexecute
hyperexecute.exe
*.zip
artifacts
logs
```

The project structure is as shown below:

```
specflow-demo-sample
      |
      |--- Features (Contains the feature files)
              |
              | --- BingSearch.feature
              | --- LambdaTestSearch.feature
              | --- SeleniumPlayground.feature
              | --- ToDoApp.feature
      |--- Hooks (Contains the event bindings to perform additional automation logic)
              | --- Hooks.cs
      |--- Steps (Contains the step definitions that correspond to the feature files)
              | --- BingSearchSteps.cs
              | --- DuckDuckGoSearchSteps.cs
              | --- SeleniumPlaygroundSteps.cs
              | --- ToDoAppSteps.cs
      |--- App.config (Application Configuration file containing settings specific to the app)
      |
      yaml
       |
       |--- specflow_hyperexecute_matrix_sample.yaml
       |--- specflow_hyperexecute_autosplit_sample.yaml
```

## Running SpecFlow Tests on HyperExecute Grid using Matrix Execution
***

Shown below is the HyperExecute YAML file for matrix execution:

```yaml
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

retryOnFailure: true
maxRetries: 5

matrix:
  project: ["OnlySpecTest.sln"]
  scenario: ["BingSearch_1", "BingSearch_2", "BingSearch_3",
             "LambdaTestBlogSearch_1", "LambdaTestBlogSearch_2", "LambdaTestBlogSearch_3",
             "SeleniumPlayground_1", "SeleniumPlayground_2", "SeleniumPlayground_3",
             "ToDoApp_1", "ToDoApp_2", ToDoApp_3]

pre:
 - dotnet list OnlySpecTest.csproj package > packages.txt
 - nuget locals all -clear
 - dotnet build -c Release

cacheKey: '{{ checksum "packages.txt" }}'

post:
  - cat yaml/specflow_hyperexecute_matrix_sample.yaml

mergeArtifacts: true

uploadArtefacts:
  [
    {
      "name": "Execution_Report",
      "path": ["Report/**"],
    },
    {
      "name": "Execution_Screenshots",
      "path": ["Screenshots/**/**"]
    }
  ]

testSuites:
  - dotnet test $project --filter "(Category=$scenario)"
```

Here are the major pointers that you should know for executing SpecFlow tests using matrix execution:

- Global timeout, test suite timeout, and test suite step timeout : 90 minutes

```yaml
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
```

- The target platform is set to *win* using the *runson* key

```yaml
runson: win
```

- The *matrix* constitutes of the following entries - *project* and *scenario*. This is because parallel execution will be achieved at the *scenario* level.

```yaml
matrix:
  project: ["OnlySpecTest.sln"]
  scenario: ["BingSearch_1", "BingSearch_2", "BingSearch_3",
             "LambdaTestBlogSearch_1", "LambdaTestBlogSearch_2", "LambdaTestBlogSearch_3",
             "SeleniumPlayground_1", "SeleniumPlayground_2", "SeleniumPlayground_3",
             "ToDoApp_1", "ToDoApp_2", ToDoApp_3]
```

- Test dependencies and required packages are installed as a part of the *pre* step

```yaml
pre:
 - dotnet list $project package > packages.txt
 - nuget locals all -clear
 - dotnet build -c Release
```

- Commands to be run after the test execution are listed in the *post* step. In the example, we cat the contents of *yaml/specflow_hyperexecute_matrix_sample.yaml*

```yaml
post:
  - cat yaml/specflow_hyperexecute_matrix_sample.yaml
```

- The *testSuites* object contains a list of commands (that can be presented in an array). In the example code, commands for executing the tests are put in an array (with a '-' preceding each item). The [*dotnet test*](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-test) command is used to run tests located in the current project. In the current project, parallel execution is achieved at the *scenario* level.

Please refer to [Executing specific Scenarios in Build pipeline](https://docs.specflow.org/projects/specflow/en/latest/Execution/Executing-Specific-Scenarios.html) for more information on filtering the test execution based on *Category*

```yaml
testSuites:
  - dotnet test $project --filter "(Category=$scenario)"
```

### Test Execution using Matrix Multiplexing

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/specflow_hyperexcecute_matrix_sample.yaml*). Run the following command on the terminal to trigger the tests in Python files on the HyperExecute Grid. The *--download-artifacts* option is used to inform HyperExecute to download the artefacts for the job.

Shown below is *HyperExecute CLI* command that has to be triggered from the root folder of the project:

```bash
./hyperexecute --config --verbose yaml/specflow_hyperexecute_matrix_sample.yaml --download-artifacts --force-clean-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

Shown below is the execution screenshot when the YAML file is triggered from the terminal:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_matrix_terminal_1.png').default} alt="SpecFlow HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_matrix_terminal_2.png').default} alt="SpecFlow HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

## Running SpecFlow Tests on HyperExecute Grid using Auto-split Execution
***

Shown below is the HyperExecute YAML file for auto-split execution:

```yaml
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

autosplit: true
retryOnFailure: true

maxRetries: 5
concurrency: 25

env:
  NUGET_PACKAGES: 'C:\nuget_global_cache'
  NUGET_HTTP_CACHE_PATH: 'C:\nuget_http_cache'
  NUGET_PLUGINS_CACHE_PATH: 'C:\nuget_plugins_cache'
  # Secrets in Vault
  PAT: ${{ .secrets.testKey }}

pre:
 - dotnet list OnlySpecTest.csproj package > packages.txt
 - nuget locals all -clear
 - dotnet build -c Release

cacheKey: '{{ checksum "packages.txt" }}'

post:
  - cat yaml/specflow_hyperexecute_autosplit_sample.yaml

mergeArtifacts: true

uploadArtefacts:
  [
    {
      "name": "Execution_Report",
      "path": ["Report/**"],
    },
    {
      "name": "Execution_Screenshots",
      "path": ["Screenshots/**/**"]
    }
  ]

# The below testDiscovery command will give the feature name in the respective feature files
testDiscovery:
  type: raw
  mode: static
  command: grep -rni 'Features' -e '@' --include=\*.feature | sed 's/.*@//'

#Parallel execution at feature level
testRunnerCommand: dotnet test --filter "(Category=$test)"
```

Here are the major pointers that you should know for executing SpecFlow tests using auto-split execution:

- The target platform is set to *win* using the *runson* key

```yaml
runson: win
```

- Auto-split is set to true in the YAML file

```yaml
autosplit: true
```

- *retryOnFailure* is set to true to instruct HyperExecute to retry the failed commands. The retry operation is carried out till the number of retries mentioned in *maxRetries* are exhausted or the command execution results in a Pass.

```yaml
autosplit: true
retryOnFailure: true
maxRetries: 5
```

- The concurrency (i.e. number of parallel sessions) is set to 25.

```yaml
concurrency: 25
```

- Test dependencies and required packages are installed as a part of the *pre* step. Steps (or commands) that must run before the test execution are listed in the *pre* run step. In the example, the necessary NuGet packages are fetched using the [*dotnet list package*](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-list-package) command.

All the local packages are cleared using the *nuget locals all -clear* command, post which the entire project is built from scratch using the *dotnet build -c Release* command.

```yaml
pre:
 - dotnet list $project package > packages.txt
 - nuget locals all -clear
 - dotnet build -c Release
```

- Commands to be run after test execution are listed in the *post* step. In the example, we cat the contents of *yaml/specflow_hyperexecute_autosplit_sample.yaml*

```yaml
post:
  - cat yaml/specflow_hyperexecute_autosplit_sample.yaml
```

The *testDiscovery* directive contains the command that provides the details of test execution.

```yaml
testDiscovery:
  type: raw
  mode: static
  command: grep -rni 'Features' -e '@' --include=\*.feature | sed 's/.*@//'

#Parallel execution at feature level
testRunnerCommand: dotnet test --filter "(Category=$test)"
```

Running the above command on the terminal will give a list of scenarios present in the *feature* files:

```
BingSearch_1
BingSearch_2
BingSearch_3
ToDoApp_1
ToDoApp_2
ToDoApp_3
LambdaTestBlogSearch_1
LambdaTestBlogSearch_2
LambdaTestBlogSearch_3
SeleniumPlayground_1
SeleniumPlayground_2
SeleniumPlayground_3
```

### Command to trigger Autosplit execution

Shown below is *HyperExecute CLI* command that has to be triggered from the root folder of the project:

```bash
./hyperexecute --config --verbose yaml/specflow_hyperexecute_autosplit_sample.yaml --download-artifacts --force-clean-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_3.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

Shown below is the execution screenshot when the YAML file is triggered from the terminal:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_autosplit_terminal_1.png').default} alt="SpecFlow HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_autosplit_terminal_2.png').default} alt="SpecFlow HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

## Pre Steps, Post Steps, Dependency Caching, and Artfacts Management
***

Here are some of the advanced features (i.e. dependency caching, retries, post, and artifacts management) of HyperExecute that must be leveraged for accelerated package installation and verification of the test results. All the advanced features are applicable to Matrix and Auto-split modes.

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories.

```yaml
cacheKey: '{{ checksum "packages.txt" }}'
```

Set the array of files & directories to be cached. Separate folders are created for downloading global-packages, http-cache, and plugins-cache. Please refer to [Configuring NuGet CLI environment variables](https://docs.microsoft.com/en-us/nuget/reference/cli-reference/cli-ref-environment-variables) to know more about overriding settings in NuGet.Config files.


```yaml
NUGET_PACKAGES: 'C:\nuget_global_cache'
NUGET_HTTP_CACHE_PATH: 'C:\nuget_http_cache'
NUGET_PLUGINS_CACHE_PATH: 'C:\nuget_plugins_cache'
```

Steps (or commands) that must run before the test execution are listed in the *pre* run step. In the example, the necessary NuGet packages are fetched using the [*dotnet list package*](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-list-package) command. All the local packages are cleared using the *nuget locals all -clear* command, post which the entire project is built from scratch using the *dotnet build -c Release* command.

```yaml
pre:
 - dotnet list $project package > packages.txt
 - nuget locals all -clear
 - dotnet build -c Release
```

### Post steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/specflow_hyperexecute_matrix_sample.yaml*

```yaml
post:
  - cat yaml/specflow_hyperexecute_matrix_sample.yaml
```

### Retries

The *retryOnFailure* directive when set to *true* instructs HyperExecute to retry failed command(s). The retry operation is carried out till the number of retries mentioned in *maxRetries* are exhausted or the command execution results in a pass. Here is the combination of *retryOnFailure* and *maxRetries* that can be used for retrying command (or test) execution:

```yaml
  retryOnFailure: true
  maxRetries: 5
```

### Artifacts Management

The *mergeArtifacts* directive (which is by default *false*) is set to *true* for merging the artefacts and combing artefacts generated under each task.

The *uploadArtefacts* directive informs HyperExecute to upload artefacts [files, reports, etc.] generated after task completion. In the example, *path* consists of a regex for parsing the directories (i.e. *Report/* and *Screenshots/*) that contain the test reports and execution screenshots respectively.

```yaml
uploadArtefacts:
 - name: Execution_Report
   path:
    - Report/**
 - name: Execution_Screenshots
   path:
    - Screenshots/**/**
```

HyperExecute also facilitates the provision to download the artefacts on your local machine. To download the artefacts, click on Artefacts button corresponding to the associated TestID.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

You can download the artefacts by clicking on the Download button as shown below:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Secrets Management

In case you want to use any secret keys in the YAML file, the same can be set by clicking on the Secrets button the dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/pytest/pytest_secret_management_1.png').default} alt="secret management"  width="1920" height="868" className="doc_img"/>

Now create secrets that you can use in the HyperExecute YAML file.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/pytest/pytest_secret_management_2.png').default} alt="secret management"  width="100" height="650" className="doc_img"/>

## Navigation in Automation Dashboard

Every test run on the HyperExecute Grid has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

HyperExecute lets you seamlessly navigate between jobId's and taskId's. The same can be done by navigating to *Automation* -> *HyperExecute logs* -> *Corresponding jobId* on the HyperExecute automation dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_artifacts_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

The snapshot below shows how to navigate to the respective *testID* for viewing the Selenium logs:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/specflow/specflow_artifacts_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

>
For any query or doubt, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />
Happy testing!

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
      Run SpecFlow tests on HyperExecute Grid
      </span>
    </li>
  </ul>
</nav>
