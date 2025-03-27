// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ArkMQ",
  tagline: "Powered by Docusaurus",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "arkmq-org", // Usually your GitHub org/user name.
  projectName: "arkmq-org.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },

          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        // title: "My Site",
        logo: {
          alt: "ArkMQ",
          src: "img/arkmq-logo.png",
        },
        items: [
          { label: "Quick Start", to: "/docs/getting-started/quick-start", position: "right" },
          { label: "Contribute", to: "/docs/intro", position: "right" },
          { label: "Docs", to: "/docs/getting-started/introduction", position: "right" },
          { label: "Contact Us", to: "/docs/intro", position: "right" },
          // {
          //   href: "https://github.com/arkmq-org",
          //   label: "GitHub",
          //   position: "left",
          // },
        ],
      },

      // Config for footer here
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { label: "Quick Start", to: "/docs/intro" },
              { label: "Help", to: "/docs/intro" },
              { label: "Tutorials", to: "/docs/intro" },
            ],
          },
          {
            title: "Community",
            items: [
              { label: "GitHub", href: "https://github.com/arkmq-org" },
            ],
          },
        ],
        copyright: `Apache, Apache ActiveMQ Artemis,Artemis and associated open source project names are trademarks of the Apache Software Foundation.`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;
