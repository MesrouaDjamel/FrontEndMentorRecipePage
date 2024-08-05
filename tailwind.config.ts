import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        stone100: "hsl(30, 54%, 90%)",
        stone150: "hsl(30, 18%, 87%)",
        stone600: "hsl(30, 10%, 34%)",
        stone900: "hsl(24, 5%, 18%)",
        brown800: "hsl(14, 45%, 36%)",
        rose800: "hsl(332, 51%, 32%)",
        rose50: "#F3E5D8",
        rose25: "#FFF7FC",
        
      },
    },
  },
  plugins: [],
};
export default config;
