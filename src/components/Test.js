import React, { useState, useEffect } from 'react';

const Test = () => {
  const [text, setText] = useState('Type this sentence as quickly as possible.');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (userInput === text) {
      setEndTime(new Date());
      calculateScore();
    }
  }, [userInput]);

  const startTest = () => {
    setStartTime(new Date());
    setUserInput('');
    setEndTime(null);
  };

  const calculateScore = () => {
    if (startTime && endTime) {
      const timeTaken = (endTime - startTime) / 1000; // time in seconds
      const words = text.split(' ').length;
      const wpm = (words / timeTaken) * 60; // words per minute
      setScore(wpm.toFixed(2));
    }
  };

  return (
    <div>
      <h1>Type Speed Test</h1>
      <p>{text}</p>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        rows="5"
        cols="50"
        placeholder="Start typing here..."
      />
      <button onClick={startTest}>Start</button>
      {score && <div>Your score: {score} WPM</div>}
    </div>
  );
};

export default Test;
