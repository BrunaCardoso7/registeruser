import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bgbutton': 'linear-gradient(to right, #FFA500, #FF69B4)',
        'bgheader': '#ECE9E9',
      },
      textColor: {
        'textheader': '#303030',
      },
    },
  },
  plugins: [],
};

export default config;