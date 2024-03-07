import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      whiteIce: '#F8F8F8',
      darkSand: '#AE9984',
      lightSand: '#DFD8D0',
      darkBlack: '#2E2D32',
      lightBlack: '#57565B',
    },

    extend: {
      fontFamily: {
        italianno: ['var(--font-italianno)'],
        prata: ['var(--font-prata)'],
        dosis: ['var(--font-dosis)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
