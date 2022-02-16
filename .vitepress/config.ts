import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/docs',
  title: 'Lean Vue',
  lang: 'de-DE',
  description: 'Trainings-Dokumentation zu meiner Vue Schulung',

  srcDir: 'src',
  outDir: 'dist',

  themeConfig: {
    repo: 'lean-vue/docs',
    docsDir: 'src',
    docsBranch: 'main',
    editLinks: true,

    nav: [
      { text: 'Docs', link: '/guide/introduction', activeMatch: '^/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          children: [
            { text: 'Introduction', link: '/guide/introduction' },
            {
              text: 'Quick Start',
              link: '/guide/quick-start',
            },
          ],
        },
        {
          text: 'Essentials',
          children: [
            {
              text: 'Creating an Application',
              link: '/guide/essentials/application',
            },
            {
              text: 'Template Syntax',
              link: '/guide/essentials/template-syntax',
            },
            {
              text: 'Reactivity',
              link: '/guide/essentials/reactivity',
            },
          ],
        },
      ],
    },
  },
});
