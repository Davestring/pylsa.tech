import PropTypes from 'prop-types';
import React from 'react';

import { Link as ReachLink } from 'react-router-dom';

import { Image, Link, useBreakpointValue } from '@chakra-ui/react';

import PylsaLogo from 'images/pylsa-logo.png';
import PylsaLogoSmall from 'images/pylsa-logo-small.png';

function Logo({ width }) {
  const logo = useBreakpointValue({ base: PylsaLogoSmall, lg: PylsaLogo });
  return (
    <Link as={ReachLink} to="/">
      <Image alt="pylsa-logo" src={logo} w={width}></Image>
    </Link>
  );
}

Logo.defaultProps = {
  width: { base: 55, lg: 160 },
};

Logo.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      base: PropTypes.number,
      lg: PropTypes.number,
    }),
  ]),
};

export default Logo;
