/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB4335',
        secondary: '#EB4335',
        accent: '#B40711',
        textPrimary: '#f1f1f1'
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

