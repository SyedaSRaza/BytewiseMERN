/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        cream: '#FFF4E0',/**For nav */
        softMaroon: '#B46060',/**For buttons */
        softPeach: '#FFBF9B',/**For reviews */
        softBlack: '#4D4D4D',/**For text */
        softGray: '#d6d6d6',/**For reviewtext */
        lightMaroon: '#e06969',/**For hover */
        footerGray:'#707070',/**For footer */
      },
    },
  },
  plugins: [],
}

