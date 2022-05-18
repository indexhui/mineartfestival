import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Router from 'routes';
import Header from 'components/Header';

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
