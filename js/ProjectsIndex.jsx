import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import IndexCard from './IndexCard';

const ProjectsIndex = ({ match, data }) => (
  <div className="index">
    <section className="container hero">
      <h1 className="index-title">Projects</h1>
    </section>

    {data.map(project => (
      <IndexCard
        baseUrl={match.path}
        slug={project.slug}
        title={project.title}
        imagePreviewUrl={project.image_preview_url}
        imagePreviewDescription={project.image_preview_description}
        descriptionExcerpt={project.description_excerpt}
        date={project.date}
        key={uuid()}
      />
    ))}
  </div>
);

ProjectsIndex.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  match: PropTypes.shape.isRequired
};

export default ProjectsIndex;
