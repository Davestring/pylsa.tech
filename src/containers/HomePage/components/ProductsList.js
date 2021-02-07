import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Link, Stack, SimpleGrid, Text } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import Card from 'components/elements/Card';

function ProductsList({ products, ...rest }) {
  const { t } = useTranslation('homepage');
  return (
    <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} {...rest}>
      {products.map((item) => (
        <Link key={`product-${item.id}`} as={ReachLink} to={item.link}>
          <Card p={4}>
            <Stack align="center" justify="space-evenly" h="100%">
              <Icon as={item.icon} h={14} w={14}></Icon>
              <Text fontWeight="bold" textAlign="center">
                {t(item.i18nKey)}
              </Text>
            </Stack>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
}

ProductsList.defaultProps = {
  products: [],
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      i18nKey: PropTypes.string,
      icon: PropTypes.elementType,
      link: PropTypes.string,
    }),
  ),
};

export default ProductsList;
