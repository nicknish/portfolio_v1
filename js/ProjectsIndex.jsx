import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import ProjectsIndexCard from './ProjectsIndexCard';

const ProjectsIndex = ({ match, data }) => (
  <div>
    <section className="container hero">
      <h1>Projects</h1>
    </section>

    {data.map(project => (
      <ProjectsIndexCard baseUrl={match.path} project={project} key={uuid()} />
    ))}
  </div>
);

ProjectsIndex.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  match: PropTypes.shape.isRequired
};

export default ProjectsIndex;
