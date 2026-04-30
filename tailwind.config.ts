import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
          500: "#2a2a2a",
          400: "#333333",
        },
        steel: {
          DEFAULT: "#9ca3af",
          light: "#d1d5db",
          dark: "#6b7280",
        },
        accent: {
          DEFAULT: "#f59e0b",
          light: "#fcd34d",
          dark: "#d97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "Barlow", "system-ui", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "Barlow Condensed", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "steel-gradient":
          "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #111827 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
