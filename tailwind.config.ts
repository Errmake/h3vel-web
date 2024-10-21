import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      lightblue: "#F4F4F4",
      blue: "#1244FD",
      black: "#000",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
};
export default config;