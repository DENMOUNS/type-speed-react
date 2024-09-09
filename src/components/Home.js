import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Type Speed Test</h1>
      <p>Ready to test your typing speed?</p>
      <Link to="/test">
        <button>Start Test</button>
      </Link>
    </div>
  );
};

export default Home;
