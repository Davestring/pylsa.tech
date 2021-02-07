import React from 'react';

import { Box } from '@chakra-ui/react';

import styled from '@emotion/styled';

import Footer from 'components/modules/Footer';
import Header from 'components/modules/Header';

import RouteTree from './RouteTree';

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ISOContainer = styled(Box)`
  height: auto;
  margin-top: ${({ theme }) => theme.space[16]};
  position: relative;
`;

function App() {
  return (
    <Wrapper>
      <Header></Header>

      <ISOContainer as="main">
        <RouteTree></RouteTree>
      </ISOContainer>

      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
