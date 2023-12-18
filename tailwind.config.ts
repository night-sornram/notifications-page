import type { Config } from 'tailwindcss'
const {colors : defaultColors } = require("tailwindcss/defaultTheme")
const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(1, 90%, 64%)",
      "200" : "hsl(219, 85%, 26%)",
      "300" : "hsl(210, 60%, 98%)",
      "400" : "hsl(211, 68%, 94%)",
      "500" : "hsl(205, 33%, 90%)",
      "600" : "hsl(219, 14%, 63%)",
      "700" : "hsl(219, 12%, 42%)",
      "800" : "hsl(224, 21%, 14%)"
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
    },
  },
  plugins: [],
}
export default config
