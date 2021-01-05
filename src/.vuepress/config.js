module.exports = {
    title: 'YL3LK piezīmes',
    description: 'Kāda šķiņķa piezīmes...',
    locales: {
        '/': {
            lang: 'en-US',
        }
    },
    theme: 'meteorlxy',
    themeConfig: {
        lang: {
            home: 'Sākums',
            posts: 'Raksti',
            category: 'Kategorija',
            categories: 'Kategorijas',
            allCategories: 'Visi raksti',
            tag: 'Birka',
            tags: 'Birkas',
            createdAt: 'Publicēts',
            updatedAt: 'Atjaunots',
            prevPost: 'Iepriekšējais raksts',
            nextPost: 'Nākašais raksts',
        },
        personalInfo: {
            nickname: 'YL3LK',
            email: 'yl3lk[at]lrg[dot]lv',
            location: 'Liepāja, Latvija',
            qrz:  'https://www.qrz.com/db/yl3lk',
            avatar: '/assets/images/avatar.jpg',
        },
        header: {
            background: {
                url: '/assets/images/hero1.jpg',
            },
            showTitle: true,
        },
        footer: {
            poweredBy: false,
            custom: '  <span>Izveidots ar </span> <a href="https://github.com/vuejs/vuepress"target="_blank">VuePress</a>.  Stils no <a href="https://github.com/meteorlxy/vuepress-theme-meteorlxy"target="_blank">meteorlxy</a>. <span>Uztur </span> <a href="https://github.com/mrmoonlv/lk.yl3.lv"target="_blank">GitHub</a>. ',
        },
        infoCard: {
            headerBackground: {
                url: '/assets/images/bg.jpg'
            }
        },
        lastUpdated: true,
        nav: [
            {text: 'Sākums', link: '/', exact: true},
            {text: 'QSL', link: '/qsl', exact: true},
            {text: 'Birkas', link: '/posts/tags', exact: false},
        ],
        smoothScroll: true,
        comments: false,
        pagination: {
            perPage: 5,
        },
        defaultPages: {
            home: true,
            posts: false,
        }
    }
}