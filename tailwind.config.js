/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#111827',
        'surface-2': '#1e2a3b',
        accent: '#3b82f6',
        'accent-dark': '#1d4ed8',
        'accent-glow': 'rgba(59, 130, 246, 0.15)',
        text: '#e2e8f0',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
