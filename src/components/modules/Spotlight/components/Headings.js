import styled from '@emotion/styled';

import FadeIn from 'components/animations/FadeIn';
import H1 from 'components/elements/H1';
import H2 from 'components/elements/H2';

export const Heading = styled(H1)`
  animation: ${FadeIn} 2s backwards 0.5s;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom: ${({ theme }) => theme.space[2]};
  text-align: center;
  text-transform: uppercase;
`;

export const SubHeading = styled(H2)`
  animation: ${FadeIn} 4s backwards 1s;
  font-weight: 300;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
`;
