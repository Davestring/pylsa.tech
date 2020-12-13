import React from 'react';

import { Box, Grid, GridItem, Skeleton } from '@chakra-ui/react';

import Container from 'components/elements/Container';

function Footer({ ...rest }) {
  return (
    <Box as="footer" bg="gray.200" {...rest}>
      <Container paddingY={12}>
        <Grid height={64} gap={4}>
          <GridItem rowSpan={1} colSpan={{ base: 2, sm: 2, md: 1 }}>
            <Skeleton h="100%" w="100%"></Skeleton>
          </GridItem>
          <GridItem rowSpan={1} colSpan={{ base: 2, sm: 2, md: 1 }}>
            <Skeleton h="100%" w="100%"></Skeleton>
          </GridItem>
          <GridItem rowSpan={1} colSpan={{ base: 4, sm: 4, md: 1 }}>
            <Skeleton h="100%" w="100%"></Skeleton>
          </GridItem>
          <GridItem rowSpan={1} colSpan={{ base: 4, sm: 4, md: 3 }}>
            <Skeleton h="100%" w="100%"></Skeleton>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
