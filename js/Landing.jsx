import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <section className="container hero">
      <h1>
        Hi I
        {"'"}
        m Nick! I am a Front End / Full Stack Developer living in Los Angeles, CA.
      </h1>
    </section>

    <section className="container--lg">
      <img src="" alt="" />
    </section>

    <section className="container">
      <h3>About</h3>
      <p>
        I
        {"'"}
        m Nick, a passionate developer with a deep love for creating great products and the craft of telling important stories. Because my love for frontend, I consider myself a frontend developer first, but I’m wonderfully full-stack — JavaScript, React/Redux, Ruby, Rails, are all fair game.
      </p>
      <p>
        I get stoked over conversations of product, design, and brand building.
      </p>
      <p>
        I meditate, learn everyday without fail, and strive to carry joy in everything I do.
      </p>
    </section>

    <section className="container">
      <h3>Experience</h3>
      <p>
        I
        {"'"}
        ve worked for Andreessen-Horowitz and YCombinator companies alike. The only through-line is that I love to work with other passionate folk who care about being kind.
      </p>
      <Link to="/work">See Work</Link>
      <Link to="/projects">See Projects</Link>
    </section>

    <section className="container">
      <h3>More</h3>
      <p>
        I do some <a href="https://nicknish.blog">writing</a>.
      </p>
    </section>
  </div>
);

export default Landing;
