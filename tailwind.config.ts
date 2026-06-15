import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe6ff",
          200: "#b8ccff",
          300: "#8ba9ff",
          400: "#5e83ff",
          500: "#3a5dff",
          600: "#2541e6",
          700: "#1c33b3",
          800: "#172a8c",
          900: "#13226e",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
