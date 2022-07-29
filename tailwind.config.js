const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    color : {
      'fsci-yellow': '#fbbf24'
    },

    extend: {},
  },
  plugins: [],
});