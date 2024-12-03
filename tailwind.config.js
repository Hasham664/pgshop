/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgba(12, 0, 71, 1)",
        linkColor: "rgba(53, 53, 53, 1)",
        smallHeader: "rgba(8, 10, 84, 1)",
        header: "rgba(45, 165, 243, 1)",
        hero1: "rgba(48, 43, 44, 1)",
        hero2: "rgba(0, 103, 170, 1)",
        line: "rgba(255, 255, 255, 1)",
        border: "0.5px solid rgba(104, 104, 104, 1)",
        shadow: "box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        heading: "rgba(255, 49, 126, 1)",
      },
      borderRadius: {
        "custom-190": "190px",
        "custom-280": "280px",
      },
      backgroundImage: {
        "custom-bg": "url('./bg-img.png')",
      },
    },
  },
  plugins: [],
};
