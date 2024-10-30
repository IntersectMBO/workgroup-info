// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IntersectMBO Working Groups',
  tagline: '',
  favicon: '/img/intersect.ico',

  // Set the production url of your site here
  url: 'https://intersectMBO.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/workgroup-info/',

  // GitHub pages deployment config.
  organizationName: 'intersectMBO', // Your GitHub org/user name
  projectName: 'workgroup-info', // Your repo name
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/cardano-logo.png',
      navbar: {
        title: 'API/CLI Working Group Information',
        logo: {
          alt: 'IntersectMBO Logo',
          src: 'img/intersect-logo.png',
          srcDark: 'img/intersect-logo-white.png',
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
              },
            ],
          },
          {
            title: 'GitHub',
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
