import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ score }) => {
  return (
    <div>
      <h1>Test Completed</h1>
      <p>Your typing speed: {score} WPM</p>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default Results;
