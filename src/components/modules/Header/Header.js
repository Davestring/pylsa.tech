import React, { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import { useLocation } from 'react-router-dom';

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
  const [isTransparent, setIsTransparent] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const listener = document.addEventListener('scroll', (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 0) setIsTop(false);
      else setIsTop(true);
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [isTop]);

  useEffect(() => {
    setIsTransparent(location.pathname === '/' && isTop);
  }, [location, isTop]);

  const onSelectHandler = (value) => setSelected(value);

  return (
    <Box
      as="header"
      bg={isTransparent ? 'transparent' : 'white'}
      boxShadow={!isTransparent && 'md'}
      position="fixed"
      transition="background-color 1s ease"
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
        <Logo
          isTransparent={isTransparent}
          setSelected={onSelectHandler}
        ></Logo>
        <Navigation
          isTransparent={isTransparent}
          routeTree={ROUTE_TREE}
          selected={selected}
          setSelected={onSelectHandler}
        ></Navigation>
      </Container>
    </Box>
  );
}

export default Header;
