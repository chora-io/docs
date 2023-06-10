import { defaultTheme, defineUserConfig } from 'vuepress'

const { description } = require('../package')

export default defineUserConfig({
  title: 'chora docs',
  description: description,
  theme: defaultTheme({
    colorMode: 'dark',
    contributors: false,
    editLink: false,
    lastUpdated: false,
    logo: 'images/chora_trans_light_small.png',
    logoDark: 'images/chora_trans_dark_small.png',
    repo: 'choraio',
    navbar: [
      {
        text: 'Guides',
        children: [
          {
            text: 'Overview',
            link: '/guides/index.md',
          },
          {
            text: 'Coop App',
            link: '/guides/web-coop/index.md',
          },
          {
            text: 'Data App',
            link: '/guides/web-data/index.md',
          },
          {
            text: 'Mods App',
            link: '/guides/web-mods/index.md',
          },
          {
            text: 'Scan App',
            link: '/guides/web-scan/index.md',
          },
        ],
      },
      {
        text: 'Specs',
        children: [
          {
            text: 'Overview',
            link: '/specs/index.md',
          },
          {
            text: 'Content Module',
            link: '/specs/content/README.md',
          },
          {
            text: 'Geonode Module',
            link: '/specs/geonode/README.md',
          },
          {
            text: 'Validator Module',
            link: '/specs/validator/README.md',
          },
          {
            text: 'Voucher Module',
            link: '/specs/voucher/README.md',
          },
        ],
      },
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'Overview',
          collapsible: true,
          children: [
            '/guides/index.md',
            '/guides/software.md',
            '/guides/interfaces.md',
            '/guides/networks.md',
          ],
        },
        {
          text: 'Coop App',
          collapsible: true,
          children: [
            '/guides/web-coop/index.md',
          ],
        },
        {
          text: 'Data App',
          collapsible: true,
          children: [
            '/guides/web-data/index.md',
          ],
        },
        {
          text: 'Mods App',
          collapsible: true,
          children: [
            '/guides/web-mods/index.md',
          ],
        },
        {
          text: 'Scan App',
          collapsible: true,
          children: [
            '/guides/web-scan/index.md',
          ],
        },
      ],
      '/specs/': [
        {
          text: 'Overview',
          collapsible: false,
          children: [
            '/specs/index.md',
          ]
        },
        {
          text: 'Content Module',
          collapsible: true,
          children: [
            '/specs/content/README.md',
            '/specs/content/01_concepts.md',
            '/specs/content/02_msg.md',
            '/specs/content/03_query.md',
            '/specs/content/04_state.md',
            '/specs/content/05_events.md',
          ]
        },
        {
          text: 'Geonode Module',
          collapsible: true,
          children: [
            '/specs/geonode/README.md',
            '/specs/geonode/01_concepts.md',
            '/specs/geonode/02_msg.md',
            '/specs/geonode/03_query.md',
            '/specs/geonode/04_state.md',
            '/specs/geonode/05_events.md',
          ]
        },
        {
          text: 'Validator Module',
          collapsible: true,
          children: [
            '/specs/validator/README.md',
            '/specs/validator/01_concepts.md',
            '/specs/validator/02_msg.md',
            '/specs/validator/03_query.md',
            '/specs/validator/04_state.md',
            '/specs/validator/05_events.md',
          ]
        },
        {
          text: 'Voucher Module',
          collapsible: true,
          children: [
            '/specs/voucher/README.md',
            '/specs/voucher/01_concepts.md',
            '/specs/voucher/02_msg.md',
            '/specs/voucher/03_query.md',
            '/specs/voucher/04_state.md',
            '/specs/voucher/05_events.md',
          ]
        },
      ],
    },
    sidebarDepth: 0,
  }),
})
