import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    brand: {
      500: '#3DB9FF',
      600: '#186DD1',
      700: '#0A2C54',
    },
    grass: '#61CE70',
    sun: '#FAC02D',
    sky: '#F4EED6',
    umi: '#559EBE',
    grey: {
      900: '#262626',
      800: '#595959',
      700: '#8C8C8C',
      600: '#BFBFBF',
      500: '#D9D9D9',
      400: '#E8E8E8',
      300: '#F5F5F5',
      100: '',
    },
  },
};
const theme = extendTheme(customTheme);

export default theme;
