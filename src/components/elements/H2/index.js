import PropTypes from 'prop-types';
import React from 'react';

import { Heading } from '@chakra-ui/react';

function H2({ children, ...rest }) {
  return (
    <Heading {...{ as: 'h2', mb: 4, fontSize: 'xl', ...rest }}>
      {children}
    </Heading>
  );
}

H2.propTypes = {
  children: PropTypes.node,
};

export default H2;
