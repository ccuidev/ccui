const components = Object.keys(require("../../components.json"));
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '组件库H 🥂',
      description: 'Documentation site for the Vue component library plugin'
    }
  },
  themeConfig: {
    // git repo here... gitlab, github
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: '帮助我们改进这个页面!!',
    search: false,
    locales: {
      '/': {
        label: '中文',
        selectText: '语言',
        lastUpdated: '最新更新',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: '新内容可用。',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: '入门指南', link: '/guide' },
          { text: '组件', link: '/components/' },
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: components
            }
          ]
        }
      }
    }
  }
}
