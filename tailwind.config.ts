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
        reserve: {
          emerald: "#0B2014",
          "emerald-dark": "#05110A",
          "emerald-light": "#153A25",
          "emerald-surface": "#0F2A1B",
          cream: "#FDFBF7",
          "cream-warm": "#FAF6EE",
          "cream-muted": "#EFE9DC",
          gold: "#D4AF37",
          "gold-light": "#F3E5AB",
          "gold-dark": "#A8841B",
          "gold-muted": "#B5942F",
          burgundy: "#4A0E17",
          "burgundy-light": "#6B1924",
          "burgundy-surface": "#2A080D",
        },
        "text-dark": "#1A1A1A",
        "text-light": "#FBFBFB",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "luxury-sm": "0 2px 10px rgba(11, 32, 20, 0.08)",
        "luxury-md": "0 8px 30px rgba(11, 32, 20, 0.12)",
        "luxury-lg": "0 20px 50px rgba(11, 32, 20, 0.2)",
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 40px rgba(212, 175, 55, 0.4)",
        "emerald-glow": "0 0 35px rgba(11, 32, 20, 0.6)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8841B 100%)",
        "gold-gradient-subtle": "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
        "emerald-gradient": "linear-gradient(180deg, #0B2014 0%, #05110A 100%)",
        "radial-emerald": "radial-gradient(circle at center, #153A25 0%, #0B2014 70%)",
      },
      borderWidth: {
        hairline: "0.5px",
      },
    },
  },
  plugins: [],
};

export default config;
