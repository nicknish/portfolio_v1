import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Icons
import fontawesome from '@fortawesome/fontawesome';
import faGithubAlt from '@fortawesome/fontawesome-free-brands/faGithubAlt';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';

// Pages
import NotFound from './NotFound';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import Projects from './Projects';
import WorkExperience from './WorkExperience';

// Styling
import '../scss/app.scss';

// Initialize icon library to enable treeshaking
fontawesome.library.add(faGithubAlt, faTwitter);

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
