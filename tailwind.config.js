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
        brand: "rgba(25, 28, 31, 1)",
        border2: "rgba(228, 231, 233, 1)",
        icons: "rgba(193, 194, 255, 1)",
        borderb: "rgba(223, 222, 222, 1)",
        bgColor: "rgba(244, 244, 244, 1)",
        list: "rgba(245, 245, 245, 1)",
        tabsColor: "rgba(95, 108, 114, 1)",
        shipping: "rgba(240, 246, 255, 1)",
        footer: "rgba(173, 183, 188, 1)",
      },
      borderRadius: {
        "custom-190": "190px",
        "custom-280": "280px",
      },
      backgroundImage: {
        "custom-bg": "url('/bg-img.png')",
        "pink-color": "url('/pinkcolor.png')",
        "shop-now": "url('/bg-pic.png')",
      },
      screens: {
        "custom-1282": { max: "1300px" },
        "custom-card": { max: "1370px" },
        "max-md": { max: "1120px" },
        "max-sm": { max: "950px" },
        "max-sm2": { max: "870px" },
        "max-default": { max: "650px" },
      },
    },
  },
  plugins: [],
};
