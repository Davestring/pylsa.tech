import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Link, Stack } from '@chakra-ui/react';

function Navigation({ routeTree, ...rest }) {
  return (
    <Stack isInline {...rest}>
      {_.map(routeTree, (route, idx) => (
        <Flex key={`nav-item-${idx}`} alignItems="center" color="white">
          <Link paddingX={4}>{route.title}</Link>
        </Flex>
      ))}
    </Stack>
  );
}

Navigation.defaultProps = {
  routeTree: [],
};

Navigation.propTypes = {
  routeTree: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string }),
  ),
};

export default Navigation;
