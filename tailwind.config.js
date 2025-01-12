/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./views/*.ejs"
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '144': '36rem',
        '500': '500px',
        '300': '300px',
      },
      width : {
        '300px' : '300px',
        '128': '32rem',
        '144': '36rem',
        '500': '500px',
        '300': '300px',
      }
    },
  },
  plugins: [],
  screens: {
    sm: '640px',  
    md: '768px',   
    lg: '1024px', 
    xl: '1280px', 
  },
}


