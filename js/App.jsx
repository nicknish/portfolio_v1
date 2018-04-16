import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import Work from './Work';
import Projects from './Projects';
import NotFound from './NotFound';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
