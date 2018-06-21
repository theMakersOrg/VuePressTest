module.exports = {
    title: 'theMakers.org',
    description: 'Smart community Shared resources',
    themeConfig:{
        nav: [
            { text: 'WHERE', link: '/#where' },
            { text: 'WHAT', link: '/#what' },
            { text: 'WHEN', link: '/#open-night' },
        ],
        sidebar: [
            {
                title: 'where',
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