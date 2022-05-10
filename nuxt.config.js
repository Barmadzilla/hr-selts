export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Eesti HR Selts",
        htmlAttrs: {
            lang: "ee",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
        __dangerouslyDisableSanitizers: ["script"],
        script: [
            {
                src: "https://www.googletagmanager.com/gtag/js?id=G-JR5SVW5ER6",
                async: true,
            },
            {
                innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-JR5SVW5ER6')`,
            },
        ],
    },

    // target: 'static',
    // generate: {
    //     fallback: false,
    // },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/css/global.css",
        "@/assets/css/colors.css",
        "@/assets/css/animations.css",
        "@/assets/css/wp.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/google-analytics"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios", "@nuxtjs/sitemap"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    // build: {},

    sitemap: {
        hostname: "https://hrselts.ee",
        defaults: {
            changefreq: "weekly",
            priority: 1,
            lastmod: new Date(),
        },
    },
};
