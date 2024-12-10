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
      backgroundImage: {
        sobreNosotros: "url('./src/assets/SobreNosotros.png')",
        nuestraHistoria: "url('./src/assets/CamionNuestraHistoria.png')",
      },
    },
  },
  plugins: [],
};
