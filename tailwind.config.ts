import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1280px",
      },
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(20, 241, 149, 0.15)",
        "glow-sm": "0 0 20px rgba(20, 241, 149, 0.3), 0 0 40px rgba(20, 241, 149, 0.1)",
        "glow-md": "0 0 30px rgba(20, 241, 149, 0.4), 0 0 60px rgba(20, 241, 149, 0.2)",
        "glow-lg": "0 0 40px rgba(20, 241, 149, 0.5), 0 0 80px rgba(20, 241, 149, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(20, 241, 149, 0.18), transparent 55%), radial-gradient(circle at 30% 40%, rgba(255, 138, 0, 0.12), transparent 60%)",
      },
      animation: {
        shimmer: "shimmer 3s infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        ripple: "ripple 0.6s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(25, 145, 96, 0.4), 0 0 40px rgba(25, 145, 96, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(25, 145, 96, 0.6), 0 0 60px rgba(25, 145, 96, 0.3), 0 0 90px rgba(25, 145, 96, 0.1)",
          },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
