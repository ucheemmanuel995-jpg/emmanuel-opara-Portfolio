/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F2',
        ink: {
          DEFAULT: '#1C1F26',
          soft: '#4A4F5A',
          faint: '#8A8F9A',
        },
        void: {
          DEFAULT: '#12151B',
          raised: '#181C24',
          line: '#262B35',
        },
        signal: {
          DEFAULT: '#1F7A63',
          light: '#2E9678',
          dark: '#18604E',
        },
        data: {
          orange: '#D9762E',
          blue: '#3B5B92',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
