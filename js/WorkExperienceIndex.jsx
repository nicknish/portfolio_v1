import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import WorkExperienceIndexCard from './WorkExperienceIndexCard';

const WorkExperienceIndex = ({ match, data }) => (
  <div>
    <section className="container hero">
      <h1 className="projects-title">
        Work
      </h1>
    </section>

    {data.map(experience => (
      <WorkExperienceIndexCard
        baseUrl={match.path}
        experience={experience}
        key={uuid()}
      />
    ))}
  </div>
);

WorkExperienceIndex.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  match: PropTypes.shape.isRequired
};

export default WorkExperienceIndex;
