/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,svelte,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "cloud-bg-primary": 'rgba(var(--bg-primary))',
        "cloud-bg-secondary": 'rgba(var(--bg-secondary))',
        "cloud-bg-container": "rgba(var(--bg-container))",

        "cloud-input-bg": "rgba(var(--bg-input))",
        "cloud-input-text": "rgba(var(--color-input-text))",
        "cloud-input-placholder": "rgba(var(--color-input-placholder))",

        "cloud-text": "rgba(var(--color-text))",
        "cloud-primary": "rgba(var(--color-primary))",
        "cloud-danger": "rgba(var(--color-danger))",
        "cloud-success": "rgba(var(--color-success))",
        "cloud-warning": "rgba(var(--color-warning))",
        "cloud-info": "rgba(var(--color-info))"
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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}