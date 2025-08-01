/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // ✅ Scans all App Router files
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ Scans your reusable UI components
  ],
  theme: {
    extend: {},                           // ✅ Placeholder for adding custom colors/fonts later
  },
  plugins: [],                            // ✅ Empty, unless you add Tailwind plugins later
};
