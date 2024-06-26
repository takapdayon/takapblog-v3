import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
            a: {
              'word-break': 'break-all',
            },
          },
        },
      },
      colors: {
        background: 'rgb(var(--background))',
        text: 'rgb(var(--text))',
        subtext: 'rgb(var(--sub-text))',
        card: 'rgb(var(--card))',
        border: 'rgb(var(--border))',
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['material-symbols', 'simple-icons']),
    }),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
};
export default config;
