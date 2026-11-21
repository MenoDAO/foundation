/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E2878",
        "navy-deep": "#0A1236",
        "navy-night": "#070D29",
        "navy-soft": "#2B3A9E",
        clinical: "#0078B4",
        "clinical-light": "#4DB4E8",
        gold: "#F0960A",
        "gold-light": "#FFC24B",
        mint: "#0E9F8A",
        coral: "#F26D5B",
        muted: "#AAAAAA",
        surface: "#F8F9FC",
        card: "#EFF1F8",
        line: "#D8DCEB",
        ink: "#14171F",
        slate: "#4B4F5E",
        sand: "#FAF6F0",
      },
      boxShadow: {
        "hero-card": "0 40px 100px -30px rgba(3, 8, 30, 0.75)",
        "hero-chip": "0 20px 60px -20px rgba(3, 8, 30, 0.5)",
      },
      fontFamily: {
        sans: [
          "var(--font-outfit)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
