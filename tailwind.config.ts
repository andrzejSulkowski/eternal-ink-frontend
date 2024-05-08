import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-faded': '#A6AEC2',
        'primary': '#8C72F5',
        'light-purple': 'rgba(64, 68, 98, 0.1)',
        'dark-purple': '#242438'
      },
      darkMode: ['class', '[data-mode="dark"]'],
    },
  },
  plugins: [],
} satisfies Config;
export default config;
