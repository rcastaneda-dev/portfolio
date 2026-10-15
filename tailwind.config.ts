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
        // Dark instrument panels (branch graph, pipeline runs). Text contrast
        // on `panel`: ink 15.1:1, muted 7.9:1, pass 7.5:1, fail 7.2:1, run 7.9:1.
        panel: '#0E1A23',
        'panel-ink': '#E8EEF1',
        'panel-muted': '#9FB0BB',
        'panel-edge': 'rgb(232 238 241 / 0.14)',
        'pass-dark': '#3DBE82',
        'fail-dark': '#F2877A',
        'run-dark': '#E5A04A',
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
