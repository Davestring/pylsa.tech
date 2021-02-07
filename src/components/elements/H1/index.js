import PropTypes from 'prop-types';
import React from 'react';

import { Heading } from '@chakra-ui/react';

function H1({ children, ...rest }) {
  return (
    <Heading {...{ as: 'h1', mb: 4, fontSize: '2xl', ...rest }}>
      {children}
    </Heading>
  );
}

H1.propTypes = {
  children: PropTypes.node,
};

export default H1;
