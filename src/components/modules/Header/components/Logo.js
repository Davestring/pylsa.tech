import PropTypes from 'prop-types';
import React from 'react';

import { Link as ReachLink } from 'react-router-dom';

import { Image, Link, useBreakpointValue } from '@chakra-ui/react';

import PylsaLogo from 'images/pylsa-logo.png';
import PylsaLogoBg from 'images/pylsa-logo-bg.png';
import PylsaLogoSmall from 'images/pylsa-logo-small.png';

function Logo({ isTransparent, setSelected, width }) {
  const logo = useBreakpointValue({
    base: PylsaLogoSmall,
    lg: isTransparent ? PylsaLogoBg : PylsaLogo,
  });
  return (
    <Link
      as={ReachLink}
      to="/"
      onClick={() => setSelected(null)}
      _focus={{ outline: 'none' }}
    >
      <Image alt="pylsa-logo" src={logo} w={width}></Image>
    </Link>
  );
}

Logo.defaultProps = {
  isTransparent: false,
  setSelected: () => {},
  width: { base: 55, lg: 120 },
};

Logo.propTypes = {
  isTransparent: PropTypes.bool,
  setSelected: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      base: PropTypes.number,
      lg: PropTypes.number,
    }),
  ]),
};

export default Logo;
