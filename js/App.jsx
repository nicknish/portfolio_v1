import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';

const App = () => (
  <div>
    <Header />
    <Landing />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
