import React, { useState, useEffect } from 'react';

const Timer = ({ start, onTimeUp }) => {
  const [time, setTime] = useState(start);

  useEffect(() => {
    if (time === 0) return;
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [time, onTimeUp]);

  return <div>Time left: {time}s</div>;
};

export default Timer;
