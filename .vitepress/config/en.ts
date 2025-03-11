import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";

const require = createRequire(import.meta.url);

export const en = defineConfig({
  lang: "en-US",
  description: "",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guides/": { base: "/guides/", items: sidebarGuide() },
      "/reference/": { base: "/reference/", items: sidebarReference() },
    },

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Guide",
      link: "/guides/native-sdks-overview",
      activeMatch: "/guides/",
    },
    {
      text: "Reference",
      link: "/reference/apis-overview",
      activeMatch: "/reference/",
    },
    {
      text: "111",
      items: [
        {
          text: "Changelog",
          link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
        },
      ],
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Apparaition SDKs",
      collapsed: false,
      items: [
        { text: "Apparation SDK Overview", link: "native-sdks-overview" },
        {
          text: "Android SDK",
          collapsed: true,
          items: [
            {
              text: "Android Basic Integration",
              link: "android-basic-integration",
            },
            {
              text: "Android Advanced Features",
              link: "android-advanced-features",
            },
          ],
        },

        {
          text: "iOS SDK",
          collapsed: true,
          items: [
            {
              text: "iOS Basic Integration",
              link: "ios-basic-integration",
            },
            {
              text: "iOS Advanced Features",
              link: "ios-advanced-features",
            },
          ],
        },

        {
          text: "Web SDK",
          collapsed: true,
          items: [
            {
              text: "Web Basic Integration",
              link: "web-basic-integration",
            },
            {
              text: "Web Advanced Features",
              link: "web-advanced-features",
            },
          ],
        },

        // { text: "Getting Started", link: "getting-started" },
        // { text: "Routing", link: "routing" },
        // { text: "Deploy", link: "deploy" },
      ],
    },
    // {
    //   text: "Writing",
    //   collapsed: false,
    //   items: [
    //     { text: "Markdown Extensions", link: "markdown" },
    //     { text: "Asset Handling", link: "asset-handling" },
    //     { text: "Frontmatter", link: "frontmatter" },
    //     { text: "Using Vue in Markdown", link: "using-vue" },
    //     { text: "Internationalization", link: "i18n" },
    //   ],
    // },
    // {
    //   text: "Customization",
    //   collapsed: false,
    //   items: [
    //     { text: "Using a Custom Theme", link: "custom-theme" },
    //     {
    //       text: "Extending the Default Theme",
    //       link: "extending-default-theme",
    //     },
    //     { text: "Build-Time Data Loading", link: "data-loading" },
    //     { text: "SSR Compatibility", link: "ssr-compat" },
    //     { text: "Connecting to a CMS", link: "cms" },
    //   ],
    // },
    // {
    //   text: "Experimental",
    //   collapsed: false,
    //   items: [
    //     { text: "MPA Mode", link: "mpa-mode" },
    //     { text: "Sitemap Generation", link: "sitemap-generation" },
    //   ],
    // },
    // {
    //   text: "Config & API Reference",
    //   base: "/reference/",
    //   link: "site-config",
    // },
  ];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Apparation Apis",
      items: [
        { text: "APIs Overview", link: "apis-overview" },
        // { text: "Frontmatter Config", link: "frontmatter-config" },
        // { text: "Runtime API", link: "runtime-api" },
        // { text: "CLI", link: "cli" },
        // {
        //   text: "Default Theme",
        //   base: "/reference/default-theme-",
        //   items: [
        //     { text: "Overview", link: "config" },
        //     { text: "Nav", link: "nav" },
        //     { text: "Sidebar", link: "sidebar" },
        //     { text: "Home Page", link: "home-page" },
        //     { text: "Footer", link: "footer" },
        //     { text: "Layout", link: "layout" },
        //     { text: "Badge", link: "badge" },
        //     { text: "Team Page", link: "team-page" },
        //     { text: "Prev / Next Links", link: "prev-next-links" },
        //     { text: "Edit Link", link: "edit-link" },
        //     { text: "Last Updated Timestamp", link: "last-updated" },
        //     { text: "Search", link: "search" },
        //     { text: "Carbon Ads", link: "carbon-ads" },
        //   ],
        // },
      ],
    },
  ];
}
