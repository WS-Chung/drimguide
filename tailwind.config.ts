import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        ink: {
          950: "#04060f",
          900: "#0a0e1a",
          800: "#0f1424",
          700: "#161c2e",
          600: "#1e2640",
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(94, 131, 255, 0.35)",
        "glow-sm": "0 0 12px rgba(94, 131, 255, 0.4)",
      },
      animation: {
        slideIn: "slideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        fadeIn: "fadeIn 0.35s ease-out",
        floatPulse: "floatPulse 3.4s ease-in-out infinite",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatPulse: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.7" },
          "50%": { transform: "translateY(-4px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
