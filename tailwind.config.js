/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsBold: ['poppins-bold', 'sans-serif'],
        poppinsExtraLight: ['poppins-extralight', 'sans-serif'],
        poppinsLight: ['poppins-light', 'sans-serif'],
        poppinsMedium: ['poppins-medium', 'sans-serif'],
        poppinsRegular: ['poppins-regular', 'sans-serif'],
        poppinsSemiBold: ['poppins-semibold', 'sans-serif'],
        poppinsThin: ['poppins-thin', 'sans-serif'],
        robotoBold: ['roboto-bold', 'sans-serif'],
        robotoLight: ['roboto-light', 'sans-serif'],
        robotoMedium: ['roboto-medium', 'sans-serif'],
        robotoRegular: ['roboto-regular', 'sans-serif'],
        robotoThin: ['roboto-thin', 'sans-serif']
      

      },
      colors: {
        primarybg: '#ffffff',
        secondary: '#003d48',
        background: '',
        text: '',
        heading:''
      },
  }},
  plugins: [],
}

