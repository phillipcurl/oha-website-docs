module.exports = {
  title: 'OHA Website',
  description: 'Documentation for www.ohiohospitals.org',
  serviceWorker: true,
  themeConfig: {
    // editLinks: true,
    docsDir: 'docs',
    // label: 'English',
    // selectText: 'Languages',
    // editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    nav: [{
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Templates',
        link: '/templates/',
      }
      // {
      //   text: 'Config Reference',
      //   link: '/config/'
      // },
      // {
      //   text: 'Default Theme Config',
      //   link: '/default-theme-config/'z
      // },
      // {
      //   text: 'Changelog',
      //   link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
      // }
    ],
    sidebar: {
      '/guide/': [{
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'adding-page',
          'page-metadata',
          'editing-content',
          'adding-contacts'
        ]
      }],
      '/templates/': [{
        title: 'Page Templates',
        collapsable: false,
        children: [
          '',
          'home-page',
          'primary-landing',
          'secondary-landing',
          'tertiary-a',
          'tertiary-b',
          'tertiary-c',
          'tertiary-d',
          'tertiary-e',
          'hiin-a',
          'hiin-b',
          'hiin-c'
        ]
      }]
    }
  }
}

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'adding-contacts'
    ]
  }]
}