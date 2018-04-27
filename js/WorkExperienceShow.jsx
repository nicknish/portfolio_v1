import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WorkExperienceShow = ({ backUrl, experience }) => {
  let externalLink;
  let description;
  let imageSection;

  if (experience.external_url) {
    externalLink = (
      <span> -- <a href={experience.external_url}>See it here</a></span>
    );
  }

  if (experience.description) {
    description = experience.description
      .split('\n')
      .reduce((arr, line) => arr.concat(line, <br />, <br />), []);
  }

  if (experience.image_preview_url) {
    imageSection = (
      <div className="container">
        <figure>
          <img
            src={experience.image_preview_url}
            alt={experience.image_preview_description}
          />
        </figure>
      </div>
    );
  }

  return (
    <div>
      <section className="container hero">
        <Link to={backUrl}>Back to Work</Link>
        <h1>{experience.title}</h1>
        {experience.date}{externalLink}
      </section>

      {imageSection}

      <div className="container">
        <h3>Role Description</h3>
        <p className="u-multiLineText">{description}</p>
      </div>
    </div>
  );
};

WorkExperienceShow.propTypes = {
  backUrl: PropTypes.string.isRequired,
  experience: PropTypes.shape.isRequired
};

export default WorkExperienceShow;
