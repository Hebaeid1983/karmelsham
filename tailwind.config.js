/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B91C1C', // لون رئيسي للموقع
        secondary: '#FBBF24', // لون ثانوي
      },
      spacing: {
        128: '32rem', // مسافة إضافية كبيرة إذا احتجت
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'], // مثال لو حبيت تستخدم خط عربي
      }
    },
  },
  plugins: [],
}
