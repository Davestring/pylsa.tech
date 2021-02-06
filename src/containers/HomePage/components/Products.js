import React from 'react';

import { Box, Icon, Stack, SimpleGrid, Text } from '@chakra-ui/react';

import { AiOutlinePhone } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';
import { GiFireShield, GiSecurityGate } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { IoGitNetworkOutline } from 'react-icons/io5';

import { useTranslation } from 'react-i18next';

import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';
import Card from 'components/elements/Card';

const PRODUCTS = [
  { id: 'cctv', i18nKey: 'products.cctv', icon: BsCameraVideo },
  { id: 'access-control', i18nKey: 'products.accessControl', icon: GrSecure },
  { id: 'fire-prev', i18nKey: 'products.firePrev', icon: GiFireShield },
  { id: 'intrusion', i18nKey: 'products.intrusion', icon: GiSecurityGate },
  { id: 'switches', i18nKey: 'products.switches', icon: AiOutlinePhone },
  { id: 'networks', i18nKey: 'products.networks', icon: IoGitNetworkOutline },
];

function ProductsList({ ...rest }) {
  const { t } = useTranslation('homepage');
  return (
    <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} {...rest}>
      {PRODUCTS.map((item) => (
        <Card key={`product-${item.id}`} p={4}>
          <Stack align="center" justify="space-evenly" h="100%">
            <Icon as={item.icon} h={14} w={14}></Icon>
            <Text fontWeight="bold" textAlign="center">
              {t(item.i18nKey)}
            </Text>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
}

function Products({ ...props }) {
  const { t } = useTranslation('homepage');
  return (
    <Box {...props}>
      <Container py={20}>
        <H1 fontSize="4xl" mb={0} textTransform="capitalize">
          {t('products.title')}
        </H1>
        <Text mb={12}>{t('products.subtitle')}</Text>
        <ProductsList spacing={10}></ProductsList>
      </Container>
    </Box>
  );
}

export default Products;
