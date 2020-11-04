// file postcss.config.js
const tailwindcss = require("tailwindcss");
module.exports = {
    plugins: ['tailwindcss', 'postcss-preset-env'],
  }

//   plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
