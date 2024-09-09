import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Voici la page "About".</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default About;
