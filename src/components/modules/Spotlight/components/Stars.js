import styled from '@emotion/styled';

import Animation from 'components/animations/Star';

const Stars = styled('div')`
  animation: ${Animation} ${({ speed }) => `${speed}s`} linear infinite;
  background: transparent;
  box-shadow: ${({ shadow }) => shadow};
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  &:after {
    background: transparent;
    box-shadow: ${({ shadow }) => shadow};
    content: ' ';
    height: ${({ height }) => height};
    position: absolute;
    top: 2000px;
    width: ${({ width }) => width};
  }
`;

export default Stars;
