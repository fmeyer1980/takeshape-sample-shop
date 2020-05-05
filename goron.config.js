const colors = {
  'primary': '#023DA5',
  'primary-light': '#004a73',
  'primary-dark': 'rgba(0,30,47, 0.9)',
  'secondary': '#000',
  'transparent': 'transparent',
  'white': '#fff',
  'light-gray-light': '#f5f5f5',
  'light-gray-dark': '#EBEBEB',
  'medium-gray-light': '#717171',
  'medium-gray-dark': '#515151',
  'dark-gray-light': '#313131',
  'dark-gray-dark': '#212121',
  'black': '#131314',
};

const fluidSize = {
  'xs': 'var(--size-xs)',
  'sm': 'var(--size-sm)',
  '100': 'var(--size-100)',
  '200': 'var(--size-200)',
  '300': 'var(--size-300)',
  '400': 'var(--size-400)',
  '500': 'var(--size-500)',
  '600': 'var(--size-600)',
  '700': 'var(--size-700)',
  '800': 'var(--size-800)',
  '900': 'var(--size-900)',
  'lg': 'var(--size-lg)',
  'xl': 'var(--size-xl)'
};

module.exports = {
  colors,
  fluidSize,
  generateCustomProperties: true,
  utilities: {
    'bg': {
      items: colors,
      output: 'standard',
      property: 'background'
    },
    'color': {
      items: colors,
      output: 'standard',
      property: 'color'
    },
    'space': {
      items: fluidSize,
      output: 'standard',
      property: '--flow-space'
    },
    'mt': {
      items: fluidSize,
      output: 'standard',
      property: 'margin-top'
    },
    'mb': {
      items: fluidSize,
      output: 'standard',
      property: 'margin-bottom'
    },
    'leading': {
      items: {
        tight: '1.1',
        mid: '1.4',
        high: '1.6'
      },
      output: 'standard',
      property: 'line-height'
    },
    'measure': {
      items: {
        short: '35ch',
        mid: '65ch',
        long: '85ch'
      },
      output: 'standard',
      property: 'max-width'
    },
    'pt': {
      items: fluidSize,
      output: 'standard',
      property: 'padding-top'
    },
    'pb': {
      items: fluidSize,
      output: 'standard',
      property: 'padding-bottom'
    },
    'pl': {
      items: fluidSize,
      output: 'standard',
      property: 'padding-left'
    },
    'pr': {
      items: fluidSize,
      output: 'standard',
      property: 'padding-right'
    },
    'grid': {
      items: {
        1: 'repeat(1, 1fr)',
        2: 'repeat(2, 1fr)',
        3: 'repeat(3, 1fr)',
        4: 'repeat(4, 1fr)',
        5: 'repeat(5, 1fr)',
        6: 'repeat(6, 1fr)',
        7: 'repeat(7, 1fr)',
        8: 'repeat(8, 1fr)',
        9: 'repeat(9, 1fr)',
        10: 'repeat(10, 1fr)',
        11: 'repeat(11, 1fr)',
        12: 'repeat(12, 1fr)'
      },
      output: 'responsive',
      property: 'grid-template-columns'
    },
    'span': {
      items: {
        auto: 'auto',
        1: 'span 1 / span 1',
        2: 'span 2 / span 2',
        3: 'span 3 / span 3',
        4: 'span 4 / span 4',
        5: 'span 5 / span 5',
        6: 'span 6 / span 6',
        7: 'span 7 / span 7',
        8: 'span 8 / span 8',
        9: 'span 9 / span 9',
        10: 'span 10 / span 10',
        11: 'span 11 / span 11',
        12: 'span 12 / span 12'
      },
      output: 'responsive',
      property: 'grid-column'
    },
    'grid-cols': {
      items: {
        1: 'repeat(1, minmax(0, 1fr))',
        2: 'repeat(2, minmax(0, 1fr))',
        3: 'repeat(3, minmax(0, 1fr))',
        4: 'repeat(4, minmax(0, 1fr))',
        5: 'repeat(5, minmax(0, 1fr))',
        6: 'repeat(6, minmax(0, 1fr))',
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))'
      },
      output: 'responsive',
      property: 'grid-template-columns'
    },
    'gap': {
      items: fluidSize,
      output: 'responsive',
      property: 'gap'
    },
    'd': {
      items: {
        flex: 'flex',
        grid: 'grid',
        inlineBlock: 'inline-block',
        inline: 'inline',
        block: 'block',
        none: 'none'
      },
      output: 'responsive',
      property: 'display'
    },
    'a-items': {
      items: {
        stretch: 'stretch',
        center: 'center',
        start: 'flex-start',
        end: 'flex-end'
      },
      output: 'responsive',
      property: 'align-items'
    },
    'j-content': {
      items: {
        start: 'flex-start',
        end: 'flex-end',
        center: 'center',
        space_between: 'space-between',
        space_around: 'space-around'
      },
      output: 'responsive',
      property: 'justify-content'
    },
    'pos': {
      items: {
        static: 'static',
        fixed: 'fixed',
        relative: 'relative',
        absolute: 'absolute',
        sticky: 'sticky'
      },
      output: 'responsive',
      property: 'position'
    },
    'weight': {
      items: {
        light: '300',
        regular: '400',
        mid: '600',
        bold: '700'
      },
      output: 'standard',
      property: 'font-weight'
    },
    'text-transform': {
      items: {
        up: 'uppercase',
        low: 'lowercase',
        cap: 'capitalize'
      },
      output: 'standard',
      property: 'text-transform'
    },
    'text': {
      items: fluidSize,
      output: 'responsive',
      property: 'font-size'
    }
  },
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '940px'
  }
};