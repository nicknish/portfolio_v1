import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectsShow = ({ backUrl, project }) => {
  let externalLink;
  let description;

  if (project.external_url) {
    externalLink = (
      <span> -- <a href={project.external_url}>See it here</a></span>
    );
  }

  if (project.description) {
    description = project.description
      .split('\n')
      .reduce((arr, line) => arr.concat(line, <br />, <br />), []);
  }

  return (
    <div>
      <section className="container hero">
        <Link to={backUrl}>Back to projects</Link>
        <h1>{project.title}</h1>
        {project.date}{externalLink}
      </section>

      <div className="container" />

      <div className="container">
        <h3>Project Description</h3>
        <p className="u-multiLineText">{description}</p>
      </div>

      <div className="container">
        <pre><code>{JSON.stringify(project)}</code></pre>
      </div>
    </div>
  );
};

ProjectsShow.propTypes = {
  backUrl: PropTypes.string.isRequired,
  project: PropTypes.shape.isRequired
};

export default ProjectsShow;
