import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize :{
      size1: "24px",
      size2: "20px",
      size3: "13px",
      size4: "16px",
      size5: "14px",
      size6: "12px",
      size8: "28px"
    },
    borderRadius:{
      "sadra": "10px",
      "sadra2": "20px"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_color: "#1E201E",
        secondary_color: "#3C3D37",
        tertiary_color: "#697565",
        accent_color: "#ECDFCC"


      },
    },
  },

  plugins: [],
} satisfies Config;
