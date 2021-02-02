import React from 'react';
import PropTypes from 'prop-types';

import { Link, Image } from '@chakra-ui/react';

import PylsaLogo from 'images/pylsa-logo.png';

function Logo({ size }) {
  return (
    <Link>
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
