import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0b2a55", deep: "#061a36", night: "#04122a" },
        brand: { DEFAULT: "#12a7f0", sky: "#5cc8ff", ice: "#eef4fa" },
        muted: "#5b7090",
      },
      fontFamily: { sans: ["Montserrat", "system-ui", "sans-serif"] },
      maxWidth: { site: "1240px" },
    },
  },
  plugins: [],
} satisfies Config;
