import React from 'react';
import { Route, Switch } from 'react-router-dom';
import initializeIcons from './Helpers';

// Pages
import NotFound from './NotFound';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import Projects from './Projects';
import WorkExperience from './WorkExperience';

// Styling
import '../scss/app.scss';

initializeIcons();

const App = () => (
  <div className="site-container">
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