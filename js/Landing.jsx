import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <section className="container">
      <h1>
        Hi I'm Nick! I am a Front End / Full Stack Developer living in Los Angeles, CA.
      </h1>
    </section>

    <section className="container--lg">
      <img src="" alt="" />
    </section>

    <section className="container">
      <h3>About</h3>
      <p>You, scary? Ha ha ha</p>
    </section>

    <section className="container">
      <h3>Experience</h3>
      <p>Stuff about Bonsai, etc. etc.</p>
      <Link to="/work">See Work</Link>
      <Link to="/projects">See Projects</Link>
    </section>

    <section className="container">
      <h3>More</h3>
      <p>
        Other than work, I do some <a href="https://nicknish.blog">writing</a>.
      </p>
    </section>
  </div>
);

export default Landing;
