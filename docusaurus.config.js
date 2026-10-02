// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "eTaxi Documentation",
  tagline: "Documentation for eTaxi Admin Panel, Mobile App, and Web",
  favicon: "images/logo/favicon.png",

  // Set the production url of your site here.
  // Site is published at https://wrteam-in.github.io/e-taxi-doc/
  url: 'https://wrteam-in.github.io',
  // baseUrl must match the repository name for GitHub project pages.
  // Override locally with: BASE_URL=/ bun run start
  baseUrl: process.env.BASE_URL ?? '/e-taxi-doc/',
  organizationName: 'WRTeam-in',
  projectName: 'e-taxi-doc',
  trailingSlash: true,
  deploymentBranch: "gh-pages", // Deployment branch for GitHub Pages
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Add local search plugin with a unique ID to avoid conflicts
  plugins: [require.resolve("@easyops-cn/docusaurus-search-local")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
      image: "images/logo/favicon.png",
      navbar: {
        title: "eTaxi",
        logo: {
          alt: "eTaxi Logo",
          src: "images/logo/favicon.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Documentation",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://wrteam.in/",
            label: "WRTeam",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} WRTeam. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),

  // Add Font Awesome for icons
  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
  ],
};

export default config;
