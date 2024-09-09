// TypeSpeedGame.js
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const TypeSpeedGame = () => {
  const [phrase, setPhrase] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(null);
  const intervalRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Parse the phraseId from query parameters
    const queryParams = new URLSearchParams(location.search);
    const phraseId = queryParams.get('phraseId');

    if (phraseId) {
      // Fetch the phrase based on the ID
      fetch(`http://localhost:8000/phrases/${phraseId}`)
        .then(response => response.json())
        .then(data => setPhrase(data))
        .catch(error => console.error('Error fetching phrase:', error));
    }
  }, [location.search]);

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsGameOver(true);
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [timeLeft, isGameOver]);

  const handleChange = (event) => {
    const { value } = event.target;
    setUserInput(value);
  };

  const handleValidate = () => {
    // Stop the timer
    clearInterval(intervalRef.current);

    // Calculate score
    calculateScore();

    // Save the typed phrase
    saveTypedPhrase();

    // End the game
    setIsGameOver(true);
  };

  const calculateScore = () => {
    if (!phrase) return;

    const phraseWords = phrase.text.trim().split(' ');
    const userWords = userInput.trim().split(' ');

    let correctCount = 0;
    let incorrectCount = 0;

    // Count correct and incorrect words
    phraseWords.forEach((word, index) => {
      if (userWords[index] === word) {
        correctCount += 1;
      } else {
        incorrectCount += 1;
      }
    });

    // Add any extra words in user input that are not in the phrase
    incorrectCount += Math.max(0, userWords.length - phraseWords.length);

    // Calculate accuracy
    const totalWords = phraseWords.length;
    const accuracyPercentage = totalWords > 0 ? ((correctCount / totalWords) * 100).toFixed(2) : 0;

    setScore({
      correctWords: correctCount,
      incorrectWords: incorrectCount,
      accuracy: accuracyPercentage
    });
  };

  const saveTypedPhrase = () => {
    if (!phrase) return;

    const typedPhrase = {
      phraseId: phrase.id,
      userInput,
      correctWords: score?.correctWords || 0,
      incorrectWords: score?.incorrectWords || 0,
      accuracy: score?.accuracy || 0,
    };

    fetch('http://localhost:8000/typed-phrases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(typedPhrase),
    })
    .then(response => response.json())
    .then(data => console.log('Saved typed phrase:', data))
    .catch(error => console.error('Error saving typed phrase:', error));
  };

  return (
    <div>
      <h1>Type Speed Game</h1>
      {phrase ? (
        <div>
          <h2>Phrase to Type:</h2>
          <p>{phrase.text}</p>
          <textarea
            value={userInput}
            onChange={handleChange}
            placeholder="Start typing here..."
            disabled={isGameOver}
          />
          <button onClick={handleValidate} disabled={isGameOver}>Validate</button>
          <div>
            <p>Time Left: {timeLeft} seconds</p>
            {isGameOver && !score && <p>Click "Validate" to see your score.</p>}
            {score && (
              <div>
                <h2>Partie Termine </h2>
                <p>Correct Words: {score.correctWords}</p>
                <p>Incorrect Words: {score.incorrectWords}</p>
                <p>Accuracy: {score.accuracy}%</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TypeSpeedGame;
