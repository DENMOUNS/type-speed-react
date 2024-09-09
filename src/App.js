import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddPhrase from './components/AddPhrase';
import GamePage from './components/GamePage';
import TypeSpeedGame from './components/TypeSpeedGame';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AddPhrase />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/type-speed" element={<TypeSpeedGame />} />
    </Routes>
  );
};

export default App;
