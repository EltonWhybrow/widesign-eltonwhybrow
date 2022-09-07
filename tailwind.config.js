module.exports = {
  // mode: 'jit',
  prefix: '',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'tealy': {
          '50': '#f3f9f9',
          '100': '#e7f3f4',
          '200': '#c3e1e2',
          '300': '#9ecfd1',
          '400': '#56acaf',
          '500': '#0d888c',
          '600': '#0c7a7e',
          '700': '#0a6669',
          '800': '#085254',
          '900': '#064345'
        },
        'korma': {
          '50': '#faf6f3',
          '100': '#f5ede8',
          '200': '#e5d1c5',
          '300': '#d5b5a1',
          '400': '#b67e5b',
          '500': '#964715',
          '600': '#874013',
          '700': '#713510',
          '800': '#5a2b0d',
          '900': '#4a230a'
        },
        'raw': {
          '50': '#fef9f6',
          '100': '#fcf3ed',
          '200': '#f8e1d3',
          '300': '#f4cfb8',
          '400': '#ebab82',
          '500': '#e3874d',
          '600': '#cc7a45',
          '700': '#aa653a',
          '800': '#88512e',
          '900': '#6f4226'
        }
      },
      rotate: {
        '357': '357deg',
      },
      fontFamily: {
        'style-script': ['Style Script', 'sans-serif']
      },
    },
  },
  variants: {
    display: ['group-hover'],
    extend: {},
  },
  plugins: [],
}
