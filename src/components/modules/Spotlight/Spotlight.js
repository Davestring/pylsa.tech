import PropTypes from 'prop-types';
import React from 'react';

import { use100vh } from 'react-div-100vh';

import { Heading, SubHeading } from './components/Headings';

import Centered from './components/Centered';
import Stars from './components/Stars';
import Wrapper from './components/Wrapper';

function Spotlight({ title, subtitle, stars, ...rest }) {
  const height = use100vh();
  return (
    <Wrapper height={height} {...rest}>
      {stars.map((props) => (
        <Stars key={`stars-type-${props.id}`} {...props}></Stars>
      ))}
      <Centered>
        {title && (
          <Heading fontSize={{ base: '6xl', sm: '6xl', md: '7xl', lg: '8xl' }}>
            {title}
          </Heading>
        )}
        {subtitle && (
          <SubHeading fontSize={{ base: 'xl', sm: 'xl', md: '2xl', lg: '3xl' }}>
            {subtitle}
          </SubHeading>
        )}
      </Centered>
    </Wrapper>
  );
}

Spotlight.defaultProps = {
  title: '',
  subtitle: '',
  stars: [],
};

Spotlight.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  stars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.string,
      shadow: PropTypes.elementType,
      speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      width: PropTypes.string,
    }),
  ),
};
export default Spotlight;
