// src/components/UserInput.js
import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const UserInput = ({ onInputChange }) => {
  const { score, setScore } = useAppContext();

  const handleChange = (event) => {
    const value = event.target.value;
    onInputChange(value);

    // Exemple de mise à jour du score
    setScore(prevScore => prevScore + 1); // Incrémente le score pour chaque caractère saisi
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Type here..."
    />
  );
};

export default UserInput;
