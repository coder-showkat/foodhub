/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
      theme: {
        colors: {
          orange: '#F99417',
          blue: '#5D3891',
          gray: '#E8E2E2',
          white: '#F5F5F5'
        },
        fontFamily: {
          sans: ["Roboto", "sans-serif"],
          body: ["Roboto", "sans-serif"],
          mono: ["ui-monospace", "monospace"],
        },
      },
      corePlugins: {
        preflight: false,
      },
  plugins: [],
}