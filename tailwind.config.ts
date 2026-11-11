import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60-30-10 palette: pristine white surfaces, charcoal structure, ruby actions
        pristine: {
          DEFAULT: "#FFFFFF",
          surface: "#FDFDFD",
          muted: "#F8FAFC",
        },
        charcoal: {
          DEFAULT: "#1F2421",
          rich: "#141815",
          surface: "#2A312D",
          card: "#191E1B",
          border: "#333D37",
          muted: "#3E4942",
        },
        ruby: {
          DEFAULT: "#A80016",
          hover: "#8C0012",
          active: "#70000E",
          subtle: "#FFF1F2",
          border: "#FECDD3",
        },
        steel: {
          DEFAULT: "#64748B",
          dark: "#475569",
          light: "#94A3B8",
          surface: "#F1F5F9",
          border: "#E2E8F0",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#1EBE5D",
          dark: "#128C7E",
        },
        // Heritage gold accents (logo crest, eyebrows)
        reserve: {
          gold: "#D4AF37",
          "gold-bright": "#FADB6A",
        },
      },
      fontFamily: {
        // CSS variables are set by next/font in src/app/layout.tsx
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "pristine-sm": "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
        "pristine-md": "0 4px 16px -2px rgba(31, 36, 33, 0.08), 0 2px 6px -1px rgba(31, 36, 33, 0.04)",
        "bottom-bar": "0 -4px 25px rgba(31, 36, 33, 0.08), 0 -1px 3px rgba(31, 36, 33, 0.04)",
        "ruby-glow": "0 4px 14px rgba(168, 0, 22, 0.35)",
        "whatsapp-glow": "0 4px 16px rgba(37, 211, 102, 0.4)",
        "gold-glow": "0 0 20px rgba(212, 175, 55, 0.3)",
        "luxury-md": "0 8px 24px rgba(31, 36, 33, 0.12)",
        "luxury-lg": "0 16px 40px rgba(31, 36, 33, 0.16)",
      },
      backgroundImage: {
        "charcoal-gradient": "linear-gradient(180deg, #1F2421 0%, #141815 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
