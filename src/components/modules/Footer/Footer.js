import React from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';

import SocialMedia from './components/SocialMedia';

const SOCIAL_MEDIA_ITEMS = [
  {
    name: 'facebook',
    icon: FaFacebookSquare,
    link: 'https://facebook.com/',
  },
  {
    name: 'twitter',
    icon: FaTwitterSquare,
    link: 'https://twitter.com/',
  },
  {
    name: 'linkedin',
    icon: FaLinkedin,
    link: 'https://linkedin.com/',
  },
  {
    name: 'instagram',
    icon: FiInstagram,
    link: 'https://instagram.com/',
  },
];

function Footer({ ...rest }) {
  const { t } = useTranslation('footer');

  return (
    <Box as="footer" bg="gray.200" {...rest}>
      <Container paddingY={12}>
        <Stack align="center" mb={4} spacing={4}>
          <Text as="strong" fontSize="xl" textTransform="uppercase">
            {t('followUs')}
          </Text>
          <SocialMedia smItems={SOCIAL_MEDIA_ITEMS} spacing={8}></SocialMedia>
        </Stack>
        <Text fontSize="sm" textAlign="center">
          {t('address')}
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
