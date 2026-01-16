import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "#F8F9FB",
        "light-gray": "#E6E8EC",
        "dark-gray": "#1E1E1E",
        "medium-gray": "#5F6368",
        "deep-blue": "#1F3C88",
        "dark-cyan": "#2F7D63",
        "cool-gray": "#D1D5DB",
        "bright-blue": "#274DB2",
      },
      fontFamily: {
        serif: ["Crimson Pro", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
