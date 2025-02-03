/** @type {import('tailwindcss').Config} */

import { Ovo } from "next/font/google";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#f4f7ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
        themeColor: "#f1f5f9",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
        navShadowBlack: "0px 7px 0px -5px rgba(255,255,255,0.72)",
        navShadowWhite: "0px 7px 0px -5px rgba(38,38,38,0.72)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
