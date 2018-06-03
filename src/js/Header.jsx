import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header container">
    <Link to="/" className="header-logo">
      NN
    </Link>
    <nav className="header-nav">
      <ul className="header-navlinks">
        <li>
          <NavLink to="/work" className="header-navlink" activeClass="active">
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="header-navlink"
            activeClass="active"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <a className="header-navlink" href={process.env.BLOG_URL}>Blog</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
