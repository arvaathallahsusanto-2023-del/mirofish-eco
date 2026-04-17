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
        background: "#020409",
        foreground: "#ffffff",
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.05)",
        },
        primary: {
          DEFAULT: "#22d3ee", // cyan-400
          glow: "rgba(34, 211, 238, 0.5)",
        },
        secondary: {
          DEFAULT: "#6366f1", // indigo-500
          glow: "rgba(99, 102, 241, 0.5)",
        },
        accent: {
          DEFAULT: "#f59e0b", // amber-500
          glow: "rgba(245, 158, 11, 0.5)",
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #2dd4bf 0deg, #3b82f6 90deg, #8b5cf6 180deg, #2dd4bf 360deg)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-drift": "glow-drift 10s ease-in-out infinite alternate",
      },
      keyframes: {
        "glow-drift": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(20px, 10px) scale(1.1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
