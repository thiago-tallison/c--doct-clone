import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0C0B19",
        muted: "#F9F9F9",
        text: {
          primary: "#1B2531",
          secondary: "#62676B",
        },
        purple: {
          500: "#7A6EFE",
          300: "#9188FF"
        },
        yellow: {
          500: "#FFA901",
          300: "#FFB630"
        },
        blue: {
          500: "#24A8FA",
          300: "#4BB7FD"
        },
        red: {
          500: "#FF5363",
          300: "#FF717F",
        }
      }
    },
  },
  plugins: [],
};
export default config;
