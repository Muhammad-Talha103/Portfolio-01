import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main : '#2dd4bf'
      },
      screens: {
        xs:'375px',
        md: "850px",
        maxmd:'960px',
        xxl:'1440px'
      },
      
    },
  },
  plugins: [],
};
export default config;
