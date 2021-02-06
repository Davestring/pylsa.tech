import React from 'react';

import { Box } from '@chakra-ui/react';

import Spotlight from 'containers/HomePage/components/Spotlight';
import Products from 'containers/HomePage/components/Products';

function HomePage() {
  return (
    <Box as="article">
      <Spotlight as="section"></Spotlight>
      <Products as="section"></Products>
    </Box>
  );
}

export default HomePage;
