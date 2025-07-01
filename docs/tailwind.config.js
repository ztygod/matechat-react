/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./docs/**/*.{js,ts,jsx,tsx,mdx}",
      "./**/*.md",                   // rspress 会用到的 markdown
      "./**/*.mdx",                  // rspress 也支持 mdx
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  