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
        primary: '#efbf04',
        secondary: '#EB4335',
        accent: '#C10205'
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

