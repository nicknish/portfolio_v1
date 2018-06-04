import React from 'react';
import ContactForm from './ContactForm';

const SOCIAL_LINKS = {
  GITHUB: {
    url: process.env.GITHUB,
    icon: 'fab fa-github-alt'
  },
  LINKEDIN: {
    url: process.env.LINKEDIN,
    icon: 'fab fa-linkedin-in'
  },
  TWITTER: {
    url: process.env.TWITTER,
    icon: 'fab fa-twitter'
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
              <i className={SOCIAL_LINKS[key].icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default Footer;
