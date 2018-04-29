import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const IndexCard = ({
  baseUrl,
  slug,
  title,
  date,
  imagePreviewUrl,
  imagePreviewDescription,
  descriptionExcerpt
}) => {
  let subtitle;
  let imageSection;

  const showUrl = `${baseUrl}/${slug}`;

  if (date) {
    subtitle = <span className="indexCard-headerSubtitle">{date}</span>;
  }

  if (imagePreviewUrl) {
    imageSection = (
      <Link to={showUrl} className="indexCard-img-container">
        <img
          src={imagePreviewUrl}
          className="indexCard-img"
          alt={imagePreviewDescription}
        />
      </Link>
    );
  }

  return (
    <section className="indexCard container">
      {imageSection}

      <div className="indexCard-header">
        <h3 className="indexCard-headerTitle">
          <Link to={showUrl} className="indexCard-headerTitleLink">
            {title}
          </Link>
        </h3>
        {subtitle}
      </div>

      <p className="indexCard-description">
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
  date: PropTypes.string,
  imagePreviewUrl: PropTypes.string.isRequired,
  imagePreviewDescription: PropTypes.string.isRequired,
  descriptionExcerpt: PropTypes.string.isRequired
};

IndexCard.defaultProps = {
  date: ''
};

export default IndexCard;
