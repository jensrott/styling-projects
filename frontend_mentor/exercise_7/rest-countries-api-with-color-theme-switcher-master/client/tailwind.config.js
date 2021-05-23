module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'search-bar-w': '30vw'
      },
    },
    fontFamily: {
      body: ['Nunito Sans']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}