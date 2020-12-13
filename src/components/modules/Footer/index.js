import React from 'react';

import { Box, Grid, GridItem, Skeleton } from '@chakra-ui/react';

import Container from 'components/elements/Container';

function Footer({ ...rest }) {
  return (
    <Box as="footer" bg="gray.200" {...rest}>
      <Container paddingY={12}>
        <Grid
          height={64}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem colSpan={1}>
            <Skeleton h="100%" w="100%"></Skeleton>
          </GridItem>
          <GridItem colSpan={1}>
            <Skeleton h="100%" w="100%"></Skeleton>
          </GridItem>
          <GridItem colSpan={1}>
            <Skeleton h="100%" w="100%"></Skeleton>
          </GridItem>
          <GridItem colRow={1} colSpan={3}>
            <Skeleton h="100%" w="100%"></Skeleton>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
