import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="container">
    <nav>
      <ul>
        <li>
          <a href="https://github.com/nicknish">
            <FontAwesomeIcon icon={['fab', 'github-alt']} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/nickjnish">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
