import React from 'react';

const Header = () => (
  <header className="header container">
    <a className="header-logo" href="/">
      NN
    </a>
    <nav className="header-nav">
      <ul className="header-navlinks">
        <li><a className="header-navlink" href="/work">Work</a></li>
        <li><a className="header-navlink" href="/projects">Projects</a></li>
        <li>
          <a className="header-navlink" href="https://nicknish.blog">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
