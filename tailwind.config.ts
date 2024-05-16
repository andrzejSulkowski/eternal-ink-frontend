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
        "primary-faded": "#A6AEC2",
        primary: "#8C72F5",
        "light-purple": "rgba(64, 68, 98, 0.1)",
        "purple-transparent": "rgba(140, 114, 245, 0.2)",
        purple: "rgba(140, 114, 245, 1)",
        "dirty-purple": "rgba(148, 120, 151, 1)",
        "dark-purple": "#242438",
        "ei-grey": "rgb(166, 174, 194)", //TODO: rename colors ei-{name}
        "ei-black": "rgb(9, 9, 10)",
        "ei-danger": "#EF4870",
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
