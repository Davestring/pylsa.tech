import { Box } from '@chakra-ui/react';

import styled from '@emotion/styled';

const Wrapper = styled(Box)`
  background: radial-gradient(
    ellipse at bottom,
    ${({ theme }) => theme.colors.base} 0%,
    ${({ theme }) => theme.colors.dark} 100%
  );
  height: ${({ height }) => `calc(${height}px - 4rem)`};
  overflow: hidden;
  position: relative;
`;

export default Wrapper;
