import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowHeader = ({ title, url, type, date }) => (
  <section className="container hero">
    <h1 className="project-title">
      {title}
    </h1>

    <span className="project-date">
      {date}
    </span>

    <Link to={url} className="project-back">
      Back to {type}
    </Link>
  </section>
);

ShowHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default ShowHeader;
