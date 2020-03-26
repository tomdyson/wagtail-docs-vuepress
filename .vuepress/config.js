module.exports = {
  title: "Wagtail CMS Documentation",
  plugins: [
    'vuepress-plugin-element-tabs'
  ],
  themeConfig: {
    logo: 'https://cdn.freebiesupply.com/logos/large/2x/wagtail-logo-png-transparent.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Background', link: '/background/' }
    ],
    sidebar: {
      '/tutorials/': [
        '',      /* /tutorials/ */
        'your-first-wagtail-site' /* /tutorials/your-first-wagtail-site.html */
      ],

      '/guides/': [
        '',     /* /guides/ */
        'api'  /* /guides/api.html */
      ],

      '/reference/': [
        '',      /* /reference/ */
        'images' /* /reference/images.html */
      ],

      '/background/': [
        ''
      ],

      // fallback
      '/': [
        ''
      ]
    },
    repo: 'wagtail/wagtail',
    docsDir: 'docs',
    editLinks: true,
  }
}
