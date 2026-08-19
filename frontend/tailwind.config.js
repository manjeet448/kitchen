/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8953D',
          hover: '#b38230',
        },
        dark: '#071320',
        background: '#ffffff',
        text: '#111827',
        border: '#E5E7EB',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1280px',
        },
      },
      borderRadius: {
        'xl': '16px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'elevated': '0 20px 40px -10px rgba(0,0,0,0.12)',
      }
    },
  },
  plugins: [],
}
