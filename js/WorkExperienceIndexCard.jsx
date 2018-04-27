import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WorkExperienceIndexCard = ({ baseUrl, experience }) => (
  <section className="container">
    <Link
      to={`${baseUrl}/${experience.slug}`}
      className="experiences-item-img-container"
    >
      <img
        src={experience.image_preview_url}
        className="experiences-item-img"
        alt={experience.image_preview_description}
      />
    </Link>

    <h3 className="experiences-item-title">
      <Link
        to={`${baseUrl}/${experience.slug}`}
        className="experiences-item-title-link"
      >
        {experience.title}
      </Link>
    </h3>

    <p className="experiences-item-description">
      {experience.description_excerpt}
    </p>

    <Link to={`${baseUrl}/${experience.slug}`} className="btn">
      Read More
    </Link>
  </section>
);

WorkExperienceIndexCard.propTypes = {
  experience: PropTypes.shape.isRequired,
  baseUrl: PropTypes.string.isRequired
};

export default WorkExperienceIndexCard;
