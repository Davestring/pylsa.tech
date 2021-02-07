import React from 'react';

import { Helmet } from 'react-helmet';

import { Box, Heading, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';

function FirePrevPage() {
  const { t } = useTranslation('fireprev');
  return (
    <>
      <Helmet>
        <title>{t('html.title')}</title>
        <meta name="description" content={t('html.meta')} />
      </Helmet>
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
    </>
  );
}

export default FirePrevPage;
