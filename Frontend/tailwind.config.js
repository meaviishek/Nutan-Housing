/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // Add Poppins as a custom font
        // You can add more custom fonts here, for example:
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },


      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    
      colors: {
        // Add your custom colors here
        primary: '#daa520',    // Example: custom gold
        secondary: '#FEF9A7',  
        accent: '#F4D35E',     // Example: custom yellow
        neutral: '#333333',    // Example: custom dark gray
        info: '#30BCED',       // Example: custom light blue
        warning: '#FF6F61',    // Example: custom coral
        success: '#84C318',    // Example: custom green
        danger: '#D72638',    
      },
    },
  },
  plugins: [],
}

