import React from 'react';
import { render } from 'react-dom';
import ClientApp from './js/ClientApp';

const renderApp = () => {
  render(React.createElement(ClientApp), document.querySelector('#app'));
};

renderApp();
