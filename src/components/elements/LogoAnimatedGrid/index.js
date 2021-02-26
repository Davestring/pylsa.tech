import PropTypes from 'prop-types';
import React from 'react';

import { Image, SimpleGrid } from '@chakra-ui/react';

import { css } from '@emotion/react';

import FadeIn from 'components/animations/FadeIn';

function LogoAnimatedGrid({ columns, height, logos, spacing, ...rest }) {
  return (
    <SimpleGrid {...{ columns, spacing, ...rest }}>
      {logos.map(({ name, logo }, idx) => (
        <Image
          key={`logo-animated-${name}`}
          alt={`${name}-logo`}
          src={logo}
          css={css`
            animation: ${FadeIn} 1s backwards ${idx / (logos.length + 1) / 0.3}s;
            height: ${height} !important;
          `}
        ></Image>
      ))}
    </SimpleGrid>
  );
}

LogoAnimatedGrid.defaultProps = {
  columns: 0,
  height: '3rem',
  logos: [],
};

LogoAnimatedGrid.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  height: PropTypes.string,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.elementType,
    }),
  ),
  spacing: PropTypes.number,
};

export default LogoAnimatedGrid;
