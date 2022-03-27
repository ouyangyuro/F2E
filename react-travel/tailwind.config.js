module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    screens: {
      '2sm': '375px',
      // iphone => @media (min-width: 375px) { ... }

      sm: '640px',
      // tablet => @media (min-width: 640px) { ... }

      md: '768px',
      // ipad => @media (min-width: 768px) { ... }

      lg: '1024px',
      // laptop => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // desktop => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // desktop => @media (min-width: 1440px) { ... }
    },
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: 'minmax(328px, 383px) 0 minmax(500px, 1fr) 100px',
      },
      margin: {
        '24px': '24px',
      },
      colors: {
        primary: '#3fb195',
      },
      maxWidth: {
        '1/3': '32%',
        '330px': '330px',
      },
      width: {
        '330px': '330px',
      },
      colors: {
        primary_green: '#3FB195',
        info_Bg: 'rgba(63, 177, 149, 0.08)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
