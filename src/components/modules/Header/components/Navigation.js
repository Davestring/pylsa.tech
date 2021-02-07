import _ from 'lodash';

import PropTypes from 'prop-types';
import React from 'react';

import { Flex, Link, Stack, Text } from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

const ItemWrapper = styled(Flex)`
  align-items: center;
  color: ${({ theme }) => theme.colors.base};
  display: flex;
  height: 100%;

  transition: 0.5s ease;

  &:hover {
    border-bottom-width: 2px;
    border-color: ${({ theme }) => theme.colors.base};

    transition: border-color 1s ease;
  }
`;

function Navigation({ selected, setSelected, routeTree, ...rest }) {
  const { t } = useTranslation('navigation');

  return (
    <Stack isInline h="100%" {...rest}>
      {_.map(routeTree, (item) => (
        <Link
          as={ReachLink}
          to={item.path}
          key={`nav-item-${item.name}`}
          _focus={{ outline: 'none' }}
        >
          <ItemWrapper
            borderBottom={selected === item.name && '2px'}
            fontWeight={selected === item.name && 'bold'}
            onClick={() => setSelected(item.name)}
          >
            <Text px={2}>{t(item.name)}</Text>
          </ItemWrapper>
        </Link>
      ))}
    </Stack>
  );
}

Navigation.defaultProps = {
  setSelected: () => {},
  routeTree: [],
};

Navigation.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
  routeTree: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
};

export default Navigation;
