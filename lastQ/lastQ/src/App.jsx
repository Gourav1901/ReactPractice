// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';

const App = () => {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
};

export default App;
