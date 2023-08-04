/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "13px": "13px",
      },
      width: {
        128: "32rem",
        270: "70rem",
      },
      height: {
        128: "32rem",
      },
      animation: {
        blobMorph: "blobMorph 7s ease-in-out infinite",
      },
      keyframes: {
        blobMorph: {
          "0,100%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { " border-radius": "40% 70% 70% 60%/50% 60% 30% 60%" },
        },
      },
    },
  },
  plugins: [],
};
