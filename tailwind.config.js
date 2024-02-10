/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'core': '#0E1117',
        'primary': '#E8E8E8',
        'secondary': '#BEBEBE',
        'accent': '#64FFDA',
        'interactive': '#007BFF',
        'error': '#FF4567',
        'bitcoin': '#F7931A',
        'ethereum': '#627EEA',
        'polkadot': '#E6007A',
        'cosmos': '#2E3148',
      }
    },
  },
  plugins: [],
}


