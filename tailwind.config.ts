import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'background-hover': '#F5F4EF',
        'button': '#F0BE25',
        'button-foreground': '#111111',
        'button-hover': '#EDC549',
        'muted-foreground': '#A8A179',
        'text-link': '#111111',
        'border': '#E6E0CB',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'Monaco', 'Consolas', 'monospace'],
        serif: ['var(--font-serif)', 'Times', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#111111',
            maxWidth: 'none',
            a: {
              color: '#111111',
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationThickness: '2px'
              }
            },
            h1: {
              fontFamily: 'var(--font-serif)',
              fontWeight: '400',
            },
            h2: {
              fontWeight: '700',
            },
            h3: {
              fontWeight: '400',
              fontSize: '1.5rem',
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};

export default config; 