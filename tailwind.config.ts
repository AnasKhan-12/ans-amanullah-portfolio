import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "#050816",
        foreground: "#f3f3f3",
        primary: {
          DEFAULT: "#050816",
          light: "#100d25",
          dark: "#090325",
          glow: "rgba(145, 94, 255, 0.15)",
        },
        surface: {
          DEFAULT: "#151030", /* tertiary */
          2: "#100d25", /* black-100 */
        },
        accent: "#915EFF",
        secondary: "#aaa6c3",
        muted: "#aaa6c3",
        subtle: "rgba(170, 166, 195, 0.7)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #100d25 0%, #050816 50%, #090325 100%)",
        "surface-gradient": "linear-gradient(135deg, #151030 0%, #100d25 100%)",
        "black-gradient": "linear-gradient(to right, #434343, #000000)",
        "violet-gradient": "linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%)",
        "green-pink-gradient": "linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)",
      },
      boxShadow: {
        gold: "0 0 30px var(--primary-glow-strong), 0 0 60px var(--primary-glow)",
        "gold-sm": "0 0 12px var(--primary-glow)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover":
          "0 8px 40px rgba(0,0,0,0.6), 0 4px 32px var(--primary-glow)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
};

export default config;
