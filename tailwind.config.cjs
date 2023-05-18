/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-fast': 'pulse 0.7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      screens: {
        xsm: '576px',
        // => @media (min-width: 576px) { ... }

        xmd: '960px',
        // => @media (min-width: 960px) { ... }

        xlg: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        bg: {
          main: 'var(--color-bg)',
          inverted: 'var(--color-bg-inverted)',
        },
        primary: {
          main: 'var(--color-primary)',
          inverted: 'var(--color-primary-inverted)',
        },
      },
    },
  },
  plugins: [],
}
