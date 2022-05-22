import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: "'Noto Sans TC', Sans-serif",
    body: "'Noto Sans TC', Sans-serif",
  },
  colors: {
    blue: {
      500: '#3E5EBD',
      600: '#3551A2',
      700: '#2D458A',
    },
    yellow: {
      500: '#FFE975',
      600: '#FFDC60',
      700: '#E6C656',
    },
    cream: {
      500: '#FAFFD6',
      600: '#EFF4CD',
      700: '#D7DBB8',
    },
    grey: {
      900: '#4F5873',
      700: '#616C8C',
      500: '#C6CFE5',
      400: '#E8E8E8',
      300: '#F5F5F5',
      100: '',
    },
  },
  components: {
    //setting components theme
    Link: {
      baseStyle: {
        transition: '.2s ease-in-out',
        letterSpacing: '0.15em',
        _hover: {
          textDecoration: 'none',
          color: 'blue.500',
        },
        _focus: {
          outline: '0px',
          boxShadow: 'unset',
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: '16px',
        letterSpacing: '0.1em',
        lineHeight: '24px',
      },
    },
    Heading: {
      variants: {
        heading2: {
          fontSize: '48px',
          '@media(min-width: 40em)': {
            fontSize: '24px',
          },
        },
      },
    },
  },
};
const theme = extendTheme(customTheme);

export default theme;
