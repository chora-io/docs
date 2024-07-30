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
                text: 'Authority Module',
                link: '/specs/authority/index.md',
              },
              {
                text: 'Content Module',
                link: '/specs/content/index.md',
              },
              {
                text: 'Ecosystem Module',
                link: '/specs/ecosystem/index.md',
              },
              {
                text: 'Governor Module',
                link: '/specs/governor/index.md',
              },
              {
                text: 'Staking Module',
                link: '/specs/staking/index.md',
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
              text: 'Authority Module',
              collapsible: true,
              children: [
                '/specs/authority/index.md',
                '/specs/authority/01_concepts.md',
                '/specs/authority/02_msg.md',
                '/specs/authority/03_query.md',
                '/specs/authority/04_state.md',
                '/specs/authority/05_events.md',
              ],
            },
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
              text: 'Ecosystem Module',
              collapsible: true,
              children: [
                '/specs/ecosystem/index.md',
                '/specs/ecosystem/01_concepts.md',
                '/specs/ecosystem/02_msg.md',
                '/specs/ecosystem/03_query.md',
                '/specs/ecosystem/04_state.md',
                '/specs/ecosystem/05_events.md',
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
              text: 'Staking Module',
              collapsible: true,
              children: [
                '/specs/staking/index.md',
                '/specs/staking/01_concepts.md',
                '/specs/staking/02_msg.md',
                '/specs/staking/03_query.md',
                '/specs/staking/04_state.md',
                '/specs/staking/05_events.md',
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
