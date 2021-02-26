import React from 'react';

import { Helmet } from 'react-helmet';

import { Redirect, useParams } from 'react-router-dom';

import { Box, Heading, Text } from '@chakra-ui/react';

import { Trans, useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';
import LogoAnimatedGrid from 'components/elements/LogoAnimatedGrid';

import PORTFOLIO_ITEMS from 'utils/portfolio-items';

import _ from 'lodash';

function PortfolioPage() {
  const { system } = useParams();

  const allowed = _.flow(
    (obj) => _.omit(obj, 'grid'),
    (obj) => _.keys(obj),
    (arr) => _.includes(arr, system),
  )(PORTFOLIO_ITEMS);

  const { t } = useTranslation(allowed ? system : 'homepage');

  if (!allowed) return <Redirect to="/"></Redirect>;

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
          <Heading as="h1" color="white" textTransform="uppercase" px={4}>
            {t('title')}
          </Heading>
        </Container>
        <Container as="section">
          <Trans i18nKey={`${system}:description`}>
            <Text fontSize="lg" textAlign="justify" mb={12}></Text>
          </Trans>
          <LogoAnimatedGrid
            logos={PORTFOLIO_ITEMS[system]}
            {...PORTFOLIO_ITEMS.grid[system]}
          ></LogoAnimatedGrid>
        </Container>
      </Box>
    </>
  );
}

export default PortfolioPage;
