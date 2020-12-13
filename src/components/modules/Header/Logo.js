import React from 'react';
import PropTypes from 'prop-types';

import { Link, Image } from '@chakra-ui/react';

function Logo({ size }) {
  return (
    <Link>
      <Image
        src="https://fakeimg.pl/160x40/"
        alt="marvel-logo"
        {...size}
      ></Image>
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
