import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Analytics from './Analytics';

// Pages
import NotFound from './NotFound';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import Projects from './Projects';
import WorkExperience from './WorkExperience';

// Styling
import '../scss/app.scss';

const App = () => (
  <div className="site-container">
    <Route component={Analytics} /* Analytics workaround for React-Router */ />
    <Header />
    <main className="site-content">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/work" component={WorkExperience} />
        <Route path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
