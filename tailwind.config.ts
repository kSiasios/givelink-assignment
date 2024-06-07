import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "givelink-purple": "rgb(119 74 246)",
        "givelink-orange": "rgb(255 87 87)",
      },
    },
  },
  plugins: [],
};
export default config;
