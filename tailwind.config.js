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
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        'primary-text': 'var(--primary-text-color)',
        'accent-grey': 'var(--accent-grey)',
        'accent-blue': 'var(--accent-blue)',
        success: 'var(--success-color)',
        error: 'var(--error-color)',
        warning: 'var(--warning-color)',
        bitcoin: 'var(--bitcoin-orange)',
        ethereum: 'var(--ethereum-purple)',
        polkadot: 'var(--polkadot-pink)',
        cosmos: 'var(--cosmos-blue)',


        background: 'transparent',
      }
    },
  },
  plugins: [],
}


