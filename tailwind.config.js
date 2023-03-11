/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      White: "hsl(0, 0%, 100%)",
      Violet: "hsl(257, 40%, 49%)",
      SoftMagenta: "hsl(300, 69%, 71%)",
      blue: "hsl(228, 45%, 44%)",
    },
    screens: {
      sm: {'max': '375px'},
      // => @media (max-width: 375px) { ... }
      md: {'min': '768px', 'max': '1024px'} ,
      // => @media (min-width:768px) and (max-width:1024px) { ... }
      lg: {'max': '1440px'},
      // => @media (max-width: 1440px) { ... }
    },
    fontFamily: {
      OpenSans: ["Open Sans", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "Pattern-desktop": "url('../images/bg-desktop.svg')",
        "Pattern-mobile": "url('../images/bg-mobile.svg')",
      },
    },
    fontSize: {
      'headingsm': ['1.75rem', {
        lineHeight: '3rem',
        fontWeight: '600',
      }],
      'headingmd': ['2.813rem', {
        lineHeight: '3.75rem',
        fontWeight: '600',
      }],
      sm: ['0.875rem'],
      xs: ['0.75rem']
      }
  },
  plugins: [],
}
