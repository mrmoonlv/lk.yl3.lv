module.exports = {
    title: 'YL3LK',
    description: 'Kāda šķiņķa piezīmes...',
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
        ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
        ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
        ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
        ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
        ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
        ['meta', { name: "theme-color", content: "#ffffff"}],
    ],
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
    },
    plugins: {
        '@vuepress/plugin-google-analytics': {
            ga: 'UA-119014961-1',
        },
    },
}