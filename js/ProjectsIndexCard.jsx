import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectsIndexCard = ({ baseUrl, project }) => (
  <section className="container">
    <Link
      to={`${baseUrl}/${project.slug}`}
      className="projects-item-img-container"
    >
      <img
        src={project.image_preview_url}
        className="projects-item-img"
        alt={project.image_preview_description}
      />
    </Link>

    <h3 className="projects-item-title">
      <Link
        to={`${baseUrl}/${project.slug}`}
        className="projects-item-title-link"
      >
        {project.title}
      </Link>
    </h3>

    <p className="projects-item-description">
      {project.description_excerpt}
    </p>

    <Link to={`${baseUrl}/${project.slug}`} className="btn">
      Read More
    </Link>
  </section>
);

ProjectsIndexCard.propTypes = {
  project: PropTypes.shape.isRequired,
  baseUrl: PropTypes.string.isRequired
};

export default ProjectsIndexCard;
