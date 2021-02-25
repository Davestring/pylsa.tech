import React from 'react';

import { Box, Text } from '@chakra-ui/react';
import { GiCctvCamera, GiFireShield, GiSecurityGate } from 'react-icons/gi';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaNetworkWired } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';

import ProductsList from './ProductsList';

const PRODUCTS = [
  {
    id: 'access-control',
    i18nKey: 'products.accessControl',
    icon: MdLock,
    link: '/access-ctrl-system',
    color: 'yellow.500',
  },
  {
    id: 'cctv',
    i18nKey: 'products.cctv',
    icon: GiCctvCamera,
    link: '/cctv-system',
    color: 'black',
  },
  {
    id: 'fire-prev',
    i18nKey: 'products.firePrev',
    icon: GiFireShield,
    link: '/fire-prev-system',
    color: 'red.500',
  },
  {
    id: 'intrusion',
    i18nKey: 'products.intrusion',
    icon: GiSecurityGate,
    link: '/ips-system',
    color: 'black',
  },
  {
    id: 'networks',
    i18nKey: 'products.networks',
    icon: FaNetworkWired,
    link: '/networks-system',
    color: 'blue.500',
  },
  {
    id: 'switches',
    i18nKey: 'products.switches',
    icon: AiOutlinePhone,
    link: '/rtc-system',
    color: 'black',
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
