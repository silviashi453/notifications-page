/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(1, 90%, 64%)",
        "primary-blue": "hsl(219, 85%, 26%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "neutral-light-grayish-blue-2": "hsl(205, 33%, 90%)",
        "neutral-grayish-blue": "hsl(219, 14%, 63%)",
        "neutral-dark-grayish-blue": "hsl(219, 12%, 42%)",
        "neutral-very-dark-blue": "hsl(224, 21%, 14%)",
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans"],
      },
      fontSize: {
        body: "16px",
      },
    },
  },
  plugins: [],
};
