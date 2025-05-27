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
  favicon: "img/arkmq-logo-icon.png",

  // Set the production url of your site here
  // When forking, please change url to GIT_USER.github.io and baseUrl to fork repo name
  url: "https://jessicachitas.github.io",
  baseUrl: "/arkmq-org.github.io",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "arkmq-org", // Usually your GitHub org/user name.
  // projectName: "arkmq-org.github.io", // Usually your repo name.

  // FOR DEVELOPMENT ONLY
  // SWITCH TO ABOVE ORGNAME AND PROJECT NAME WHEN READY TO BE DEPLOYED

  // When forking, please change organisationName to your GitHub username and projectName to your fork repo name
  organizationName: "jessicachitas",
  projectName: "arkmq-org.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        logo: {
          alt: "ArkMQ",
          src: "img/arkmq-logo.png",
          srcDark: "img/arkmq-logo-darkmode.png",
        },
        items: [
          {
            label: "Quick Start",
            to: "/docs/getting-started/quick-start",
            position: "right",
          },
          { label: "Docs", to: "/docs", position: "right" },
          { label: "Contribute", to: "/docs/contribute", position: "right" },
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
              { label: "Quick Start", to: "/docs/getting-started/quick-start" },
              { label: "Help", to: "/docs/help" },
              { label: "Tutorials", to: "/docs/tutorials" },
            ],
          },
          {
            title: "Community",
            items: [{ label: "GitHub", href: "https://github.com/arkmq-org" }],
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
