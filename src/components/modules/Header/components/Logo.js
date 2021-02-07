import PropTypes from 'prop-types';
import React from 'react';

import { Link as ReachLink } from 'react-router-dom';

import { Image, Link, useBreakpointValue } from '@chakra-ui/react';

import PylsaLogo from 'images/pylsa-logo.png';
import PylsaLogoSmall from 'images/pylsa-logo-small.png';

function Logo({ setSelected, width }) {
  const logo = useBreakpointValue({ base: PylsaLogoSmall, lg: PylsaLogo });
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
  setSelected: () => {},
  width: { base: 55, lg: 120 },
};

Logo.propTypes = {
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
