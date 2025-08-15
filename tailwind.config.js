/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#1E3A8A',
          400: '#3B82F6',
          300: '#93C5FD',
        },
        secondary: {
          500: '#F59E0B',
          400: '#10B981',
        },
        neutral: {
          100: '#F3F4F6',
          200: '#D1D5DB',
          300: '#9CA3AF',
          800: '#1F2A44',
          900: '#111827',
        },
        success: '#10B981',
        error: '#EF4444',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}