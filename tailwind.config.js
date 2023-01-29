/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#becfb9",

          secondary: "#F000B8",

          accent: "#6f9ce4",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#e78282",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
