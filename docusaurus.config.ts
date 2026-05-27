import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { GITHUB_REPO_URL } from "./src/const";
require('dotenv').config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const SITE_CONFIG = {
  isProduction: process.env.MODE === 'production',
  isStaging: process.env.MODE === 'staging',
}

const config: Config = {
  title: "Mesh сообщество Иваново",
  tagline: "Сообщество mesh сетей в городе Иванове",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://mesh37.ru",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        language: ["ru"],
        docsRouteBasePath: ["/"],
        hashed: true,
        indexDocs: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${GITHUB_REPO_URL}/tree/main/`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Mesh сообщество Иваново",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Документация",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: GITHUB_REPO_URL,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        {
          title: "Комьюнити",
          items: [
            {
              label: "Meshtastic Ivanovo Community в Telegram",
              href: "https://t.me/meshtastic37",
            },
            {
              label: "Резервный чат Meshtastic37 в Макс",
              href: "https://max.ru/join/kjCAJUHdxeWD100bmEMsuREUnaAUc0LVCvWWQuqfxfQ",
            },
            {
              label: "MeshCore_IWA",
              href: "https://t.me/meshcore_iwa",
            },
          ],
        },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://t.me/meshtastic37">Meshtastic Ivanovo Community</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
    headTags: [
    {
      tagName: 'script',
      attributes: { type: 'text/javascript' },
      innerHTML: `window.SITE_CONFIG = ${JSON.stringify(SITE_CONFIG)};`,
    },
  ],
  scripts: [
    {
      src: "/js/scripts.js",
      async: true,
    },
  ],
};

export default config;
