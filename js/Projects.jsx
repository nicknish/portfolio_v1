import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Projects = ({ match }) => (
  <div>
    <section className="container hero">
      <h1>Projects</h1>
    </section>

    <section className="container">
      <Link to={`${match.path}/portfolio`}>
        <img src="" alt="This website's logo" />
      </Link>
      <h3>
        <Link to={`${match.path}/portfolio`}>This website</Link>
      </h3>
      <p>
        It seems like cheating to mention this website, but it is constantly in flux. I use this as a testing ground for new, interesting technologies. Read on to see how I built this in React.js and React Router.
      </p>
      <Link to={`${match.path}/portfolio`} className="btn">Read more</Link>
    </section>

    <section className="container">
      <Link to={`${match.path}/hacktoberfest-2017`}>
        <img src="" alt="Digital Ocean Hacktoberfest 2017 logo" />
      </Link>
      <h3>
        <Link to={`${match.path}/hacktoberfest-2017`}>
          Santander: Digital Ocean Hacktoberfest 2017
        </Link>
      </h3>
      <p>Some text about Santander</p>
      <Link to={`${match.path}/hacktoberfest-2017`} className="btn">
        Read more
      </Link>
    </section>

    <section className="container">
      <Link to={`${match.path}/festies`}>
        <img src="" alt="Festies project logo" />
      </Link>
      <h3><Link to={`${match.path}/festies`}>Festies</Link></h3>
      <p>Some text about Festies</p>
      <Link to={`${match.path}/festies`} className="btn">
        Read more
      </Link>
    </section>
  </div>
);

Projects.propTypes = {
  match: PropTypes.shape.isRequired
};

export default Projects;
