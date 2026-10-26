import type { Config } from "tailwindcss";

const opacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, index) => [index, String(index / 100)]),
);

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111110",
        surface: "#1A1917",
        panel: "#22201E",
        copper: {
          DEFAULT: "#B66A45",
          light: "#D8A07A",
          dark: "#80533E",
        },
        cream: "#F3EEE7",
        muted: "#A7A096",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "Bricolage Grotesque", "sans-serif"],
        body: ['"DM Sans Variable"', "DM Sans", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        lift: "0 28px 70px rgba(0, 0, 0, 0.46)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      opacity: opacityScale,
    },
  },
  plugins: [],
} satisfies Config;
