/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        colors: {
            'yellow-home': '#F4E0AD',
          },

        fontFamily: {
            Source: ["Source Sans", "sans-serif"]
         }
    },
  },
  plugins: [],
}

