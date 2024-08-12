// const { white } = require('react-native-paper/lib/typescript/styles/themes/v2/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
          darkTheme: '#070707',
          purplePrim: '#6552FE',
          whiteText: '#FFF',
          dark2: '#121212'
      },
    },
  },
  plugins: [],
}