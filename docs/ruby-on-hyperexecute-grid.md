---
id: ruby-on-hyperexecute-grid
title: Run automation tests on HyperExecute using Ruby
hide_title: true
sidebar_label: Ruby
description: Learn how to run Selenium automation tests on HyperExecute grid using Ruby
keywords:
  - Ruby
  - Ruby selenium
  - Ruby automation testing
  - selenium webdriver Ruby
  - selenium Ruby testing tutorial
  - Ruby Selenium framework
  - lambdatest Ruby
  - frameworks on lambdatest
  - hyperexecute grid
  - hyperexecute Ruby testing
  - hyperexecute Ruby testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.lambdatest.com/support/docs/ruby-on-hyperexecute-grid/
site_name: LambdaTest
slug: ruby-on-hyperexecute-grid/
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
          "name": "How to run automation tests on HyperExecute using Ruby",
          "item": "https://www.lambdatest.com/support/docs/ruby-on-hyperexecute-grid/"
        }]
      })
    }}
></script>

# Run automation tests on HyperExecute using Ruby
***

HyperExecute lets you run E2E (End-to-End) Selenium tests at the fastest possible speed. Unlike normal Selenium grid that involves multiple hops during the process of test execution, speed of execution on HyperExecute Grid is *super fast* as the code is executed on a secure cloud.

End-to-end encryption of the data (including the source code) ensures that the *data* is secure whether it is at rest or in transit. YAML-based workflow helps in realizing the benefits of optimal test execution and orchestration. Along with the unique features offered by HyperExecute, you also get access to a host of LambdaTest cloud features like detailed logs, Smart CI features, network insights, video recording, access to a range of browsers & platforms on the cloud, amongst others.

> HyperExecute has several state of the art features to help you optimize your testing process. Go through the [features page](/support/docs/key-features-of-hyperexecute) to take a look at all the tools that HyperExecute offers. 

>HyperExecute is compliant with leading security standards - SOC2, GDPR, and CCPA. Refer to [HyperExecute Getting Started Guide](/docs/getting-started-with-hyperexecute) for more information about features offered by HyperExecute.

> All the code samples in this documentation can be found in the [Ruby HyperExecute GitHub repository](https://github.com/LambdaTest/Ruby-HyperExecute-Sample). You can either download or clone the repository to run tests on the HyperExecute Grid.

## Gitpod
***

Follow the below steps to run Gitpod button:

1. Click '**Open in Gitpod**' button (You will be redirected to Login/Signup page).

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

2. Login with Lambdatest credentials. You will be redirected to HyperExecute dashboard with pop-up confirming to **'Proceed'** to Gitpod editor in the new tab and current tab will show hyperexecute dashboard.


[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Selenium&framework=RSpec)


## Getting started with Ruby tests on HyperExecute
***

The *HyperExecute CLI* is used for triggering tests on HyperExecute Grid. The CLI provides a host of other useful features that accelerate test execution. You should download the HyperExecute CLI binary on the host system for running tests on HyperExecute. Shown below is the HyperExecute CLI download location for different platforms:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

For detailed information about HyperExecute CLI, please refer to [HyperExecute CLI section](/docs/getting-started-with-hyperexecute/#hyperexecute-cli-to-interact-with-hyperexecute) in the HyperExecute getting started guide.

>
The fundamental difference between running Selenium tests on a cloud Selenium Grid and HyperExecute Grid is that you need not have any configurations on the local machine (i.e. the machine from where HyperExecute CLI is triggered). This is because the source code from the local machine will be zipped and securely uploaded to the cloud where the execution will be performed on the remote Virtual Machine (VM).

## Prerequisites for running Ruby tests on HyperExecute Grid
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

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The integrity of *Gemfile.lock* is checked using the checksum functionality. The packages are cached in the *vendor* directory.

```yaml
cacheKey: '{{ checksum "Gemfile.lock" }}'
cacheDirectories:
  - /vendor
```

Steps (or commands) that must run before the test execution are listed in the pre run step. In the example, the required packages are installed using the *bundle install --deployment* command.

```yaml
pre:
  - bundle install --deployment
```

To reduce the upload size, it is recommended to include *files to be added in the ignore list* in *.hyperexecuteignore* which is located at the root of the project. You can modify the content of *.hyperexecuteignore* as per your project requirements:

```
hyperexecute.exe
*.zip
*.log
artifacts
logs
```

## Running Ruby Tests on HyperExecute Grid using Matrix Execution
***

Shown below is the HyperExecute YAML file for matrix execution:

```yaml
---
version: "0.1"

globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

matrix:
  os: [win]
  files: ["spec/todo_test1.rb", "spec/todo_test2.rb"]

runson: ${matrix.os}
testSuites:
  - bundle exec rspec "$files" --format html --out rspec_results.html
pre:
  - bundle install --deployment
cacheKey: '{{ checksum "Gemfile.lock" }}'
cacheDirectories:
  - /vendor
uploadArtefacts:
 - name: report
   path:
     - rspec_results.html
report: true
partialReports:
 location: rspec_results.html
 type: html

post:
   - cat yaml/hyperexecute_matrix.yaml

env:
  AccessKey: ${{.secrets.AccessKey}}
```

Here are the major pointers that you should know for executing Ruby tests using matrix execution:

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

- Ruby-Spec files in the 'spec' folder contain the Scenario that has to be run on the HyperExecute grid. In the example, the Specs file Specs/ToDo.Specs runs in parallel at the *scenario* level.

```yaml
matrix:
  os: [win]
  files: ["spec/todo_test1.rb", "spec/todo_test2.rb"]
```

- Test dependencies and required packages are installed as a part of the *pre* step.

```yaml
pre:
  - bundle install --deployment
```

- Commands that have to run after test execution are listed in the *post* step. In the example, we cat the contents of *yaml/hyperexecute_matrix.yaml*

```yaml
post:
  - cat yaml/hyperExecuteMatrix.yaml
```

### Test Execution using Matrix Multiplexing

The CLI option *--config* is used for providing the custom HyperExecute YAML file (i.e. *yaml/hyperExecuteMatrix.yaml*). Run the following command on the terminal to trigger the tests on the HyperExecute Grid. The *--download-artifacts* option is used to inform HyperExecute to download the artifacts for the job.

Shown below is *HyperExecute CLI* command that has to be triggered from the root folder of the project (in case the execution platform is Windows):

```bash
./hyperexecute --config yaml/hyperExecuteMatrix.yaml --download-artifacts --force-clean-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/ruby/ruby_matrix_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Running Ruby Tests on HyperExecute Grid using Auto-split Execution
***

Shown below is the HyperExecute YAML file for auto-split execution:

```yaml
---
version: "0.1"

globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: win

autosplit: true
retryOnFailure: true
maxRetries: 5
concurrency: 2

testDiscovery:
  type: raw
  mode: dynamic
  command: grep -nri -E 'it ".*." do' spec/*.rb | awk '{print$1}' | sed 's/\(.*\):/\1 /'
testRunnerCommand: bundle exec rspec "$test" --format html --out rspec_results.html

pre:
  - bundle install --deployment

cacheKey: '{{ checksum "Gemfile.lock" }}'

cacheDirectories:
  - /vendor

uploadArtefacts:
 - name: report
   path:
     - rspec_results.html
report: true

partialReports:
 location: rspec_results.html
 type: html

post:
 - cat yaml/.hypertest_autosplits.yaml

env:
  AccessKey: ${{.secrets.AccessKey}}
```

Here are the major pointers that you should know for executing Ruby tests using auto-split execution:

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
maxRetries: 2
```

- The concurrency (i.e. number of parallel sessions) is set to 2.

```yaml
concurrency: 2
```

- Steps (or commands) that must run before the test execution are listed in the *pre* run step.

```yaml
pre:
  - bundle install --deployment
```

- Commands to be run after test execution are listed in the *post* step. In the example, we cat the contents of *yaml/.hypertest_autosplits.yaml*

```yaml
post:
  - cat yaml/.hypertest_autosplits.yaml
```

The *testDiscovery* directive contains the command that gives details of the mode of execution, along with detailing the command that is used for test execution. Here, we are fetching the list of Feature file scenarios that would be further executed using the value passed in the *testRunnerCommand*

```yaml
testDiscovery:
  type: raw
  mode: dynamic
  command: grep -nri -E 'it ".*." do' spec/*.rb | awk '{print$1}' | sed 's/\(.*\):/\1 /'
testRunnerCommand: bundle exec rspec "$test" --format html --out rspec_results.html
```

Running the above command on the terminal will give a list of Specs Scenario lines that are located in the Project folder:

```
* spec/todo_test1.rb:4
* spec/todo_test2.rb:4
```

The *testRunnerCommand* contains the command that is used for triggering the test. Its output is fetched to the *testRunnerCommand*

```yaml
testRunnerCommand: bundle exec rspec "$test" --format html --out rspec_results.html
```

### Command to trigger Autosplit execution

Shown below is *HyperExecute CLI* command that has to be triggered from the root folder of the project:

```bash
./hyperexecute --config --verbose yaml/.hypertest_autosplits.yaml --download-artifacts --force-clean-artifacts
```

Visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/hyperexecute) to check the status of execution:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/ruby/ruby_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Pre Steps, Post Steps, Dependency Caching, and Artifacts Management
***

Here are some of the advanced features (i.e. dependency caching, retries, post, and artifacts management) of HyperExecute that must be leveraged for accelerated package installation and verifying the results of the test execution. All the advanced features are applicable to Matrix and Auto-split modes.

### Pre Steps and Dependency Caching

Dependency caching is enabled in the YAML file to ensure that the package dependencies are not downloaded in subsequent runs. The first step is to set the Key used to cache directories.

```yaml
cacheKey: '{{ checksum "Gemfile.lock" }}'
cacheDirectories:
  - /vendor
```

Steps (or commands) that must run before the test execution are listed in the pre run step. Packages listed in *Gemfile.lock* are installed using the *bundle install --deployment* command.

```yaml
pre:
  - bundle install --deployment
```

### Post steps

Steps (or commands) that need to run after the test execution are listed in the *post* step. In the example, we *cat* the contents of *yaml/.hypertest_autosplits.yaml*

```yaml
post:
  - cat yaml/.hypertest_autosplits.yaml
```

### Retries

The *retryOnFailure* directive when set to *true* instructs HyperExecute to retry failed command(s). The retry operation is carried out till the number of retries mentioned in *maxRetries* are exhausted or the command execution results in a pass. Here is the combination of *retryOnFailure* and *maxRetries* that can be used for retrying command (or test) execution:

```yaml
retryOnFailure: true
maxRetries: 2
```

### Artifacts Management

The *mergeArtifacts* directive (which is by default *false*) is set to *true* for merging the artifacts and combing artifacts generated under each task.

The *uploadArtefacts* directive informs HyperExecute to upload artifacts [files, reports, etc.] generated after task completion. In the example, *path* consists of a regex for parsing the directory (i.e. *report*) that contain the test execution report in the HTML format.

```yaml
mergeArtifacts: true

uploadArtefacts:
 - name: report
   path:
     - rspec_results.html
```

HyperExecute also facilitates the provision to download the artifacts on your local machine. To download the artifacts, click on Artifacts button corresponding to the associated TestID.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/ruby/ruby_artifacts_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

You can download the artifacts by clicking on the Download button as shown below:

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/ruby/ruby_artifacts_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Secrets Management

In case you want to use any secret keys in the YAML file, the same can be set by clicking on the Secrets button the dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/pytest/pytest_secret_management_1.png').default} alt="secret management"  width="1920" height="868" className="doc_img"/>

Now create secrets that you can use in the HyperExecute YAML file.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/pytest/pytest_secret_management_2.png').default} alt="secret management"  width="100" height="650" className="doc_img"/>

## Navigation in Automation Dashboard

Every test run on the HyperExecute Grid has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

HyperExecute lets you seamlessly navigate between jobId's and taskId's. The same can be done by navigating to *Automation* -> *HyperExecute logs* -> *Corresponding jobId* on the HyperExecute automation dashboard.

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
      Run Ruby tests on HyperExecute Grid
      </span>
    </li>
  </ul>
</nav>
