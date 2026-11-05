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
        brand: {
          black: "#08080a",
          dark: "#0e0e11",
          surface: "#121216",
          charcoal: "#151519",
          card: "#18181f",
          border: "#262630",
          borderGold: "rgba(203, 168, 100, 0.22)",
          gold: "#cba864",
          goldLight: "#e4c988",
          goldDark: "#a37e38",
          goldMuted: "rgba(203, 168, 100, 0.15)",
          accent: "#d4af37",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e4c988 0%, #cba864 50%, #9e7934 100%)",
        "gold-radial": "radial-gradient(circle, rgba(203, 168, 100, 0.18) 0%, rgba(14, 14, 17, 0) 70%)",
        "dark-gradient": "linear-gradient(180deg, #0e0e11 0%, #08080a 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(203, 168, 100, 0.3)",
        "gold-sm": "0 0 15px rgba(203, 168, 100, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;

