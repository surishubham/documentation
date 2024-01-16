module.exports = {
  title: 'LambdaTest',
  tagline: 'Ensure your web-apps work seamlessly on every desktop and mobile browsers.',
  url: 'https://www.lambdatest.com',
  baseUrl: '/support/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Lambdatest', // Usually your GitHub org/user name.
  projectName: 'Lambdatest', // Usually your repo name.
  clientModules: [
    require.resolve('./custom.js'),
  ],
  scripts: [
    {
      src: 'https://www.lambdatest.com/resources/js/zohoscript.js',
      defer: true,
    },
    {
      src: 'https://staging.lambdatestinternal.com/resources/js/lambda_gtm.js',
      defer: true,
    },
    // {
    //   src: 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js',
    //   defer: true,
    // }
  ],
  // themes: ['docusaurus-theme-search-typesense'],

  themeConfig: {
    // docs: {
    //   sidebar: {
    //     hideable: true,
    //   },
    // },
    
    prism: {
        additionalLanguages: ['powershell','java','csharp','php','ruby','robotframework'],
    },
    algolia: {
      apiKey: '21e5be14ef037223a329241ae6ac5678',
      indexName: 'lambdatest',
      appId: 'LTX5ENOXAD',
      // Optional: see doc section bellow
      // contextualSearch: true,
      contextualSearch: false,
      // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
    },
    navbar: {
      title: null,
      hideOnScroll: true,
      logo: {
        alt: 'LambdaTest',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
        href: 'https://www.lambdatest.com',
        target:'_self',
        width:'147',
        height:'26'
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a role="button" tabindex="0" id="signbtn" href="https://stage-accounts.lambdatestinternal.com/register" class="getstart_btn">Get Started Free</a>',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'api-doc/',
          activeBasePath: 'api-doc',
          label: 'API Reference',
          position: 'left',
        },
        {
          to: 'faq/',
          activeBasePath: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          type: 'html',
          position: 'left',
          value: '<a role="button" tabindex="0" href="https://github.com/LambdaTest" target="_blank" class="navbar__item navbar__link">GitHub<img src="https://staging.lambdatestinternal.com/support/img/Github.svg" alt="" role="presentation" title="LambdaTest GitHub" width="12" height="12" class="head_gitimg" style="margin-left:5px;"/></a>',
        }
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,    
          breadcrumbs: false,      
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      },
    ],
  ],
};

