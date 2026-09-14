/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1E2878",
        clinical: "#0078B4",
        gold: "#F0960A",
        muted: "#AAAAAA",
        surface: "#F8F9FC",
        card: "#EFF1F8",
        line: "#D8DCEB",
        ink: "#14171F",
        slate: "#4B4F5E",
        sand: "#FAF6F0",
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
