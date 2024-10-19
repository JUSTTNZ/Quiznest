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
         'orange-btn': '#FFE5DB',
         'orange-btn-text':'#751F00',
        'custom-blue': {
          DEFAULT: 'hsl(196, 100%, 63%)',
          dark: 'hsl(196, 100%, 23%)',
        },
        'blue-answers-bg': 'hsl(196, 55%, 66%)',
        'blue-answers-border': 'hsl(196, 95%, 52%)',
        'blue-answer-fill': 'hsl(196, 100%, 50%)',
        'blue-answers-shadow': 'hsla(196, 100%, 33%, 0.502)',
        'blue-wrong-answer-popup': 'hsl(196, 100%, 43%)',
        'blue-text':'hsl(196, 100%, 23%)',
        
        'green-bg': 'hsl(115, 70%, 53%)',
        'green-answers-bg': 'hsl(115, 75%, 66%)',
        'green-answers-border': 'hsl(115, 95%, 52%)',
        'green-answer-fill': 'hsl(115, 100%, 33%)',
        'green-answers-shadow': 'hsla(115, 100%, 33%, 0.502)',
        'green-wrong-answer-popup': 'hsl(115, 80%, 43%)',
        'green-button': 'hsl(116, 100%, 93%)',
        'green-text': 'hsl(115, 100%, 23%)',
      },
      fontFamily:{
        sans : ['Segoe UI', 'Helvetica'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'orange-shadow': '0 .5rem 1rem #ff4f0f80', 
      }
    },
  },
  plugins: [],
}

