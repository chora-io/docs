import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

const { name, description } = require('../package')

export default defineUserConfig({
  title: name,
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
                link: '/specs/mods/admin/index.md',
              },
              {
                text: 'Content Module',
                link: '/specs/mods/content/index.md',
              },
              {
                text: 'Governor Module',
                link: '/specs/mods/governor/index.md',
              },
              {
                text: 'Proposal Module',
                link: '/specs/mods/proposal/index.md',
              },
              {
                text: 'Subject Module',
                link: '/specs/mods/subject/index.md',
              },
              {
                text: 'Validator Module',
                link: '/specs/mods/validator/index.md',
              },
              {
                text: 'Voucher Module',
                link: '/specs/mods/voucher/index.md',
              },
            ],
          },
          {
            text: 'Blockchain Templates',
            children: [
              {
                text: 'Bion PoA Example',
                link: '/specs/bion-poa/index.md',
              },
              {
                text: 'Bion PoS Example',
                link: '/specs/bion-pos/index.md',
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
                '/specs/mods/admin/index.md',
                '/specs/mods/admin/01_concepts.md',
                '/specs/mods/admin/02_msg.md',
                '/specs/mods/admin/03_query.md',
                '/specs/mods/admin/04_state.md',
                '/specs/mods/admin/05_events.md',
                {
                  text: 'Features',
                  collapsible: false,
                  children: [
                    '/specs/mods/admin/features.md',
                    '/specs/mods/admin/keeper_msg_update_admin.md',
                    '/specs/mods/admin/keeper_query_admin.md',
                    '/specs/mods/admin/types_msg_update_admin.md',
                    '/specs/mods/admin/types_state_admin.md',
                  ],
                },
              ],
            },
            {
              text: 'Content Module',
              collapsible: true,
              children: [
                '/specs/mods/content/index.md',
                '/specs/mods/content/01_concepts.md',
                '/specs/mods/content/02_msg.md',
                '/specs/mods/content/03_query.md',
                '/specs/mods/content/04_state.md',
                '/specs/mods/content/05_events.md',
                {
                  text: 'Features',
                  collapsible: false,
                  children: [
                    '/specs/mods/content/features.md',
                    '/specs/mods/content/keeper_msg_create_content.md',
                    '/specs/mods/content/keeper_msg_remove_content.md',
                    '/specs/mods/content/keeper_msg_update_content_curator.md',
                    '/specs/mods/content/keeper_query_content.md',
                    '/specs/mods/content/keeper_query_contents_by_curator.md',
                    '/specs/mods/content/keeper_query_contents.md',
                    '/specs/mods/content/types_msg_create_content.md',
                    '/specs/mods/content/types_msg_remove_content.md',
                    '/specs/mods/content/types_msg_update_content_curator.md',
                    '/specs/mods/content/types_state_content.md',
                  ],
                },
              ],
            },
            {
              text: 'Governor Module',
              collapsible: true,
              children: [
                '/specs/mods/governor/index.md',
                '/specs/mods/governor/01_concepts.md',
                '/specs/mods/governor/02_msg.md',
                '/specs/mods/governor/03_query.md',
                '/specs/mods/governor/04_state.md',
                '/specs/mods/governor/05_events.md',
                {
                  text: 'Features',
                  collapsible: false,
                  children: [
                    '/specs/mods/governor/features.md',
                    '/specs/mods/governor/keeper_msg_create_governor.md',
                    '/specs/mods/governor/keeper_msg_remove_governor.md',
                    '/specs/mods/governor/keeper_msg_update_governor_metadata.md',
                    '/specs/mods/governor/keeper_query_governor.md',
                    '/specs/mods/governor/keeper_query_governors.md',
                    '/specs/mods/governor/types_msg_create_governor.md',
                    '/specs/mods/governor/types_msg_remove_governor.md',
                    '/specs/mods/governor/types_msg_update_governor_metadata.md',
                    '/specs/mods/governor/types_state_governor.md',
                  ],
                },
              ],
            },
            {
              text: 'Proposal Module',
              collapsible: true,
              children: [
                '/specs/mods/proposal/index.md',
                '/specs/mods/proposal/01_concepts.md',
                '/specs/mods/proposal/02_msg.md',
                '/specs/mods/proposal/03_query.md',
                '/specs/mods/proposal/04_state.md',
                '/specs/mods/proposal/05_events.md',
              ],
            },
            {
              text: 'Subject Module',
              collapsible: true,
              children: [
                '/specs/mods/subject/index.md',
                '/specs/mods/subject/01_concepts.md',
                '/specs/mods/subject/02_msg.md',
                '/specs/mods/subject/03_query.md',
                '/specs/mods/subject/04_state.md',
                '/specs/mods/subject/05_events.md',
                {
                  text: 'Features',
                  collapsible: false,
                  children: [
                    '/specs/mods/subject/features.md',
                    '/specs/mods/subject/keeper_msg_create_subject.md',
                    '/specs/mods/subject/keeper_msg_remove_subject.md',
                    '/specs/mods/subject/keeper_msg_update_subject_metadata.md',
                    '/specs/mods/subject/keeper_msg_update_subject_steward.md',
                    '/specs/mods/subject/keeper_query_subject.md',
                    '/specs/mods/subject/keeper_query_subjects_by_steward.md',
                    '/specs/mods/subject/keeper_query_subjects.md',
                    '/specs/mods/subject/types_msg_create_subject.md',
                    '/specs/mods/subject/types_msg_remove_subject.md',
                    '/specs/mods/subject/types_msg_update_subject_metadata.md',
                    '/specs/mods/subject/types_msg_update_subject_steward.md',
                    '/specs/mods/subject/types_state_subject.md',
                  ],
                },
              ],
            },
            {
              text: 'Validator Module',
              collapsible: true,
              children: [
                '/specs/mods/validator/index.md',
                '/specs/mods/validator/01_concepts.md',
                '/specs/mods/validator/02_msg.md',
                '/specs/mods/validator/03_query.md',
                '/specs/mods/validator/04_state.md',
                '/specs/mods/validator/05_events.md',
                {
                  text: 'Features',
                  collapsible: false,
                  children: [
                    '/specs/mods/validator/features.md',
                    '/specs/mods/validator/keeper_msg_create_validator.md',
                    '/specs/mods/validator/keeper_msg_remove_validator.md',
                    '/specs/mods/validator/keeper_msg_update_policy.md',
                    '/specs/mods/validator/keeper_msg_update_validator.md',
                    '/specs/mods/validator/keeper_query_policy.md',
                    '/specs/mods/validator/keeper_query_validator.md',
                    '/specs/mods/validator/keeper_query_validators.md',
                    '/specs/mods/validator/types_msg_create_validator.md',
                    '/specs/mods/validator/types_msg_remove_validator.md',
                    '/specs/mods/validator/types_msg_update_max_missed_blocks.md',
                    '/specs/mods/validator/types_msg_update_validator.md',
                    '/specs/mods/validator/types_state_validator.md',
                    '/specs/mods/validator/types_state_validator_signing_info.md',
                  ],
                },
              ],
            },
            {
              text: 'Voucher Module',
              collapsible: true,
              children: [
                '/specs/mods/voucher/index.md',
                '/specs/mods/voucher/01_concepts.md',
                '/specs/mods/voucher/02_msg.md',
                '/specs/mods/voucher/03_query.md',
                '/specs/mods/voucher/04_state.md',
                '/specs/mods/voucher/05_events.md',
                {
                  text: 'Features',
                  collapsible: false,
                  children: [
                    '/specs/mods/voucher/features.md',
                    '/specs/mods/voucher/keeper_msg_create.md',
                    '/specs/mods/voucher/keeper_msg_issue.md',
                    '/specs/mods/voucher/keeper_msg_update_issuer.md',
                    '/specs/mods/voucher/keeper_msg_update_metadata.md',
                    '/specs/mods/voucher/keeper_query_balance.md',
                    '/specs/mods/voucher/keeper_query_balances_by_address.md',
                    '/specs/mods/voucher/keeper_query_balances_by_voucher.md',
                    '/specs/mods/voucher/keeper_query_voucher.md',
                    '/specs/mods/voucher/keeper_query_vouchers_by_issuer.md',
                    '/specs/mods/voucher/keeper_query_vouchers.md',
                    '/specs/mods/voucher/types_msg_create.md',
                    '/specs/mods/voucher/types_msg_issue.md',
                    '/specs/mods/voucher/types_msg_update_issuer.md',
                    '/specs/mods/voucher/types_msg_update_metadata.md',
                    '/specs/mods/voucher/types_state_balance.md',
                    '/specs/mods/voucher/types_state_voucher.md',
                  ],
                },
              ],
            },
          ],
        },
        {
          text: 'Blockchain Templates',
          children: [
            '/specs/bion-poa/index.md',
            '/specs/bion-pos/index.md',
          ],
        },
      ],
    },
    sidebarDepth: 0,
  }),
})
