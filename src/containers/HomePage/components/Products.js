import React from 'react';

import { Box, Text } from '@chakra-ui/react';
import { GiFireShield, GiSecurityGate } from 'react-icons/gi';

import { AiOutlinePhone } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';
import { GrSecure } from 'react-icons/gr';
import { IoGitNetworkOutline } from 'react-icons/io5';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';

import ProductsList from './ProductsList';

const PRODUCTS = [
  {
    id: 'cctv',
    i18nKey: 'products.cctv',
    icon: BsCameraVideo,
    link: '/cctv-system',
  },
  {
    id: 'access-control',
    i18nKey: 'products.accessControl',
    icon: GrSecure,
    link: '/access-ctrl-system',
  },
  {
    id: 'fire-prev',
    i18nKey: 'products.firePrev',
    icon: GiFireShield,
    link: '/fire-prev-system',
  },
  {
    id: 'intrusion',
    i18nKey: 'products.intrusion',
    icon: GiSecurityGate,
    link: '/ips-system',
  },
  {
    id: 'switches',
    i18nKey: 'products.switches',
    icon: AiOutlinePhone,
    link: '/rtc-system',
  },
  {
    id: 'networks',
    i18nKey: 'products.networks',
    icon: IoGitNetworkOutline,
    link: '/networks-system',
  },
];

function Products({ ...props }) {
  const { t } = useTranslation('homepage');
  return (
    <Box {...props}>
      <Container py={20}>
        <H1 fontSize="4xl" mb={0} textTransform="capitalize">
          {t('products.title')}
        </H1>
        <Text mb={12}>{t('products.subtitle')}</Text>
        <ProductsList products={PRODUCTS} spacing={10}></ProductsList>
      </Container>
    </Box>
  );
}

export default Products;
