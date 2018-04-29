import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import uuid from 'uuid';

const ProjectsShow = ({ backUrl, project }) => {
  let externalLink;
  let description;
  let imageSection;

  if (project.external_url) {
    externalLink = (
      <span> -- <a href={project.external_url}>See it here</a></span>
    );
  }

  if (project.description) {
    description = project.description
      .split('\n')
      .reduce(
        (arr, line) => arr.concat(line, <span key={uuid()}><br /><br /></span>),
        []
      );
  }

  if (project.image_preview_url) {
    imageSection = (
      <div className="container">
        <figure>
          <img
            src={project.image_preview_url}
            alt={project.image_preview_description}
          />
        </figure>
      </div>
    );
  }

  return (
    <div>
      <section className="container hero">
        <Link to={backUrl}>
          <FontAwesomeIcon icon={['fas', 'caret-left']} />
          Back to projects
        </Link>
        <h1>{project.title}</h1>
        {project.date}{externalLink}
      </section>

      {imageSection}

      <div className="container">
        <h3>Project Description</h3>
        <p className="u-multiLineText">{description}</p>
      </div>
    </div>
  );
};

ProjectsShow.propTypes = {
  backUrl: PropTypes.string.isRequired,
  project: PropTypes.shape.isRequired
};

export default ProjectsShow;
