import {createTheme,  createBox} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  
  textVariants: {
    title: {
      fontSize: 40,
      color: 'white',
      textAlign: 'center',
      lineHeight: 40,
      fontFamily: 'SFProText-Bold',
    },
    title1: {
      fontSize: 28,
      color: 'title',
      fontFamily: 'SFProText-Medium',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: 'title',
      fontFamily: 'SFProText-Medium',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      color: 'text',
      fontFamily: 'SFProText-Light',
    },
  },
});

export type Theme = typeof theme;



export default theme;