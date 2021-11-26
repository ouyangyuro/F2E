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
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        layout: '200px minmax(0, 200px) 500px',
      },
      margin: {
        '24px': '24px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
