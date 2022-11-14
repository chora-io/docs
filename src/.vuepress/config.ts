import { defaultTheme } from '@vuepress/theme-default'

const { description } = require('../../package')

export default {
  title: 'Chora Docs',
  description: description,
  theme: defaultTheme({
    colorMode: "light", // TODO: better image
    colorModeSwitch: false, // TODO: better image
    contributors: false,
    editLink: false,
    lastUpdated: false,
    logo: 'img/chora.png',
    logoDark: 'img/chora.png', // TODO: better image
    repo: 'choraio/docs',
    navbar: [
      {
        text: 'Research',
        link: '/research/',
      },
      {
        text: 'Development',
        link: '/development/',
      },
    ],
    sidebar: {
      '/research/': [
        {
          text: 'Research',
          collapsible: false,
          children: [
            '',
          ],
        },
      ],
      '/development/': [
        {
          text: 'Development',
          collapsible: false,
          children: [
            '',
          ]
        },
      ],
    },
    sidebarDepth: 0,
    themePlugins: {
      backToTop: true,
    },
  }),
}
