import React, { FormEvent, useState } from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import ThankYou from './components/thank-you/ThankYou';

function App() {
  const totalQuestions = 10;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(null);
  const [gameAbandoned, setGameAbandoned] = useState(null);

  const [playerName, setPlayerName] = useState('');

  const handlePlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };
  
  if (!gameStarted) {
    return (
      <Welcome
        playerName={playerName}
        onPlayerNameChange={handlePlayerNameChange}
        onStartGame={handleStartGame}
      />
    );
  }

  if (gameEnded) {
    return <ThankYou />;
  }

  return <main className="App">Start</main>;
}

export default App;
