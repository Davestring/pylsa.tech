import React, { useState } from 'react';

import { Box } from '@chakra-ui/react';

import Container from 'components/elements/Container';

import Logo from './components/Logo';
import Navigation from './components/Navigation';

const ROUTE_TREE = [
  {
    name: 'contact',
    path: '/contact',
  },
];

function Header({ ...rest }) {
  const [selected, setSelected] = useState(null);

  const onSelectHandler = (value) => setSelected(value);

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
        <Logo setSelected={onSelectHandler}></Logo>
        <Navigation
          routeTree={ROUTE_TREE}
          selected={selected}
          setSelected={onSelectHandler}
        ></Navigation>
      </Container>
    </Box>
  );
}

export default Header;
