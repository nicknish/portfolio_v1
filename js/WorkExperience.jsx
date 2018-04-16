import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WorkExperience = ({ match }) => (
  <div>
    <section className="container hero">
      <h1>
        Work
      </h1>
    </section>

    <section className="container">
      <Link to={`${match.path}/bonsai`}>
        <img src="" alt="Bonsai company logo" />
      </Link>
      <h3><Link to={`${match.path}/bonsai`}>Bonsai</Link></h3>
      <p>Some text about Bonsai</p>
      <Link to={`${match.path}/bonsai`} className="btn">
        Read More
      </Link>
    </section>

    <section className="container">
      <Link to={`${match.path}/bloomnation`}>
        <img src="" alt="BloomNation company logo" />
      </Link>
      <h3><Link to={`${match.path}/bloomnation`}>BloomNation</Link></h3>
      <p>Some text about BloomNation</p>
      <Link to={`${match.path}/bloomnation`} className="btn">
        Read More
      </Link>
    </section>
  </div>
);

WorkExperience.propTypes = {
  match: PropTypes.shape.isRequired
};

export default WorkExperience;
