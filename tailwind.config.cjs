/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,svelte,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "webloria-primary": "#007abf",
        "webloria-secondary": "#004972",
      },
    },
    fontFamily:{
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens:{
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
  },
  plugins: [],
}
