/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { DinNextLtArabic: ['var(--din-next-lt-arabic)'] }
    },

    colors: {
      primary: {
        500: '#172A1C',
        400: '#0A333A'
      },
      dark: {
        100: '#000000',
        200: '#0F1117',
        300: '#151821',
        400: '#212734',
        500: '#101012'
      },
      light: {
        900: '#FFFFFF',
        500: '#ECECEC',
        400: '#ACACAC'
      },
      Fuschia: {
        800: '#31295D1A',
        100: '#949494',
        80: '#ACACAC',
        60: '#ECECEC'
      },
      'light-grey': '#ECECEC',
      hover: '#8D9833',
      'prime-50': 'rgb(var(--prime-50))',
      'prime-100': 'rgb(var(--prime-100))',
      'prime-200': 'rgb(var(--prime-200))',
      'prime-300': 'rgb(var(--prime-300))',
      'prime-400': 'rgb(var(--prime-400))',
      'prime-500': 'rgb(var(--prime-500))',
      'prime-600': 'rgb(var(--prime-600))',
      'prime-700': 'rgb(var(--prime-700))',
      'prime-800': 'rgb(var(--prime-800))',
      'prime-900': 'rgb(var(--prime-900))',
      'prime-950': 'rgb(var(--prime-950))',
      'surface-0': 'rgb(var(--surface-0))',
      'surface-50': 'rgb(var(--surface-50))',
      'surface-100': 'rgb(var(--surface-100))',
      'surface-200': 'rgb(var(--surface-200))',
      'surface-300': 'rgb(var(--surface-300))',
      'surface-400': 'rgb(var(--surface-400))',
      'surface-500': 'rgb(var(--surface-500))',
      'surface-600': 'rgb(var(--surface-600))',
      'surface-700': 'rgb(var(--surface-700))',
      'surface-800': 'rgb(var(--surface-800))',
      'surface-900': 'rgb(var(--surface-900))',
      'surface-950': 'rgb(var(--surface-950))'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
