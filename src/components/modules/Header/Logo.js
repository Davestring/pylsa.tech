import React from 'react';
import PropTypes from 'prop-types';

import { Link, Image } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

import PylsaLogo from 'images/pylsa-logo.png';

function Logo({ size }) {
  return (
    <Link as={ReachLink} to="/">
      <Image alt="pylsa-logo" src={PylsaLogo} {...size}></Image>
    </Link>
  );
}

Logo.defaultProps = {
  size: { width: 160 },
};

Logo.propTypes = {
  size: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
};

export default Logo;
