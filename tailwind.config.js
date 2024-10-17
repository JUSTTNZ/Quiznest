/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#2a737a',
        'primary': '#d5e9ef',
        'red-orange': 'hsl(16, 100%, 53%)',
      },
      fontFamily:{
        sans : ['Segoe UI', 'Helvetica'],
        poppins: ['Poppins', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

