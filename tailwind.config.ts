import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: "#FFF8F0",
          100: "#FFF3E0",
          200: "#FFE0B2",
          300: "#FFCC80",
          400: "#FFA726",
          500: "#E8850C",
          600: "#C46A00",
          700: "#A35500",
          800: "#7A3F00",
          900: "#522A00",
        },
        teal: {
          50: "#E0F2F1",
          100: "#B2DFDB",
          200: "#80CBC4",
          300: "#4DB6AC",
          400: "#26A69A",
          500: "#0D7377",
          600: "#00695C",
          700: "#004D40",
          800: "#003D33",
          900: "#002E27",
        },
        ink: "#1A1A2E",
        slate: {
          DEFAULT: "#4A4A5A",
          light: "#6B6B7B",
        },
        mist: "#F7F6F3",
        cloud: "#EDEBE8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)",
        glow: "0 4px 12px rgba(232,133,12,0.35)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
