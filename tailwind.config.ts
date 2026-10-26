import type { Config } from "tailwindcss";

const opacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, index) => [index, String(index / 100)]),
);

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#202C3C",
        slate: "#657789",
        gold: "#B59A65",
        ivory: "#F4EFE4",
        charcoal: "#292A2D",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "Bricolage Grotesque", "sans-serif"],
        body: ['"DM Sans Variable"', "DM Sans", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        lift: "0 28px 70px rgba(12, 18, 26, 0.48)",
        panel: "0 24px 64px rgba(32, 44, 60, 0.16)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      opacity: opacityScale,
    },
  },
  plugins: [],
} satisfies Config;
