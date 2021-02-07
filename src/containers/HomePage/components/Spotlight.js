import React from 'react';

import { Stack, Text } from '@chakra-ui/react';

import { use100vh } from 'react-div-100vh';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';

function Spotlight({ ...rest }) {
  const { t } = useTranslation('homepage');
  const height = use100vh();

  return (
    <Container bg="base" textAlign="center" isFluid {...rest}>
      <Stack align="center" justify="center" h={`calc(${height}px - 4rem)`}>
        <H1 color="white" fontSize="6xl" textTransform="uppercase">
          {t('title')}
        </H1>
        <Text color="white" fontSize="xl" textTransform="uppercase">
          {t('subtitle')}
        </Text>
      </Stack>
    </Container>
  );
}

export default Spotlight;
