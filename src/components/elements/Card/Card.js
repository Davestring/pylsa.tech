import React from 'react';

import Wrapper from './Wrapper';

function Card({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Card;
