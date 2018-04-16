import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header container">
    <Link to="/" className="header-logo">
      NN
    </Link>
    <nav className="header-nav">
      <ul className="header-navlinks">
        <li>
          <Link to="/work" className="header-navlink">Work</Link>
        </li>
        <li>
          <Link to="/projects" className="header-navlink">Projects</Link>
        </li>
        <li>
          <a className="header-navlink" href="https://nicknish.blog">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
