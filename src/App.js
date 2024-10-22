import React, { useState, useEffect } from 'react';
import './App.css';

function Timer() {
  // State for the timer
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Start the timer
  const startTimer = () => {
    if (isRunning) return; // Do nothing if timer is already running

    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    setIntervalId(id);
    setIsRunning(true);
  };

  // Pause the timer
  const pauseTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(intervalId);
    setSeconds(0);
    setIsRunning(false);
  };

  // Cleanup on component unmount (clear interval if the timer is running)
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div className="timer">
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
