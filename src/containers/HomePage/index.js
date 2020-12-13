import React from 'react';

import { Box, SimpleGrid, Skeleton, Stack, Text } from '@chakra-ui/react';

import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';

function HomePage() {
  return (
    <Box as="article">
      <Container
        as="section"
        bg="base"
        h="calc(100vh - 4rem)"
        textAlign="center"
        isFluid
      >
        <Stack align="center" justify="center" h="100%">
          <H1 color="white" fontSize="6xl">
            Lorem Ipsum
          </H1>
          <Text fontSize="xl" color="white">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </Text>
        </Stack>
      </Container>
      <Box as="section">
        <Container py={20}>
          <H1 fontSize="4xl" mb={0}>
            Lorem Ipsum
          </H1>
          <Text mb={12}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={10}>
            <Skeleton h={64}></Skeleton>
            <Skeleton h={64}></Skeleton>
            <Skeleton h={64}></Skeleton>
          </SimpleGrid>
        </Container>
      </Box>
      <Box as="section" bg="gray.50">
        <Container h="100%" py={20}>
          <H1 fontSize="4xl" mb={0}>
            Lorem Ipsum
          </H1>
          <Text mb={12}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
            <Skeleton h={32}></Skeleton>
            <Skeleton h={32}></Skeleton>
            <Skeleton h={32}></Skeleton>
            <Skeleton h={32}></Skeleton>
            <Skeleton h={32}></Skeleton>
            <Skeleton h={32}></Skeleton>
          </SimpleGrid>
        </Container>
      </Box>
      <Box as="section">
        <Container h="100%" py={20}>
          <H1 fontSize="4xl" mb={0}>
            Lorem Ipsum
          </H1>
          <Text mb={12}>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10}>
            <Skeleton h={64}></Skeleton>
            <Skeleton h={64}></Skeleton>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
