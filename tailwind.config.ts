import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#232323',
          light: '#2A2A2A',
        },
        gray: {
          DEFAULT: '#B1B1B1',
          light: '#F5F5F5',
          dark: '#757575',
        },
        primary: {
          DEFAULT: '#4318FF',
          dark: '#232323',
        },
        secondary: {
          DEFAULT: '#A3AED0',
        },
        success: {
          DEFAULT: '#05CD99',
        },
        background: {
          DEFAULT: '#F4F7FE',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
} satisfies Config;
