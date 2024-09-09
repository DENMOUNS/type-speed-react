// src/components/ScoreBoard.js
import React from 'react';
import { useAppContext } from '../context/AppContext';

const ScoreBoard = () => {
  // On récupère le score depuis le contexte d'application
  const { score } = useAppContext();

  // On affiche le score à l'utilisateur
  return (
    <div>
      <h2>Score Board</h2>
      <p>Your current score: {score}</p>
    </div>
  );
};

export default ScoreBoard;
