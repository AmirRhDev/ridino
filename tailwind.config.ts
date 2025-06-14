import type { Config } from "tailwindcss";

const config = {
  // darkMode: ['class'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  // prefix: '',
  theme: {
    // container: {
    //   center: true,
    //   screens: {
    //     '2xl': '1600px',
    //   },
    // },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // keyframes: {
      //   'accordion-down': {
      //     from: {
      //       height: '0',
      //     },
      //     to: {
      //       height: 'var(--radix-accordion-content-height)',
      //     },
      //   },
      //   'accordion-up': {
      //     from: {
      //       height: 'var(--radix-accordion-content-height)',
      //     },
      //     to: {
      //       height: '0',
      //     },
      //   },
      // },
      // animation: {
      //   'accordion-down': 'accordion-down 0.2s ease-out',
      //   'accordion-up': 'accordion-up 0.2s ease-out',
      // },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwindcss-motion"),
  ],
} satisfies Config;

export default config;
