import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

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
      typography: (theme: PluginAPI['theme']) => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
            'code::before': false,
            'code::after': false,
            a: {
              'word-break': 'break-all',
            },
            code: {
              color: theme('colors.inline-text'),
              backgroundColor: theme('colors.inline-back'),
              borderRadius: theme('borderRadius.DEFAULT'),
              paddingTop: theme('spacing.[0.5]'),
              paddingBottom: theme('spacing.[0.5]'),
              paddingLeft: theme('spacing.[1.5]'),
              paddingRight: theme('spacing.[1.5]'),
              fontWeight: 'normal',
            },
          },
        },
      }),
      colors: {
        background: 'rgb(var(--background))',
        text: 'rgb(var(--text))',
        subtext: 'rgb(var(--sub-text))',
        card: 'rgb(var(--card))',
        border: 'rgb(var(--border))',
        'inline-text': 'rgb(var(--inline-text))',
        'inline-back': 'rgb(var(--inline-back))',
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
