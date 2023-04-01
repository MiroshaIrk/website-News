module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#9b0404',
      },
      fontFamily: {
        main: ['Montserrat'],
      }
    },
  },
  plugins: [],
}

/**Чтоб загрузить полный config со всеми свойствами "npx tailwindcss init --full" */