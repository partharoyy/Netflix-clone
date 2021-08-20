// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "mid-black": "rgba(37, 37, 37, 0.61)",
        "btn-color": "rgba(51, 51, 51, 0.5)",
        "login-bg": "rgba(0, 0, 0, 0.4)",
        "login-bg-img-from": "rgba(0, 0, 0, 0.8)",
        "login-bg-img-via": "rgba(0, 0, 0, 0)",
        "login-bg-img-to": "rgba(0, 0, 0, 0.8)",
        "signup-screen": "rgba(0, 0, 0, 0.85)",
      },
    },
  },
  variants: {},
  plugins: [],
};
