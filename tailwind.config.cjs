const forms = require("@tailwindcss/forms");

const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E2542",
        },
        secondary: {
          DEFAULT: "#D69330",
        },
        faded: {
          DEFAULT: "#E8EEF5",
          blue: "#828C98",
        },
      },
      fontFamily: {
        assistant: ["Assistant", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "5px",
      },
    },
  },

  plugins: [forms],
};

module.exports = config;
