module.exports = {
  title: 'OHA Website',
  description: 'Documentation for the Ohio Hospital Association Website',
  serviceWorker: true,
  themeConfig: {
    // editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
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
          // {
          //   text: 'Config Reference',
          //   link: '/config/'
          // },
          // {
          //   text: 'Default Theme Config',
          //   link: '/default-theme-config/'
          // },
          // {
          //   text: 'Changelog',
          //   link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          // }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }
      }
    }
  }
}

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'getting-started',
      'basic-config',
      'assets',
      'markdown',
      'using-vue',
      'custom-themes',
      'i18n',
      'deploy'
    ]
  }]
}