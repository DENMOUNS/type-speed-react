import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPhrase = () => {
  const [phrase, setPhrase] = useState('');
  const navigate = useNavigate(); // Hook pour la redirection

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/phrases', { // Assure-toi que l'URL correspond à ton API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: phrase }), // Assure-toi que le nom de la propriété correspond à celui attendu par ton backend
    })
      .then(response => response.json())
      .then(data => {
        console.log('Phrase enregistrée:', data);
        setPhrase(''); // Réinitialiser le champ de saisie
        navigate('/game'); // Redirection vers la page de jeu après l'enregistrement
      })
      .catch((error) => {
        console.error('Erreur lors de l\'enregistrement de la phrase:', error);
      });
  };

  return (
    <div>
      <h2>Ajouter une Phrase</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          placeholder="Tapez la phrase ici..."
          required
        />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default AddPhrase;
