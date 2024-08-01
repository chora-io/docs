import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

const { description } = require('../package')

export default defineUserConfig({
  title: 'chora documentation',
  description: description,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  pagePatterns: [
    './index.md',
    '!./README.md',
    './guides',
    './specs',
  ],
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
                text: 'Chora Groups',
                link: '/guides/groups/index.md',
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
                link: '/guides/software/index.md',
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
                text: 'Admin Module',
                link: '/specs/admin/index.md',
              },
              {
                text: 'Governor Module',
                link: '/specs/governor/index.md',
              },
              {
                text: 'Proposal Module',
                link: '/specs/proposal/index.md',
              },
              {
                text: 'Subject Module',
                link: '/specs/subject/index.md',
              },
              {
                text: 'Token Module',
                link: '/specs/token/index.md',
              },
              {
                text: 'Validator Module',
                link: '/specs/validator/index.md',
              },
              {
                text: 'Vesting Module',
                link: '/specs/vesting/index.md',
              },
              {
                text: 'Voucher Module',
                link: '/specs/voucher/index.md',
              },
            ],
          },
          {
            text: 'Module Development',
            children: [
              {
                text: 'Example Module',
                link: '/specs/example/index.md',
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
              text: 'Chora Groups',
              collapsible: true,
              children: ['/guides/groups/index.md'],
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
                '/guides/software/index.md',
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
              text: 'Admin Module',
              collapsible: true,
              children: [
                '/specs/admin/index.md',
                '/specs/admin/01_concepts.md',
                '/specs/admin/02_msg.md',
                '/specs/admin/03_query.md',
                '/specs/admin/04_state.md',
                '/specs/admin/05_events.md',
              ],
            },
            {
              text: 'Governor Module',
              collapsible: true,
              children: [
                '/specs/governor/index.md',
                '/specs/governor/01_concepts.md',
                '/specs/governor/02_msg.md',
                '/specs/governor/03_query.md',
                '/specs/governor/04_state.md',
                '/specs/governor/05_events.md',
              ],
            },
            {
              text: 'Proposal Module',
              collapsible: true,
              children: [
                '/specs/proposal/index.md',
                '/specs/proposal/01_concepts.md',
                '/specs/proposal/02_msg.md',
                '/specs/proposal/03_query.md',
                '/specs/proposal/04_state.md',
                '/specs/proposal/05_events.md',
              ],
            },
            {
              text: 'Subject Module',
              collapsible: true,
              children: [
                '/specs/subject/index.md',
                '/specs/subject/01_concepts.md',
                '/specs/subject/02_msg.md',
                '/specs/subject/03_query.md',
                '/specs/subject/04_state.md',
                '/specs/subject/05_events.md',
              ],
            },
            {
              text: 'Token Module',
              collapsible: true,
              children: [
                '/specs/token/index.md',
                '/specs/token/01_concepts.md',
                '/specs/token/02_msg.md',
                '/specs/token/03_query.md',
                '/specs/token/04_state.md',
                '/specs/token/05_events.md',
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
              text: 'Vesting Module',
              collapsible: true,
              children: [
                '/specs/vesting/index.md',
                '/specs/vesting/01_concepts.md',
                '/specs/vesting/02_msg.md',
                '/specs/vesting/03_query.md',
                '/specs/vesting/04_state.md',
                '/specs/vesting/05_events.md',
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
        {
          text: 'Module Development',
          children: [
            {
              text: 'Example Module',
              collapsible: true,
              children: [
                '/specs/example/index.md',
                '/specs/example/01_concepts.md',
                '/specs/example/02_msg.md',
                '/specs/example/03_query.md',
                '/specs/example/04_state.md',
                '/specs/example/05_events.md',
              ],
            },
          ],
        },
      ],
    },
    sidebarDepth: 0,
  }),
})
