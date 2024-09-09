/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      colors: {
        'custom-white': '#ffffff',
        'custom-black': '#000000',
        'custom-ash': '#E3E3E3',
        'custom-brand': '#EB2590',
        'custom-loginbg': '#F5F5F5',
        'custom-red': '#FF0000',
        'custom-errbg': '#fff2cc',
        'custom-linkactive': '#DEDEDE',
        'custom-link': '#8D8D8D',
        'custom-navitembg': '#222222',
        'custom-datepicker': '#F2F2F2',
        'custom-grey': '#838383',
        'custom-grey2': '#909090',
        'custom-green': '#63EA66',
        'custom-icbg': '#FDF5F2',
        'custom-userscard': '#9BCC9A',
        'custom-usersbg': '#F2FDF5',
        'custom-visbg': '#F8F8F9',
        'custom-brand2': '#FE623C',
        'custom-approved': '#A7D3A8',
        'custom-declined': '#FE9F88',
        'custom-processed': '#FFA500',
        'custom-processedbg': '#FFF5E6',
      }
    },
  },
  plugins: [],
}

