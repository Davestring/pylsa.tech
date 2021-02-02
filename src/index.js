import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import App from 'containers/App';

import theme from 'styles/theme';

import 'i18n';

const robotoFontObserver = new FontFaceObserver('Roboto', {});
const MOUNT_NODE = document.getElementById('root');

// When Roboto is loaded, add a font-family using Roboto to the body
robotoFontObserver.load().then(() => {
  document.body.classList.add('font--loaded');
});

const ThemeApp = ({ Component }) => (
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Component></Component>
      <CSSReset></CSSReset>
    </React.StrictMode>
  </ChakraProvider>
);

const render = (Component) => {
  ReactDOM.render(<ThemeApp Component={Component}></ThemeApp>, MOUNT_NODE);
};

render(App);
