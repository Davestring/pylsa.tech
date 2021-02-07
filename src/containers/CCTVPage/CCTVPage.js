import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';

function CCTVPage() {
  const { t } = useTranslation('cctv');
  return (
    <Box as="article" my={12}>
      <Container
        as="section"
        bg="base"
        mb={12}
        py={12}
        textAlign="center"
        isFluid
      >
        <Heading as="h1" color="white" textTransform="uppercase">
          {t('title')}
        </Heading>
      </Container>
      <Container as="section">
        <Text fontSize="lg" textAlign="justify">
          {t('description')}
        </Text>
      </Container>
    </Box>
  );
}

export default CCTVPage;
