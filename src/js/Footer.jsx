import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';

const SOCIAL_LINKS = {
  GITHUB: {
    url: process.env.GITHUB,
    icon: ['fab', 'github-alt']
  },
  LINKEDIN: {
    url: process.env.LINKEDIN,
    icon: ['fab', 'linkedin-in']
  },
  TWITTER: {
    url: process.env.TWITTER,
    icon: ['fab', 'twitter']
  }
};

const Footer = () => (
  <footer className="footer">
    <ContactForm />
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
