import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(number);
  };

  const handleChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userGuess) {
      setMessage("Please enter a number! 🚫");
      return;
    }
    if (parseInt(userGuess) === randomNumber) {
      setMessage("🎉 Correct! You guessed it!");
    } else {
      setMessage(`❌ Wrong! Try again.`);
    }
  };

  const playAgain = () => {
    setUserGuess("");
    setMessage("");
    generateRandomNumber();
  };

  return (
    <div className="container">
      <h1>🎯 Number Guessing Game</h1>
      <p>Guess a number between 1 and 10</p>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="10"
          value={userGuess}
          onChange={handleChange}
          placeholder="Enter your guess"
        />
        <button type="submit">Guess</button>
      </form>

      {message && <h2 className="message">{message}</h2>}

      {message && (
        <button className="play-again-btn" onClick={playAgain}>
          Play Again 🔄
        </button>
      )}
    </div>
  );
};

export default App;
