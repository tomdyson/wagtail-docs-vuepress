module.exports = {
  themeConfig: {
    logo: 'https://cdn.freebiesupply.com/logos/large/2x/wagtail-logo-png-transparent.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Tutorial', link: '/tutorial/' },
    ],
    sidebar: {
      '/guide/': [
        '',     /* /guide/ */
        'api'  /* /guide/api.html */
      ],

      '/reference/': [
        '',      /* /reference/ */
        'images' /* /reference/images.html */
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
