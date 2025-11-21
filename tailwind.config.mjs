/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      azul: "#347BA2",
      azulClaro: "#43BCFF",
      verde: "#50CD5E",
      blanco: "#FFFFFF",
    },

    extend: {
      spacing: {
        "80vh": "80vh",
        "10vh": "10vh",
        "5vh": "5vh",
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['2.75rem', { lineHeight: '1.2' }],
        '6xl': ['3.25rem', { lineHeight: '1.2' }],
      },
      maxWidth: {
        'container': '1200px',
        'container-lg': '1440px',
      },
    },
  },
  plugins: [],
};
