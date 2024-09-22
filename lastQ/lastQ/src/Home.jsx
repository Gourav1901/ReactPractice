// src/components/Home.js
import React from 'react';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box maxW="md" mx="auto" p={5} mt={10} textAlign="center" borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading mb={4}>Welcome to Chakra UI App</Heading>
      <Text mb={4}>This is a simple UI built with Chakra UI.</Text>
      
      <Input placeholder="Enter your text here" variant="filled" mb={4} />

      <Button colorScheme="teal" variant="outline" size="lg" mb={4}>Click Me</Button>

      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
        <Text>This is a card component</Text>
      </Box>
    </Box>
  );
};

export default Home;
