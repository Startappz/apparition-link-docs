import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";
import { search as faSearch } from "./fa";

export const shared = defineConfig({
  title: "Apparation",

  rewrites: {
    "en/:rest*": ":rest*",
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        },
      },
    ],
    config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!;
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = "root" } = env;
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case "es":
              return "Copiar código";
            case "fa":
              return "کپی کد";
            case "ko":
              return "코드 복사";
            case "pt":
              return "Copiar código";
            case "ru":
              return "Скопировать код";
            case "zh":
              return "复制代码";
            default:
              return "Copy code";
          }
        })();
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`,
        );
      };
      md.use(groupIconMdPlugin);
    },
  },

  // sitemap: {
  //   hostname: "https://vitepress.dev",
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes("migration"));
  //   },
  // },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Apparition | Smart Deep Linking &amp; Mobile Attribution' }],
    ['meta', { property: 'og:site_name', content: 'Apparition' }],
    ['meta', { property: 'og:image', content: '' }],
    ['meta', { property: 'og:url', content: 'https://apparition.link/' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    //logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "algolia",
      options: {
        appId: process.env.ALGOLIA_APP_ID || "GCCLAONBU9",
        apiKey:
          process.env.ALGOLIA_SECRET || "25dbd0edf1b322955d1cc97e33d15b6e",
        indexName: "apparitions",
        locales: {
          ...faSearch,
        },
      },
    },

    //carbonAds: { code: "CEBDT27Y", placement: "vuejsorg" },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          // vitepress: localIconLoader(
          //   import.meta.url,
          //   "../../public/vitepress-logo-mini.svg",
          // ),
          firebase: "logos:firebase",
        },
      }),
    ],
  },
});
