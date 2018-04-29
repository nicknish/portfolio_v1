import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="footer container">
    <nav className="footer-social">
      <ul className="footer-socialList">
        <li className="footer-socialListItem">
          <a
            href="https://github.com/nicknish"
            className="footer-socialListItemLink"
          >
            <FontAwesomeIcon icon={['fab', 'github-alt']} />
          </a>
        </li>
        <li className="footer-socialListItem">
          <a
            href="https://twitter.com/nickjnish"
            className="footer-socialListItemLink"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
