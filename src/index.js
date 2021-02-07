import FontFaceObserver from 'fontfaceobserver';
import React from 'react';
import ReactDOM from 'react-dom';

import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import App from 'containers/App';

import configureAppStore from './store';
import history from 'utils/history';
import theme from 'styles/theme';

import 'i18n';

const robotoFontObserver = new FontFaceObserver('Roboto', {});
const store = configureAppStore({}, history);
const MOUNT_NODE = document.getElementById('root');

// When Roboto is loaded, add a font-family using Roboto to the body
robotoFontObserver.load().then(() => {
  document.body.classList.add('font--loaded');
});

const ThemeApp = ({ Component }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <Component></Component>
          <CSSReset></CSSReset>
        </React.StrictMode>
      </ChakraProvider>
    </ConnectedRouter>
  </Provider>
);

const render = (Component) => {
  ReactDOM.render(<ThemeApp Component={Component}></ThemeApp>, MOUNT_NODE);
};

render(App);
