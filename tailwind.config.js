module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                primary: "var(--primary-font)",
                secondary: "var(--secondary-font)",
            },
            fontSize: {},
            colors: {
                // texthover: 'var(--text-hover)',
            },
            spacing: {
                // spacex: 'var(--space-x)',
            },
            width: {},
            maxWidth: {},
            height: {},
            screens: {
                // 'min4k': { 'min': '1441px' },
                // 'maxxl': { 'max': '1280px' },
            },
            zIndex: {},
            backgroundImage: {
                // 'home-banner': "url('../img/home-banner.png')",
            },
            gridTemplateColumns: {},



            // shn
            colors: {
                'site-primary': 'var(--site-primary-color)',
                'site-secondary': 'var(--site-secondary-color)',
            },
        },
    },
    plugins: [
        //   require('@tailwindcss/forms'),
    ],
};
