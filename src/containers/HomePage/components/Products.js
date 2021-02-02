import React from 'react';

import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';
import Card from 'components/elements/Card';

function Products({ ...props }) {
  const { t } = useTranslation('homepage');
  return (
    <Box {...props}>
      <Container py={20}>
        <H1 fontSize="4xl" mb={0} textTransform="capitalize">
          {t('products.title')}
        </H1>
        <Text mb={12}>{t('products.subtitle')}</Text>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={10}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Products;
