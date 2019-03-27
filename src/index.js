import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from './Store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
  document.getElementById('root'));

serviceWorker.register();
