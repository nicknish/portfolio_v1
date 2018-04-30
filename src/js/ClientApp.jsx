import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import App from './App';

const ClientApp = () => (
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);

export default ClientApp;
