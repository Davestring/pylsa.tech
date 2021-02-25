import { Box } from '@chakra-ui/react';

import styled from '@emotion/styled';

const Centered = styled(Box)`
  color: ${({ theme }) => theme.colors.white};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 0 ${({ theme }) => theme.space[4]};
  position: absolute;
  width: 100%;
`;

export default Centered;
