import React from 'react';

import { Helmet } from 'react-helmet';

import { Box, Heading, Text } from '@chakra-ui/react';

import { Trans, useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';
import LogoAnimatedGrid from 'components/elements/LogoAnimatedGrid';

import LOGOS from './logos';

function AccessCtrlPage() {
  const { t } = useTranslation('accessControl');
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
          <Trans i18nKey={'accessControl:description'}>
            <Text fontSize="lg" textAlign="justify" mb={12}></Text>
          </Trans>
          <LogoAnimatedGrid
            columns={4}
            spacing={12}
            logos={LOGOS}
          ></LogoAnimatedGrid>
        </Container>
      </Box>
    </>
  );
}

export default AccessCtrlPage;
