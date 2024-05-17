import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ei-primary": "rgb(140, 114, 245)",
        "ei-primary-faded": "rgb(166, 174, 194)",
        "ei-primary-light": "rgb(64, 68, 98)",
        "ei-primary-dirty": "rgb(148, 120, 151)",
        "ei-primary-dark": "rgb(36, 36, 56)",
        "ei-void": "rgb(9, 9, 10)",
        "ei-danger": "rgb(239, 72, 112)",
      },
      darkMode: ["class", '[data-mode="dark"]'],
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        kanit: ["var(--font-kanit)"],
      },
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-fast": "ping 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
} satisfies Config;
export default config;
