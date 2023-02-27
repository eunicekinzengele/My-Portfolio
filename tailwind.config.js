/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'newFamilly1':['Montserrat']
    },
    textUnderlineOffset: {
      17: '17px',
    },
    space: {
      '67%': '67%',
    }
  },
  space: {
    '63%': '63%',
  },
  space: {
    '69%': '69%',
  },
  space: {
    '50%': '50%',
  },
  space: {
    '56%': '56%',
  },
  plugins: [],
}
