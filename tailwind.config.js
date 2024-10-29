// tailwind.config.js
module.exports = {
  content: [
    "./*.html",  
    "./css/**/*.css", 
    "./js/**/*/.js",
],
theme: {
  extend: {
    colors: {
      'desaturated-red': '#cf9696',
      'soft-red': '#f96262',
      'dark-grayish-red': '#413a3a',
    },
    width: {
      '64': '4rem',
      // 'btn': '19px',
    },
    height: {
      '3r': '3rem', 
    },
    screens: {
      '3xs': '0px',
      '2xs': '380px',
      'xs': '480px', // extra small screens
      'sm': '640px', // small screens
      'md': '768px', // medium screens
      'lg': '1024px', // large screens
      'xl': '1280px', // extra large screens
      '2xl': '1536px', // double extra large screens
    },
    fontSize: {
      'min': '1rem',
      'md': '1.2rem',
      'lg': '1.5rem',
      'xl': '2rem',
      '2xl': '2.5rem',
    },
    margin: {
      '1.2': '1.2rem',
      '48px': '3rem',
      // '21': '5.25rem',
    },
    borderWidth: {
      '1': '1px',
    },
    inset: {
      '1rneg': '-1rem',
      '0.1r': '0.1rem',
      '18r': '1.8rem',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
    },
    padding: {
      '28': '1.75rem',
    },
    borderRadius: {
      '50px': '50px',
    },
    // Transition from pixel values to rem values, but let their variables name the same
  },
},
  plugins: [],
};
