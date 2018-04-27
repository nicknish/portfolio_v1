import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import Projects from './Projects';
import WorkExperience from './WorkExperience';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/work" component={WorkExperience} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
