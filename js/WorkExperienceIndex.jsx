import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import IndexCard from './IndexCard';

const WorkExperienceIndex = ({ match, data }) => (
  <div>
    <section className="container hero">
      <h1 className="projects-title">
        Work
      </h1>
    </section>

    {data.map(experience => (
      <IndexCard
        baseUrl={match.path}
        slug={experience.slug}
        title={experience.title}
        imagePreviewUrl={experience.image_preview_url}
        imagePreviewDescription={experience.image_preview_description}
        descriptionExcerpt={experience.description_excerpt}
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
