
export default {
  content: [
    "./index.html",
    "./src*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FD5725',
          dark: '#E04A1A',
          light: '#FF6B3D'
        },
        secondary: {
          DEFAULT: '#1E3A8A',
          dark: '#1E40AF',
          light: '#3B82F6'
        }
      }
    },
  },
  plugins: [],
}

