module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        A4: "1754px",
      },
      width:{
        A4: "1240px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
