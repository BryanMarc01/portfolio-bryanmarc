import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#062A63",
        blue: "#0A73C9",
        sky: "#23A9F4",
        cyan: "#35D7F3",
        yellow: "#FFD43B",
        orange: "#FF9F1C",
        green: "#33C759",
        cream: "#FCF8F3",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        cartoon: "0 6px 0 0 rgba(6,42,99,0.9)",
        "cartoon-sm": "0 4px 0 0 rgba(6,42,99,0.9)",
        "cartoon-lg": "0 10px 24px -6px rgba(6,42,99,0.35)",
        panel: "0 18px 40px -14px rgba(6,42,99,0.28)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1.5deg)" },
        },
        drift: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(40px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        drift: "drift 26s linear infinite alternate",
        sway: "sway 4s ease-in-out infinite",
        glow: "glow 3.2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        bob: "bob 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
