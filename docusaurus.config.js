// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IntersectMBO Working groups',
  tagline: '',
  favicon: '/img/intersect.ico',

  // Set the production url of your site here
  url: 'https://intersectMBO.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/working-groups-info/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'intersectMBO', // Usually your GitHub org/user name.
  projectName: 'working-groups-info', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cardano-logo.png',
      navbar: {
        title: 'API/CLI Working Group Information',
        logo: {
          alt: 'IntersectMBO Logo',
          src: 'img/intersect-logo.png',
          srcDark:'img/intersect-logo-white.png'
        },
        items: [
          {
            href: 'https://github.com/IntersectMBO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'IntersectMBO',
                href: 'https://www.intersectmbo.org',
              },
              {
                label: 'Twitter IntersectMBO',
                href: 'https://x.com/IntersectMBO',
              }
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'GitHub IntersectMBO',
                href: 'https://github.com/IntersectMBO',
              },
              {
                label: 'Cardano-API repository',
                href: 'https://github.com/IntersectMBO/cardano-api',
              },
              {
                label: 'Cardano-CLI repository',
                href: 'https://github.com/IntersectMBO/cardano-cli',
              },
            ],
          },
        ],
        copyright: `Copyright © IntersectMBO ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.tomorrow,
      },
    }),
};

export default config;