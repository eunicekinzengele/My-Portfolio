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
    // spacing:{
    //   '100rem' : '100rem',
    // }
  },
  plugins: [],
}
