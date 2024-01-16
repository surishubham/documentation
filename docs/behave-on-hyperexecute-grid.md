---
id: behave-on-hyperexecute-grid
title: Run automation tests on HyperExecute using Behave
hide_title: true
sidebar_label: Behave
description: Learn how to run Selenium automation tests on HyperExecute grid using the Behave framework
keywords:
  - behave
  - behave selenium
  - python selenium
  - behave automation testing
  - selenium webdriver behave
  - selenium python testing tutorial
  - python selenium framework
  - lambdatest python
  - framework on lambdatest
  - hyperexecute grid
  - hyperexecute python testing
  - hyperexecute behave testing
  - hyperexecute automation testing
image: /assets/images/og-images/Behave-with-Selenium.jpg
url: https://www.lambdatest.com/support/docs/behave-on-hyperexecute-grid/
site_name: LambdaTest
slug: behave-on-hyperexecute-grid/
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
          "name": "How to run automation tests on HyperExecute using Behave framework",
          "item": "https://www.lambdatest.com/support/docs/behave-on-hyperexecute-grid/"
        }]
      })
    }}
></script>

# Run automation tests on HyperExecute using Behave
***

HyperExecute lets you run E2E (end-to-end) Selenium tests at the fastest possible speed. Unlike normal Selenium grid that involves multiple hops during the process of test execution, speed of execution on HyperExecute Grid is *super fast* as the code is executed on a secure cloud.

End-to-end encryption of the data (including the source code) ensures that the *data* is secure whether it is rest or in transit. YAML-based workflow helps in realizing the benefits of optimal test execution and orchestration. Along with the unique features offered by HyperExecute, you also get access to a host of LambdaTest cloud features like detailed logs, Smart CI features, network insights, video recording, access to a range of browsers & platforms on the cloud, amongst others.

> HyperExecute has several state of the art features to help you optimize your testing process. Go through the [features page](/support/docs/key-features-of-hyperexecute) to take a look at all the tools that HyperExecute offers. 

>HyperExecute is compliant with leading security standards - SOC2, GDPR, and CCPA. Refer to [HyperExecute Getting Started Guide](/docs/getting-started-with-hyperexecute) for more information about features offered by HyperExecute.

> All the code samples in this documentation can be found in the [Behave HyperExecute GitHub repository](https://github.com/LambdaTest/behave-selenium-hyperexecute-sample/). You can either download or clone the repository to run tests on the HyperExecute Grid.

## Gitpod
***

Follow the below steps to run Gitpod button:

1. Click '**Open in Gitpod**' button (You will be redirected to Login/Signup page).

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

2. Login with Lambdatest credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.


[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Selenium&framework=Behave)



## Getting started with Behave tests on HyperExecute Grid
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

## Prerequisites for running Behave tests on HyperExecute Grid
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

For Behave, the *project dependencies* must be available for installation either in *requirements.txt* (global) or *pyproject.toml* (venv).

The project requirements (or prerequisites) must be installed as a part of the *pre* step in HyperExecute. This step remains the same irrespective of whether you are using global or virtual installation of Python packages. Here are the *pre* steps as mentioned in the sample [Matrix](https://github.com/LambdaTest/behave-selenium-hyperexecute-sample/blob/master/yaml/win/behave_hyperexecute_matrix_sample.yaml) and [Auto-Split](https://github.com/LambdaTest/behave-selenium-hyperexecute-sample/blob/master/yaml/win/behave_hyperexecute_autosplit_sample.yaml) YAML files.

The dependencies available in *requirements.txt* can be installed by triggering *pip3 install* command in the *pre* step of the YAML file.

```yaml
pre:
  -  pip3 install -r requirements.txt --cache-dir pip_cache
```

To reduce the upload size, it is recommended to include *files to be added in the ignore list* in *.hyperexecuteignore* file which is located at the root of the project. You can modify the content of *.hyperexecuteignore* as per your project requirements:

```
txt
hyperexecute
hyperexecute.exe
*.zip
artifacts
logs
```

Here is the overall directory structure of the sample code available in the [sample Behave HyperExecute repository](https://github.com/LambdaTest/behave-selenium-hyperexecute-sample/)

```
behave-selenium-hyperexecute-sample
    |
    |--- features
          |---- environment.py (Helper functions for reading information from behave.ini)
          |---- lt_todo_app.feature (Test Scenario - 1)
          |---- lt_selenium_playground.feature (Test Scenario - 2)
          |---- steps
                  |---- lt_todo_app_steps.py (Step definitions of Test Scenario - 1)
                  |---- lt_selenium_playground_steps.py (Step definitions of Test Scenario - 2)
    |--- helper (directory containing Helper Functions)
    |--- yaml
          |--- win/behave_hyperexecute_matrix_sample.yaml
          |--- win/behave_hyperexecute_autosplit_sample.yaml
    |--- requirements.txt (Python packages required for the project)
    |--- behave.ini
```

## Running Behave Tests on HyperExecute Grid using Matrix Execution
***

Shown below is the HyperExecute YAML file for matrix execution:

```yaml
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

matrix:
  files: ["features/lt_todo_app.feature", "features/lt_selenium_playground.feature"]

runson: win

env:
#  PAT: ${{ .secrets.testKey }}
 TARGET_OS: Windows 10

cacheKey: '{{ checksum "requirements.txt" }}'
cacheDirectories:
  - pip_cache
# Details about HTML Formatter at https://pypi.org/project/behave-html-formatter/
pre:
  - mkdir pip_cache
  - pip3 install -r requirements.txt --cache-dir pip_cache
post:
  - cat yaml/win/behave_hyperexecute_matrix_sample.yaml

mergeArtifacts: true

uploadArtefacts:
  - name: TestReports
    path:
    - reports/**

testSuites:
  - behave -f json.pretty -o reports/test_report.json $files
```

Here are the major pointers that you should know for executing Behave tests using matrix execution:

- Global timeout, test suite timeout, and test suite step timeout : 90 minutes

```yaml
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90
```

- The target platform is set to *win* using the *runson* key

```yaml
runson: win
```

- A matrix of [*files*] is created for running the Behave tests on the target platform (i.e. win).

```yaml
matrix:
  files: ["features/lt_todo_app.feature", "features/lt_selenium_playground.feature"]
```

- Test dependencies and required packages are installed as a part of the *pre* step

```yaml
pre:
  - pip3 install -r requirements.txt --cache-dir pip_cache
```

- Commands to be run after the test execution are listed in the *post* step. In the example, we cat the contents of *yaml/behave_hyperexecute_matrix_sample.yaml*

```yaml
post:
  - cat yaml/win/behave_hyperexecute_matrix_sample.yaml
```

- The command(s) mentioned in *testSuites* key are represented as an array of strings. For demonstration, the matrix of OS and files are run using the *behave* command.

```yaml
testSuites:
  - behave -f json.pretty -o reports/test_report.json $files
```

### Test Execution using Matrix Multiplexing

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/win/behave_hyperexecute_matrix_sample.yaml*). Run the following command on the terminal to trigger the tests in Python files on the HyperExecute Grid. The *--download-artifacts* option is used to inform HyperExecute to download the artefacts for the job.

Shown below is *HyperExecute CLI* command that has to be triggered from the root folder of the project:

```bash
./hyperexecute --config yaml/win/behave_hyperexecute_matrix_sample.yaml --download-artifacts --force-clean-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_matrix_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

Shown below is the execution screenshot when the YAML file is triggered from the terminal:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_matrix_cmd_1.png').default} alt="Behave HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_matrix_cmd_2.png').default} alt="Behave HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

## Running Behave Tests on HyperExecute Grid using Auto-split Execution
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
concurrency: 2

env:
#  PAT: ${{ .secrets.testKey }}
 TARGET_OS: Windows 10

cacheKey: '{{ checksum "requirements.txt" }}'
cacheDirectories:
  - pip_cache
pre:
  - mkdir pip_cache
  - pip3 install -r requirements.txt --cache-dir pip_cache
post:
  - cat yaml/win/behave_hyperexecute_autosplit_sample.yaml
upload:
  - reports/test_report.json

mergeArtifacts: true

uploadArtefacts:
  - name: TestReports
    path:
    - reports/**

# Details about HTML Formatter at https://pypi.org/project/behave-html-formatter/
testDiscovery:
  type: raw
  mode: dynamic
  command: grep -nri 'Feature' features -ir --include=\*.feature | sed 's/:.*//'

# Reports are generated in the pretty JSON format
testRunnerCommand: behave -f json.pretty -o reports/test_report.json $test
```

Here are the major pointers that you should know for executing Behave tests using auto-split execution:

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
retryOnFailure: true
maxRetries: 5
```

- The concurrency (i.e. number of parallel sessions) is set to 2.

```yaml
concurrency: 2
```

- Test dependencies and required packages are installed as a part of the *pre* step.

```yaml
pre:
  - pip3 install -r requirements.txt --cache-dir pip_cache
```

- Commands to be run after test execution are listed in the *post* step. In the example, we cat the contents of *yaml/win/behave_hyperexecute_autosplit_sample.yaml*

```yaml
post:
  - cat yaml/win/behave_hyperexecute_autosplit_sample.yaml
```

The *testDiscovery* directive contains the command that provides the details of test execution.

```yaml
testDiscovery:
  type: raw
  mode: dynamic
  command: grep -nri 'Feature' features -ir --include=\*.feature | sed 's/:.*//'

# Reports are generated in the pretty JSON format
testRunnerCommand: behave -f json.pretty -o reports/test_report.json $test
```

Running the below command on the terminal will give a list of Feature files that are located in the *features* folder:

```bash
grep -nri 'Feature' features -ir --include=\*.feature | sed 's/:.*//
```

```
features/lt_selenium_playground.feature
features/lt_todo_app.feature
```

### Command to trigger Autosplit execution

Shown below is *HyperExecute CLI* command that has to be triggered from the root folder of the project:

```bash
./hyperexecute --config yaml/win/behave_hyperexecute_autosplit_sample.yaml --download-artifacts --force-clean-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

Shown below is the execution screenshot when the YAML file is triggered from the terminal:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_autosplit_cmd_1.png').default} alt="Behave HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_autosplit_cmd_2.png').default} alt="Behave HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

## Pre Steps, Post Steps, Dependency Caching, and Artifacts Management
***

Here are some of the advanced features (i.e. dependency caching, retries, post, and artifacts management) of HyperExecute that must be leveraged for accelerated package installation and verifying the results of the test execution. All the advanced features are applicable to Matrix and Auto-split modes.

### Pre Steps and Dependency Caching

To leverage the advantage offered by *Dependency Caching* in HyperExecute, the integrity of *requirements.txt* is checked using checksum functionality

```yaml
cacheKey: '{{ checksum "requirements.txt" }}'
```

By default, *pip* in Python saves the downloaded packages in the cache so that next time, the package download request can be serviced from the cache (rather than re-downloading it again). The caching advantage offered by *pip* can be leveraged in HyperExecute whereby the downloaded packages can be stored (or cached) in a secure server for future executions. The packages available in the cache will only be used if the checksum stage results in a Pass.

The *cacheDirectories* directive is used for specifying the directory where the packages have to be cached. The mentioned directory will override the default directory where Python packages are normally cached, further information about Caching in pip is available [here](https://pip.pypa.io/en/stable/cli/pip_cache/).

The packages downloaded using pip will be cached in the directory (or location) mentioned under the *cacheDirectories* directive.

In the sample code, the downloaded packages are cached in *pip_cache* folder that is located in the project's root. The folder is automatically created when the packages mentioned in *requirements.txt* are downloaded.

```yaml
cacheDirectories:
  - pip_cache
```

Content under the *pre* directive is the precondition that will be run before the tests are executed on the HyperExecute grid. The *--cache-dir* option in *pip3* is used for specifying the cache directory. It is important to note that downloaded packages that are cached are securely uploaded to a secure cloud before the execution environment is auto-purged after build completion. Please modify *requirements.txt* as per the project requirements.

```yaml
pip3 install -r requirements.txt  --cache-dir pip_cache
```

### Post steps

The *post* directive contains a list of commands that run as a part of post-test execution. In the sample shown below, the contents of *yaml/behave_hyperexecute_matrix_sample.yaml* are read using cat as a part of the post step.

```yaml
post:
  - cat yaml/win/behave_hyperexecute_matrix_sample.yaml
```

### Retries

The *retryOnFailure* directive when set to *true* instructs HyperExecute to retry failed command(s). The retry operation is carried out till the number of retries mentioned in *maxRetries* are exhausted or the command execution results in a pass. Here is the combination of *retryOnFailure* and *maxRetries* that can be used for retrying command (or test) execution:

```yaml
  retryOnFailure: true
  maxRetries: 5
```

### Artifacts Management

The *mergeArtifacts* directive (which is by default false) is set to true for merging the artifacts and combing artifacts generated under each task.

The *uploadArtefacts* directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion. In the example, path consists of a regex for parsing the directory (i.e. *reports* that contains the test reports).

```yaml
mergeArtifacts: true

uploadArtefacts:
  [
    {
      "name": "reports",
      "path": ["reports/**"]
    }
  ]
```

HyperExecute also facilitates the provision to download the artifacts on your local machine. To download the artifacts, click on Artifacts button corresponding to the associated TestID.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_artifacts_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

You can download the artefacts by clicking on the Download button as shown below:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_artifacts_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Secrets Management

In case you want to use any secret keys in the YAML file, the same can be set by clicking on the Secrets button the dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_secret_management_1.png').default} alt="secret management"  width="1920" height="868" className="doc_img"/>

Now create secrets that you can use in the HyperExecute YAML file.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_secret_management_2.png').default} alt="secret management"  width="100" height="650" className="doc_img"/>

## Navigation in Automation Dashboard

Every test run on the HyperExecute Grid has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

HyperExecute lets you seamlessly navigate between jobId's and taskId's. The same can be done by navigating to *Automation* -> *HyperExecute logs* -> *Corresponding jobId* on the HyperExecute automation dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_matrix_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

The snapshot below shows how to navigate to the respective *testID* for viewing the Selenium logs:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/behave/behave_matrix_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

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
      Run Behave tests on HyperExecute Grid
      </span>
    </li>
  </ul>
</nav>
