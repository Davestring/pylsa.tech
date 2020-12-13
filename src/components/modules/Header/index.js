import React from 'react';

import { Box } from '@chakra-ui/react';

import Container from 'components/elements/Container';

import Logo from './Logo';
import Navigation from './Navigation';

function Header({ items, ...rest }) {
  return (
    <Box
      as="header"
      bg="white"
      boxShadow="md"
      position="fixed"
      width="100%"
      zIndex="100"
      {...rest}
    >
      <Container
        {...{
          as: 'nav',
          alignItems: 'center',
          display: 'flex',
          height: 16,
          justifyContent: 'space-between',
        }}
      >
        <Logo></Logo>
        <Navigation></Navigation>
      </Container>
    </Box>
  );
}

export default Header;
