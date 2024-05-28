import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        "ei-primary": "rgb(140, 114, 245)",
        "ei-primary-faded": "rgb(166, 174, 194)",
        "ei-primary-light": "rgb(64, 68, 98)",
        "ei-primary-dirty": "rgb(148, 120, 151)",
        "ei-primary-dark": "rgb(36, 36, 56)",
        "ei-primary-royal": "rgb(128, 69, 254)",
        "ei-twilight-blue": "rgb(38, 45, 115)",
        "ei-void": "rgb(9, 9, 10)",
        "ei-danger": "rgb(239, 72, 112)",
        "ei-success": "rgb(41, 189, 80)",
        "ei-black": "rbg(11, 9, 13)",
      },
      darkMode: ["class", '[data-mode="dark"]'],
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        kanit: ["var(--font-kanit)"],
      },
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-fast": "ping 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "infinite-scroll": "infinite-scroll linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
} satisfies Config;
export default config;
