// tailwind.config.jsnpm
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors:{
          lightHover: '#fcf4ff',
          darkHover: '#2a004a',
          darkTheme: '#11001f',
          lightbrown: '#a97d4a',
        },
        fontFamily: {
          outfit: ["Outfit", "sans-serif"],
          ovo: ["Ovo", "serif"],
          roboto_mono: ["Roboto_Mono"]
        },
        boxShadow: {
          'black' : '4px 4px 0 #000',
          'white' : '4px 4px 0 #fff',
        },
        gridTemplateColumns:{
          'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        }
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
    darkMode:'selector',
    plugins: [],
};
