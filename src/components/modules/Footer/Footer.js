import PropTypes from 'prop-types';
import React from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';

import SocialMedia from './components/SocialMedia';

function Footer({ smItems, ...rest }) {
  const { t } = useTranslation('footer');

  return (
    <Box as="footer" bg="gray.200" {...rest}>
      <Container paddingY={12}>
        <Stack align="center" mb={4} spacing={4}>
          <Text as="strong" fontSize="xl" textTransform="uppercase">
            {t('followUs')}
          </Text>
          <SocialMedia smItems={smItems} spacing={8}></SocialMedia>
        </Stack>
        <Text fontSize="sm" textAlign="center">
          {t('address')}
        </Text>
      </Container>
    </Box>
  );
}

Footer.defaultProps = {
  smItems: [],
};

Footer.propTypes = {
  smItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.elementType,
      link: PropTypes.string,
    }),
  ),
};

export default Footer;
