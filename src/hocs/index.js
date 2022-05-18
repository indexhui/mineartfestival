import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const HOCs = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default HOCs;
