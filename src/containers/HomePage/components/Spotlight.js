import React from 'react';

import { Stack, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';

function Spotlight({ ...rest }) {
  const { t } = useTranslation('homepage');

  return (
    <Container
      bg="base"
      h="calc(100vh - 4rem)"
      textAlign="center"
      isFluid
      {...rest}
    >
      <Stack align="center" justify="center" h="100%">
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
