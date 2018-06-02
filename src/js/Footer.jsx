import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SOCIAL_LINKS = {
  GITHUB: {
    url: 'https://github.com/nicknish',
    icon: ['fab', 'github-alt']
  },
  LINKEDIN: {
    url: 'https://linkedin.com/in/nicknish',
    icon: ['fab', 'linkedin-in']
  },
  TWITTER: {
    url: 'https://twitter.com/nickjnish',
    icon: ['fab', 'twitter']
  }
};

const Footer = () => (
  <footer className="footer container">
    <nav className="footer-social">
      <ul className="footer-socialList">
        {Object.keys(SOCIAL_LINKS).map(key => (
          <li className="footer-socialListItem" key={key}>
            <a
              href={SOCIAL_LINKS[key].url}
              className="footer-socialListItemLink"
            >
              <FontAwesomeIcon icon={SOCIAL_LINKS[key].icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default Footer;
