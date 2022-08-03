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
import Footer from 'components/Footer';
import Stream from 'components/Stream';

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
      {/* <Stream /> */}
    </>
  );
}

export default App;
