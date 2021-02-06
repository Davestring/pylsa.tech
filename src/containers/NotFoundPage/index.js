import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import Container from 'components/elements/Container';

function NotFoundPage(props) {
  return (
    <Container h="calc(100vh - 4rem - 203px)">
      <Flex align="center" h="100%">
        <Heading as="h1">Not Found Page</Heading>
      </Flex>
    </Container>
  );
}

export default NotFoundPage;
