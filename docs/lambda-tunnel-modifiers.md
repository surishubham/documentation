---
id: lambda-tunnel-modifiers
title: LambdaTest Tunnel Modifiers
hide_title: true
sidebar_label: LambdaTest Tunnel Modifiers
description: This document will help you understand all the modifiers/arguments used with LambdaTest Tunnel to help you test your locally hosted web pages.
keywords:
  - lambdatest tunnel modifiers
  - lambdatest help
  - lambdatest local tunnel
  - lambdatest tunnel tutorials
  - lambdatest tunnel guide
  - lambdatest tunnel guide
url: https://www.lambdatest.com/support/docs/lambda-tunnel-modifiers/
site_name: LambdaTest
slug: lambda-tunnel-modifiers/
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
          "name": "LambdaTest Tunnel Modifiers",
          "item": "https://www.lambdatest.com/support/docs/lambda-tunnel-modifiers/"
        }]
      })
    }}
></script>

# LambdaTest Tunnel Modifiers

---

LambdaTest Tunnel provides several command-line arguments that you can leverage to define LambdaTest Tunnel parameters. You can pass command-line arguments to either a **‘config’** file or an environment variable. It is recommended to use the latest version of LambdaTest tunnel binary to ensure compatibility with variables.

This document will help you understand all the modifiers/arguments used with LambdaTest Tunnel to help you test your locally hosted web pages.

| FLAG (SHORT) | FLAG (LONG)     | DESCRIPTION                                                                                                                                         | TYPE    |
| :----------- | :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
|            | --allowHosts        |   Comma separated list of hosts to route via tunnel. Everything else will be routed via Internet.  | String  |
|              | --bypassHosts   | Comma separated list of hosts to bypass from tunnel. These will be routed via internet.                                                             | String  |
|              | --callbackURL   | Callback URL for tunnel status.                                                                                                                     | String  |
| -c           | --config        | Path of the config file to use                                                                                                                      | String  |
|            | --clientCert        |  mTLS Client Certificate filepath.  | String  |
|            | --clientKey       |  mTLS Client Key filepath.  | String  |
|            | --mTLSHosts       | Comma separated list of mTLS hosts.  | String  |
| -d           | --dir           | Specify the Local Directory that will be server by a file server on port 33000                                                                      | String  |
|              | --dns           | Comma Separated List of DNS Servers                                                                                                                 | String  |
|              | --egress-only   | Uses proxy settings only for outbound requests.                                                                                                     | N/A     |
| -e           | --env           | The environment on which the LambdaTest Tunnel will run.                                                                                            | String  |
| -h           | --help          | Help for the LambdaTest Tunnel                                                                                                                      | N/A     |
|              | --infoAPIPort   | Exposes [Tunnel Info API](https://www.lambdatest.com/support/docs/advanced-tunnel-features/#tunnelinfoapis) At The Specified Port                   | Integer |
|              | --ingress-only  | Routes Only Incoming Traffic Via The Proxy Specified                                                                                                | N/A     |
| -k           | --key           | LambdaTest Access Key.                                                                                                                              | String  |
| -l           | --load-balanced | Activates [Load Balancing](https://www.lambdatest.com/support/docs/load-balancing-in-lambda-tunnel/) for LambdaTest Tunnel                          | N/A     |
|              | --logFile       | Location of the LambdaTest Tunnel Log File                                                                                                          | String  |
| -m           | --mitm          | Enable the [MITM(Man-in-the-middle)](https://www.lambdatest.com/support/docs/advanced-tunnel-features/#mitmlocaltesting) mode for LambdaTest Tunnel | N/A     |
|              | --mode          | Specifies in which mode tunnel should run [ssh,ws]. (default “ssh”)                                                                                 | String  |
|              | --ntlm          | To use Microsoft NTLM (Windows NT LAN Manager) authentication for communication or transport purposes.                                                  | Boolean |
|              | --pidfile       | Path Of Pidfile, Where Process ID will Be Written                                                                                                   | String  |
| -p           | --port          | Port for LambdaTest Tunnel to activate.                                                                                                             | Integer |
|              | --proxy-host    | Specifies the Tunnel Proxy Port hostname.                                                                                                           | String  |
|              | --proxy-pass    | Specifies the Tunnel Proxy Port password.                                                                                                           | String  |
|              | --proxy-port    | Specifies the port number where Tunnel proxy will activate.                                                                                         | Integer |
|              | --proxy-user    | Specifies the Tunnel Proxy Port username                                                                                                            | String  |
|            | --pacfile        |  Path of a PAC file.  | String  |
| -s           | --shared-tunnel | Sharing Tunnel Among Team Members                                                                                                                   | N/A     |
|              | --sshConnType   | Specify type of ssh connection (over_22, over_443, over_ws).To use –sshConnType, specify ––mode ssh flag first.                                     | String  |
| N/A | --maxSSHConnections | Increase the SSH Connection from Tunnel Client to Tunnel Server. Maximum allow is 30 | N/A |
| -n           | --tunnelName    | Specifies the custom LambdaTest Tunnel name to be used.                                                                                             | String  |
| -u           | --user          | LambdaTest Username.                                                                                                                                | String  |
| -v           | --verbose       | Should Every Proxy Request Be Logged To Stdout                                                                                                      | N/A     |
|              | --version       | Displays the installed version for LambdaTest Tunnel                                                                                                | N/A     |

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
        LambdaTest Tunnel Modifiers
      </span>
    </li>
  </ul>
</nav>
