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
      

      },
      colors: {
        // primary: '',
        // secondary: '',
        // background: '',
        // text: '',
      },
  }},
  plugins: [],
}

