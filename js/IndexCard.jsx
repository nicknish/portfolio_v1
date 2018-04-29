import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const IndexCard = ({
  baseUrl,
  imagePreviewUrl,
  slug,
  imagePreviewDescription,
  title,
  descriptionExcerpt
}) => {
  let imageSection;
  const showUrl = `${baseUrl}/${slug}`;

  if (imagePreviewUrl) {
    imageSection = (
      <Link to={showUrl} className="index-card-img-container">
        <img
          src={imagePreviewUrl}
          className="index-card-img"
          alt={imagePreviewDescription}
        />
      </Link>
    );
  }

  return (
    <section className="container index-card">
      {imageSection}

      <h3 className="index-card-title">
        <Link to={showUrl} className="index-card-title-link">
          {title}
        </Link>
      </h3>

      <p className="index-card-description">
        {descriptionExcerpt}
      </p>

      <Link to={showUrl} className="btn btn-primary btn-sm">
        Read More
      </Link>
    </section>
  );
};

IndexCard.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePreviewUrl: PropTypes.string.isRequired,
  imagePreviewDescription: PropTypes.string.isRequired,
  descriptionExcerpt: PropTypes.string.isRequired
};

export default IndexCard;
