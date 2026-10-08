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
        // Hybrid Premium & Pristine Palette (60-30-10 Rule)
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
        reserve: {
          // Heritage Gold & Brand Accents
          gold: "#D4AF37",
          "gold-bright": "#FADB6A",
          "gold-light": "#FFF3C4",
          "gold-dark": "#B38C22",
          "gold-muted": "#96751C",

          // Classic tokens preserved for compatibility
          obsidian: "#1F2421",
          emerald: "#141815",
          "emerald-dark": "#0E1210",
          "emerald-card": "#FFFFFF",
          "emerald-surface": "#F8FAFC",
          "emerald-glow": "#25D366",

          cream: "#FFFFFF",
          "cream-warm": "#F8FAFC",
          "cream-muted": "#64748B",
          "cream-soft": "#E2E8F0",

          burgundy: "#A80016",
          "burgundy-light": "#C9142B",
          "burgundy-surface": "#FFF1F2",
        },
        "text-dark": "#1F2421",
        "text-light": "#FFFFFF",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "pristine-sm": "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
        "pristine-md": "0 4px 16px -2px rgba(31, 36, 33, 0.08), 0 2px 6px -1px rgba(31, 36, 33, 0.04)",
        "pristine-lg": "0 12px 32px -4px rgba(31, 36, 33, 0.12), 0 4px 12px -2px rgba(31, 36, 33, 0.06)",
        "bottom-bar": "0 -4px 25px rgba(31, 36, 33, 0.08), 0 -1px 3px rgba(31, 36, 33, 0.04)",
        "ruby-glow": "0 4px 14px rgba(168, 0, 22, 0.35)",
        "whatsapp-glow": "0 4px 16px rgba(37, 211, 102, 0.4)",
        "gold-glow": "0 0 20px rgba(212, 175, 55, 0.3)",
        "luxury-sm": "0 2px 10px rgba(0, 0, 0, 0.08)",
        "luxury-md": "0 8px 24px rgba(31, 36, 33, 0.12)",
        "luxury-lg": "0 16px 40px rgba(31, 36, 33, 0.16)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFF3C4 0%, #D4AF37 50%, #B38C22 100%)",
        "gold-gradient-bright": "linear-gradient(135deg, #FFF8DC 0%, #FADB6A 50%, #D4AF37 100%)",
        "ruby-gradient": "linear-gradient(135deg, #C9142B 0%, #A80016 60%, #8C0012 100%)",
        "charcoal-gradient": "linear-gradient(180deg, #1F2421 0%, #141815 100%)",
        "card-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
        "obsidian-gradient": "linear-gradient(180deg, #1F2421 0%, #141815 100%)",
        "radial-emerald": "radial-gradient(circle at 50% 20%, #2A312D 0%, #1F2421 60%, #141815 100%)",
      },
      borderWidth: {
        hairline: "0.5px",
      },
    },
  },
  plugins: [],
};

export default config;
