/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:    '#0D1624',
        inkDeep:'#070C17',
        cream:  '#F2EDE3',
        gold:   '#D4A24C',
        dusk:   '#3B4A66',
        muted:  '#8A9BB8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans:    ['Outfit', 'ui-sans-serif', 'system-ui'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        oil: 'cubic-bezier(0.77, 0, 0.175, 1)',
      }
    }
  },
  plugins: []
}
