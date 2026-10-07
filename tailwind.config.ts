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
          // Sleeker Royal Obsidian Emerald Palette
          obsidian: "#040D07",
          emerald: "#081A0F",
          "emerald-dark": "#05120A",
          "emerald-card": "#0C2316",
          "emerald-light": "#143823",
          "emerald-surface": "#0F291A",
          "emerald-glow": "#10B981",

          // High-contrast Warm Ivory & Pearl
          cream: "#FAF8F5",
          "cream-warm": "#F3EFE6",
          "cream-muted": "#CFC7B8",
          "cream-soft": "#E5DFD3",

          // Radiant Champagne Gold
          gold: "#E0BA4B",
          "gold-bright": "#FADB6A",
          "gold-light": "#FFF3C4",
          "gold-dark": "#B38C22",
          "gold-muted": "#96751C",

          // Imperial Ruby / Deep Wine
          burgundy: "#54101A",
          "burgundy-light": "#7A1827",
          "burgundy-surface": "#2C080E",
        },
        "text-dark": "#121212",
        "text-light": "#FFFFFF",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "luxury-sm": "0 2px 10px rgba(0, 0, 0, 0.25)",
        "luxury-md": "0 8px 30px rgba(0, 0, 0, 0.45)",
        "luxury-lg": "0 20px 50px rgba(0, 0, 0, 0.6)",
        "gold-glow": "0 0 20px rgba(224, 186, 75, 0.3)",
        "gold-glow-lg": "0 0 35px rgba(224, 186, 75, 0.5)",
        "card-glass": "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFF3C4 0%, #E0BA4B 50%, #B38C22 100%)",
        "gold-gradient-bright": "linear-gradient(135deg, #FFF8DC 0%, #FADB6A 50%, #D4AF37 100%)",
        "gold-gradient-subtle": "linear-gradient(135deg, rgba(224,186,75,0.18) 0%, rgba(224,186,75,0.04) 100%)",
        "card-gradient": "linear-gradient(180deg, #102A1C 0%, #08170F 100%)",
        "obsidian-gradient": "linear-gradient(180deg, #081A0F 0%, #040D07 100%)",
        "radial-emerald": "radial-gradient(circle at 50% 20%, #153B25 0%, #081A0F 60%, #040D07 100%)",
      },
      borderWidth: {
        hairline: "0.5px",
      },
    },
  },
  plugins: [],
};

export default config;
