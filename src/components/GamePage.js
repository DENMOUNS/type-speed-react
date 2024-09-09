import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
  const [phrases, setPhrases] = useState([]);
  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch phrases from backend
    fetch('http://localhost:8000/phrases')  // Assurez-vous que l'URL est correcte
      .then(response => response.json())
      .then(data => setPhrases(data))
      .catch(error => console.error('Error fetching phrases:', error));
  }, []);

  const handlePhraseSelect = (phrase) => {
    setSelectedPhrase(phrase);
    // Redirect to the type speed game page
    navigate(`/type-speed?phraseId=${phrase.id}`);
  };

  return (
    <div>
      <h1>Select a Phrase to Type</h1>
      <ul>
        {phrases.map(phrase => (
          <li key={phrase.id}>
            <button onClick={() => handlePhraseSelect(phrase)}>
              {phrase.text}
            </button>
          </li>
        ))}
      </ul>
      {selectedPhrase && (
        <div>
          <h2>Selected Phrase: {selectedPhrase.text}</h2>
        </div>
      )}
    </div>
  );
};

export default GamePage;
