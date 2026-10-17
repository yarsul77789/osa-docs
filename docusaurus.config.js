// @ts-check
// Конфигурация Docusaurus для базы знаний альянса Оса #242 (Last Asylum).
// Статьи лежат в docs/ и отдаются с корня сайта: /osa-docs/<имя-файла>.
// Этот же путь использует Telegram-бот для кнопки «Открыть на сайте».

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Оса #242',
  tagline: 'База знаний альянса',

  url: 'https://yarsul77789.github.io',
  baseUrl: '/osa-docs/',

  organizationName: 'yarsul77789',
  projectName: 'osa-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Статьи — в корне сайта, без префикса /docs
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/yarsul77789/osa-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Оса #242',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'knowledgeBase',
            position: 'left',
            label: 'База знаний',
          },
          {
            href: 'https://github.com/yarsul77789/osa-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Альянс Оса #242 · Last Asylum · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
