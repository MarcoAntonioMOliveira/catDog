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
        primary: "#EF9F27",
        "primary-dark": "#D4881A",
        secondary: "#1D9E75",
        accent: "#D85A30",
        bg: "#FAF9F6",
        dark: "#2C2C2A",
        "neutral-mid": "#B4B2A9",
        "neutral-text": "#444441",
        "neutral-muted": "#888780",
        "neutral-line": "#E8E6E1",
        "neutral-light": "#F3F1EC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(44,44,42,.08)",
        md: "0 4px 16px rgba(44,44,42,.10)",
        lg: "0 8px 32px rgba(44,44,42,.14)",
        card: "0 2px 8px rgba(44,44,42,.08)",
        "card-hover": "0 8px 24px rgba(44,44,42,.14)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
