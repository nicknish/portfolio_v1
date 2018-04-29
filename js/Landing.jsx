import React from 'react';
import { Link } from 'react-router-dom';
import LandingImage from '../public/images/landing_image.jpg';

const Landing = () => (
  <div className="landing">
    <section className="container hero">
      <h1 className="landing-title">
        Hi I
        {"'"}
        m Nick! I am a Frontend / Full Stack Developer living in Los Angeles, CA.
      </h1>
    </section>

    <section className="container--lg">
      <img src={LandingImage} alt="Me and my girlfriend!" />
    </section>

    <section className="container">
      <h3>About <span role="img" aria-label="Wave">👋</span></h3>
      <p>
        I
        {"'"}
        m a passionate developer with a deep love for creating great products and the craft of telling important stories. Because my love for frontend, I consider myself a frontend developer first, but I
        {"'"}
        m full-stack — JavaScript, React/Redux, Ruby, Rails, are all fair game.
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
        ve worked for Andreessen-Horowitz and YCombinator companies alike. The through-line is working with other talented, passionate, kind folk.
      </p>
      <nav className="landing-experienceLinks">
        <Link
          to="/work"
          className="landing-experienceLink btn btn-primary btn-sm"
        >
          See Work
        </Link>
        <Link
          to="/projects"
          className="landing-experienceLink btn btn-primary btn-sm"
        >
          See Projects
        </Link>
      </nav>
    </section>

    <section className="container">
      <h3>More</h3>
      <p>
        I do some
        {' '}
        <a href="https://nicknish.blog">writing</a>
        . I
        {"'"}
        m trying to build side projects daily. I really care about living a full life surrounded by people I care about.
      </p>
    </section>
  </div>
);

export default Landing;
