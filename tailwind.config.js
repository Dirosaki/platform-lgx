/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      background: '#0B0909',
      input: '#202021',
      card: '#141314',
      white: '#F2F2F2',
      placeholder: '#999999',
      primary: {
        DEFAULT: '#FA3232',
        600: '#D12828',
      },
      border: '#333333',
      success: {
        DEFAULT: '#53FF7A',
      },
    },
    extend: {
      backgroundImage: {
        auth: "url('@/assets/background.webp')",
      },
      boxShadow: {
        'toast-error': '0 0 10px #FA323280',
        'toast-success': '0 0 10px #53FF7A80',
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
