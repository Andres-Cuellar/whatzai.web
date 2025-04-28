/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d3852',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b6c9dc',
          300: '#8faac7',
          400: '#6a8ab1',
          500: '#1d3852',
          600: '#1a3249',
          700: '#162b40',
          800: '#132537',
          900: '#101e2e',
        },
        secondary: {
          DEFAULT: '#47c8bf',
          50: '#f0faf9',
          100: '#d5f3f1',
          200: '#abe7e3',
          300: '#81dbd5',
          400: '#57cfc7',
          500: '#47c8bf',
          600: '#35a199',
          700: '#2d877f',
          800: '#256c66',
          900: '#1d514c',
        },
        gray: {
          50: '#f9fafa',
          100: '#f4f4f4',
          200: '#e9e9e9',
          300: '#d9d9d9',
          400: '#c4c4c4',
          500: '#9d9d9d',
          600: '#747474',
          700: '#5c5c5c',
          800: '#323232',
          900: '#202323',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'custom-lg': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}