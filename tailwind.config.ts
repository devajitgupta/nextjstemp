import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         fontFamily: {
            lato: ["Lato"],
            roboto: ["Roboto"],
         },
         colors: {
            white: "#ffffff",
            black: "#000000",
            "gray-200": "#A5A5A5",
            "gray-400": "#B1B1B1",
            "gray-100": "#eaeaea",
            "neutral-200": "#ECECEC",
            "neutral-250": "#D0D0D0",
            "neutral-300": "#BEBEBE",
            "neutral-500": "#AFAFAF",
            "neutral-550": "#808080",
            "orange-650": "#FF6633",
            "orange-700": "#F2673A",
            "orange-600": "#F63",
            "stone-50": "#F5F5F5",
            "stone-100": "#F1F1F1",
            "stone-150": "#F3F3F3;",
            "stone-200": "#F6F6F6",
            "stone-300": "#BDBDBD",
            "stone-500": "#5F5F5F",
            "stone-600": "#484848",
            "stone-700": "#404040",
            "stone-750": "#313131",
            "teal-600": "#226C6D",
            "teal-700": "#316464",
            "teal-950": "#033434",
            "teal-900": "#003333",
            "zinc-800": "#353535",
            "zinc-850": "#1A1A1A",
            "zinc-900": "#A5A5A5",
         },
         screens: {
            xs: "400px",
            ...defaultTheme.screens,
         },
      },
   },
   darkMode: "class",
   plugins: [nextui()],
};
export default config;
