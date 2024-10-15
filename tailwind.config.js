/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#2a737a',
        'primary': '#d5e9ef'
      },
      fontFamily:{
        yeseva : ["'Yeseva One'",'Segoe UI', 'Helvetica'],
      },
    },
  },
  plugins: [],
}

