import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';

import Projects from './Projects';
import Portfolio from './projects/Portfolio';
import Hacktoberfest from './projects/Hacktoberfest';
import Festies from './projects/Festies';

import WorkExperience from './WorkExperience';
import Bonsai from './work/Bonsai';
import Bloomnation from './work/Bloomnation';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/work" component={WorkExperience} />
          <Route exact path="/work/bonsai" component={Bonsai} />
          <Route exact path="/work/bloomnation" component={Bloomnation} />

          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/portfolio" component={Portfolio} />
          <Route
            exact
            path="/projects/hacktoberfest-2017"
            component={Hacktoberfest}
          />
          <Route exact path="/projects/festies" component={Festies} />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
