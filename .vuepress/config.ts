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
    repo: 'chora-io',
    navbar: [
      {
        text: 'Guides',
        children: [
          {
            text: 'Guidebook',
            children: [
              {
                text: 'Overview',
                link: '/guides/index.md',
              },
            ],
          },
          {
            text: 'User Guides',
            children: [
              {
                text: 'Get Started',
                link: '/guides/get-started.md',
              },
              {
                text: 'Chora Coop',
                link: '/guides/coop/index.md',
              },
              {
                text: 'Chora Registry',
                link: '/guides/registry/index.md',
              },
              {
                text: 'Chora Ledger',
                link: '/guides/ledger/index.md',
              },
            ],
          },
          {
            text: 'Developer Guides',
            children: [
              {
                text: 'Software Stack',
                link: '/guides/stack/index.md',
              },
            ],
          },
        ],
      },
      {
        text: 'Specs',
        children: [
          {
            text: 'Specifications',
            children: [
              {
                text: 'Table of Contents',
                link: '/specs/index.md',
              },
            ],
          },
          {
            text: 'Blockchain App',
            children: [
              {
                text: 'Chora Application',
                link: '/specs/chora/index.md',
              },
            ],
          },
          {
            text: 'Blockchain Modules',
            children: [
              {
                text: 'Content Module',
                link: '/specs/content/index.md',
              },
              {
                text: 'Geonode Module',
                link: '/specs/geonode/index.md',
              },
              {
                text: 'Validator Module',
                link: '/specs/validator/index.md',
              },
              {
                text: 'Voucher Module',
                link: '/specs/voucher/index.md',
              },
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'Guidebook',
          children: [
            '/guides/index.md',
          ],
        },
        {
          text: 'User Guides',
          children: [
            {
              text: 'Get Started',
              link: '/guides/get-started.md',
            },
            {
              text: 'Chora Coop',
              collapsible: true,
              children: ['/guides/coop/index.md'],
            },
            {
              text: 'Chora Registry',
              collapsible: true,
              children: ['/guides/registry/index.md'],
            },
            {
              text: 'Chora Ledger',
              collapsible: true,
              children: ['/guides/ledger/index.md'],
            },
          ],
        },
        {
          text: 'Developer Guides',
          children: [
            {
              text: 'Software Stack',
              collapsible: true,
              children: [
                '/guides/stack/index.md',
                '/guides/stack/interfaces.md',
              ],
            },
          ],
        },
      ],
      '/specs/': [
        {
          text: 'Specifications',
          children: [
            '/specs/index.md',
          ],
        },
        {
          text: 'Blockchain App',
          children: [
            '/specs/chora/index.md',
          ],
        },
        {
          text: 'Blockchain Modules',
          children: [
            {
              text: 'Content Module',
              collapsible: true,
              children: [
                '/specs/content/index.md',
                '/specs/content/01_concepts.md',
                '/specs/content/02_msg.md',
                '/specs/content/03_query.md',
                '/specs/content/04_state.md',
                '/specs/content/05_events.md',
              ],
            },
            {
              text: 'Geonode Module',
              collapsible: true,
              children: [
                '/specs/geonode/index.md',
                '/specs/geonode/01_concepts.md',
                '/specs/geonode/02_msg.md',
                '/specs/geonode/03_query.md',
                '/specs/geonode/04_state.md',
                '/specs/geonode/05_events.md',
              ],
            },
            {
              text: 'Validator Module',
              collapsible: true,
              children: [
                '/specs/validator/index.md',
                '/specs/validator/01_concepts.md',
                '/specs/validator/02_msg.md',
                '/specs/validator/03_query.md',
                '/specs/validator/04_state.md',
                '/specs/validator/05_events.md',
              ],
            },
            {
              text: 'Voucher Module',
              collapsible: true,
              children: [
                '/specs/voucher/index.md',
                '/specs/voucher/01_concepts.md',
                '/specs/voucher/02_msg.md',
                '/specs/voucher/03_query.md',
                '/specs/voucher/04_state.md',
                '/specs/voucher/05_events.md',
              ],
            },
          ],
        },
      ],
    },
    sidebarDepth: 0,
  }),
})
