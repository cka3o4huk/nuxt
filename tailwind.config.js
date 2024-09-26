/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',   // Scan components directory
    './layouts/**/*.vue',               // Scan layouts directory
    './pages/**/*.vue',                 // Scan pages directory
    './app.vue',                        // Include the root app
    './plugins/**/*.{js,ts}',           // Scan plugins
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'light-gray': '#f4f7fb',
        'akcent-first': '#0b71cf',
        'akcent': '#054eba',
        'akcent-btn': '#188fff',
        'button': '#fb7b33',
        'button-lite': '#c1815d',
        'footer-bg-link': '#111c34',
        'text-primary': '#111c34',
        'text-secondary': '#606777',
        'bg-circle': '#ff9a61',
        'akcent-alt': '#188fff', // Alternate color for media queries
        'text-p': '#111c34',        // Custom text color
        'button-hover': 'orange',   // Custom hover color for arrows
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Example of a custom font family
      },
    },
  },
  plugins: [],
}
