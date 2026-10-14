import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bench: '#F1F4F5',
        sheet: '#FFFFFF',
        ink: '#13222D',
        graphite: '#4E5E69',
        pass: '#0B7A4B',
        flag: '#A8570A',
        rule: 'rgb(19 34 45 / 0.18)',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
