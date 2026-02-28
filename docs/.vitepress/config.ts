import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Luna UI',
  description: 'A modern Vue 3 component library with theme support',
  base: '/HQ-UI/',
  head: [
    ['link', { rel: 'icon', href: '/HQ-UI/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: '组件', link: '/components/button', activeMatch: '/components/' },
      {
        text: '相关链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/hongqi-lgs/HQ-UI' },
          { text: 'Playground', link: 'https://hongqi-lgs.github.io/HQ-UI/playground/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '主题定制', link: '/guide/theming' },
          ]
        }
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
          ]
        },
        {
          text: '数据录入',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Switch 开关', link: '/components/switch' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hongqi-lgs/HQ-UI' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 hongqi-lgs'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '目录'
    }
  },
  vite: {
    resolve: {
      alias: {
        'luna-ui': new URL('../../packages/luna-ui/src', import.meta.url).pathname
      }
    }
  }
})





