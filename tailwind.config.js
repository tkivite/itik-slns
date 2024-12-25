/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E0F2FF", // Backgrounds or lighter areas
          DEFAULT: "#007ACC", // Main primary blue
          dark: "#005A9E", // Darker blue for focus states
        },
        secondary: {
          light: "#D1E3FF", // Lighter backgrounds or accents
          DEFAULT: "#5B9BD5", // Secondary blue for highlights
          dark: "#2C5F8A", // Darker accents or borders
        },
        accent: {
          light: "#B3E5FC", // Accent highlights
          DEFAULT: "#03A9F4", // Standard accent
          dark: "#0277BD", // Dark accent shade
        },
        neutral: {
          light: "#F3F4F6", // Light gray background areas
          DEFAULT: "#52525b", // Softer bright background (light blue/gray)
          dark: "#1F2937", // Main text color (dark gray)
          text: "#111827", // Darker text for titles or headers
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        rotate: "rotate 1s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
