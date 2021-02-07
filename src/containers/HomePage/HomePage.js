import React from 'react';

import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

import Products from 'containers/HomePage/components/Products';
import Spotlight from 'containers/HomePage/components/Spotlight';

function HomePage() {
  const { t } = useTranslation('homepage');
  return (
    <>
      <Helmet>
        <title>{t('html.title')}</title>
        <meta name="description" content={t('html.meta')} />
      </Helmet>
      <Box as="article">
        <Spotlight as="section"></Spotlight>
        <Products as="section"></Products>
      </Box>
    </>
  );
}

export default HomePage;
