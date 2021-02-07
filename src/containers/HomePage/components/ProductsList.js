import Card from 'components/elements/Card';
import PropTypes from 'prop-types';
import React from 'react';

import { Box, Icon, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

const EllipsedText = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

function ProductsList({ products, ...rest }) {
  const { t } = useTranslation('homepage');
  return (
    <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} {...rest}>
      {products.map((item) => (
        <Link key={`product-${item.id}`} as={ReachLink} to={item.link}>
          <Card p={4}>
            <Stack align="center" justify="space-evenly" h="100%">
              <Icon as={item.icon} h={14} w={14}></Icon>
              <Box>
                <Text fontWeight="bold" textAlign="center" mb={1}>
                  {t(`${item.i18nKey}.title`)}
                </Text>
                <EllipsedText fontSize="xs" textAlign="center">
                  {t(`${item.i18nKey}.summary`)}
                </EllipsedText>
              </Box>
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
