import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00FFFF',
        'cyber-pink': '#FF00FF',
        'cyber-green': '#00FF99',
        'cyber-red': '#FF3B3B',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
