import React from 'react';

import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

import { LgShadow, MdShadow, SmShadow } from 'components/elements/Shadows';

import Products from 'containers/HomePage/components/Products';
import Spotlight from 'components/modules/Spotlight';

const STARS_PROPS = [
  {
    id: 'sm',
    height: '1px',
    shadow: SmShadow,
    speed: 50,
    width: '1px',
  },
  {
    id: 'md',
    height: '2px',
    shadow: MdShadow,
    speed: 100,
    width: '2px',
  },
  {
    id: 'lg',
    height: '3px',
    shadow: LgShadow,
    speed: 150,
    width: '3px',
  },
];

function HomePage() {
  const { t } = useTranslation('homepage');
  return (
    <>
      <Helmet>
        <title>{t('html.title')}</title>
        <meta name="description" content={t('html.meta')} />
      </Helmet>
      <Box as="article" marginTop="-4rem">
        <Spotlight
          as="section"
          title={t('title')}
          subtitle={t('subtitle')}
          stars={STARS_PROPS}
        ></Spotlight>
        <Products as="section"></Products>
      </Box>
    </>
  );
}

export default HomePage;
