// src/components/Home.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // NE PAS faire cela ici

const Home = () => {
  return (
    <Router>
      {/* CECI CAUSERA L'ERREUR */}
      <div>
        <h1>Home Page</h1>
      </div>
    </Router>
  );
};

export default Home;
