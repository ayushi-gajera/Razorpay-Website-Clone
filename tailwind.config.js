/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontSize: {
      xs: '0.5rem',
      sm: '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
    },},
  },
  plugins: [],
}
