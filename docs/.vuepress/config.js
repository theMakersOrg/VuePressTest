module.exports = {
    title: 'theMakers.org',
    description: 'Smart community Shared resources',
    themeConfig:{
        nav: [
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
        ],
        sidebar: [
            {
                title: 'Counter',
                collapsable: false,
                children: [
                '/counter/counter-app'
                ]
            },
            {
                title: 'API Guide',
                collapsable: false,
                children: [
                    '/guide/guide',
                    '/guide/api'
                ]
            }
            ]
    }
  }