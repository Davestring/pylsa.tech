import React from 'react';

import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

import Footer from 'components/modules/Footer';
import Header from 'components/modules/Header';

import ToastManager from 'containers/ToastManager';

import ISOContainer from './components/ISOContainer';
import RouteTree from './components/RouteTree';
import ScrollToTop from './components/ScrollToTop';
import Wrapper from './components/Wrapper';

const SOCIAL_MEDIA_ITEMS = [
  {
    name: 'facebook',
    icon: FaFacebookSquare,
    link: '#',
  },
  {
    name: 'whatsapp',
    icon: FaWhatsappSquare,
    link: process.env.REACT_APP_WHATSAPP_LINK,
  },
];

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Wrapper>
        <Header></Header>

        <ISOContainer as="main">
          <RouteTree></RouteTree>
        </ISOContainer>

        <Footer smItems={SOCIAL_MEDIA_ITEMS}></Footer>

        <ToastManager></ToastManager>
      </Wrapper>
    </>
  );
}

export default App;
