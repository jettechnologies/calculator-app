/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      // theme 1
      "theme-one":{
        // background colors
        "main-bg": "hsl(222, 26%, 31%)",
        "keypad-bg": "hsl(223, 31%, 20%)",
        "screen-bg": "hsl(224, 36%, 15%)",
        //keys colors
        "key-secondary-bg": "hsl(225, 21%, 49%)",
        "key-secondary-shadow": "hsl(224, 28%, 35%)",
        "toggle-knot-bg": "hsl(6, 63%, 50%)",
        "toggle-shadow": "hsl(6, 70%, 34%)",
        "key-primary-bg": "hsl(30, 25%, 89%)",
        "key-primary-shadow": "hsl(28, 16%, 65%)",
        //text-colors
        "text-blue": "hsl(221, 14%, 31%)",
      },
      //theme 2
      "theme-two":{
        // background colors
        "main-bg": "hsl(0, 0%, 90%)",
        "keypad-bg": "hsl(0, 5%, 81%)",
        "screen-bg": "hsl(0, 0%, 93%)",
        //keys colors
        "key-secondary-bg": "hsl(185, 42%, 37%)",
        "key-secondary-shadow": "hsl(185, 58%, 25%)",
        "toggle-knot-bg": "hsl(25, 98%, 40%)",
        "toggle-shadow": "hsl(25, 99%, 27%)",
        "key-primary-bg": "hsl(45, 7%, 89%)",
        "key-primary-shadow": "hsl(35, 11%, 61%)",
        //text colors
        "text-yellow": "hsl(60, 10%, 19%)",
      },
      //theme 3
      "theme-three": {
        //background colors
        "main-bg": "hsl(268, 75%, 9%)",
        "screen-bg": "hsl(268, 71%, 12%)",
        "keypad-bg": "hsl(268, 71%, 12%)",
        //keys colors
        "key-secondary-bg": "hsl(281, 89%, 26%)",
        "key-secondary-shadow": "hsl(285, 91%, 52%)",
        "toggle-knot-bg": "hsl(176, 100%, 44%)",
        "toggle-shadow": "hsl(177, 92%, 70%)",
        "key-primary-bg": "hsl(268, 47%, 21%)",
        "key-primary-shadow": "hsl(290, 70%, 36%)",
        //text colors
        "text-yellow": "hsl(52, 100%, 62%)",
        "text-blue":"hsl(198, 20%, 13%)",
      },
      "white": "hsl(0, 0%, 100%)",
    },
    fontFamily:{
      "league": ['League Spartan', "sans-serif"],
    },
    fontSize: {
      "size-400": ["14px", "1.4em"],
      "size-500": ["16px", "1.4em"],
      "size-600": ["18px", "1.4em"],
      "size-700": ["22px", "1.5em"],
      "size-800": ["25px", "1.6em"],
    },

    extend: {},
  },
  plugins: [],
}

