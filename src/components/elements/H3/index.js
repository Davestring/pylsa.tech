import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from '@chakra-ui/react';

function H3({ children, ...rest }) {
  return (
    <Heading {...{ as: 'h2', mb: 4, fontSize: 'lg', ...rest }}>
      {children}
    </Heading>
  );
}

H3.propTypes = {
  children: PropTypes.node,
};

export default H3;
