import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

const Show = ({
  backUrl,
  isProject,
  title,
  date,
  externalUrl,
  description,
  imagePreviewUrl,
  imagePreviewDescription
}) => {
  let externalLink;
  let descriptionWithLineBreaks;
  let imageSection;

  const backLinkText = `Back to ${isProject ? 'projects' : 'work experience'}`;
  const headerText = `${isProject ? 'Project' : 'Role'} Description`;

  if (externalUrl) {
    externalLink = (
      <span>
        {' -- '}
        <a href={externalUrl} className="show-externalLink">
          See it here
          {' '}
          <i className="show-externalLinkIcon fa fa-external-link-alt" />
        </a>
      </span>
    );
  }

  if (description) {
    descriptionWithLineBreaks = description
      .split('\n')
      .reduce(
        (arr, line) => arr.concat(line, <span key={uuid()}><br /><br /></span>),
        []
      );
  }

  if (imagePreviewUrl) {
    imageSection = (
      <div className="container">
        <figure className="show-imageContainer">
          <img
            src={imagePreviewUrl}
            alt={imagePreviewDescription}
            className="show-image"
          />
        </figure>
      </div>
    );
  }

  return (
    <div className="show-page">
      <section className="container hero">
        <Link to={backUrl} className="show-backLink">
          <i className="show-backLinkIcon fas fa-caret-left" />
          <span className="show-backLinkText">
            {backLinkText}
          </span>
        </Link>
        <h1 className="show-title">
          {title}
        </h1>
        <span className="show-subtitle">
          {date}{externalLink}
        </span>
      </section>

      {imageSection}

      <div className="container">
        <h3>{headerText}</h3>
        <p className="u-multiLineText">
          {descriptionWithLineBreaks}
        </p>
      </div>
    </div>
  );
};

Show.propTypes = {
  isProject: PropTypes.bool.isRequired,
  backUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imagePreviewUrl: PropTypes.string.isRequired,
  imagePreviewDescription: PropTypes.string.isRequired
};

export default Show;
