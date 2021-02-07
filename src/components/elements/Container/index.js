import React from 'react';

import { Box } from '@chakra-ui/react';

function Container({ children, isFluid, ...rest }) {
  return (
    <Box
      {...{
        marginX: 'auto',
        maxWidth: '1200px',
        paddingX: 4,
        position: 'relative',
        width: '100%',
        ...(isFluid && { maxWidth: '100%', paddingX: 0 }),
        ...rest,
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
