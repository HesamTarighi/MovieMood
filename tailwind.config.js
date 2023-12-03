module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      width: {
        "xl": "1800px",
        "lg": "1300px"
      },
      fontFamily: {
        'pbsans': ['Public Sans'],
        'roboto': ['Roboto'],
        'rubik': ['Rubik'],
        'opensans': ['Open Sans'],
        'nunito': ['Nunito'],
      }
    },
  },

  plugins: [ require("daisyui"), require('tailwind-scrollbar')({ nocompatible: true }) ],


  // Daisy ui config
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff6b00",
          "secondary": "#1e1e1e",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#101010",
        }
      }
    ],
  },
}

