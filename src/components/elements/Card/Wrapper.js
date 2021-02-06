import { Box } from '@chakra-ui/react';

import styled from '@emotion/styled';

const Wrapper = styled(Box)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: ${({ theme }) => theme.sizes['3xs']};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Wrapper;
