import React from 'react';
import './welcome.css';

interface IWelcome {
  playerName: string;
  onPlayerNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStartGame: () => void;
}

const Welcome = (props: IWelcome) => {
  const { playerName, onPlayerNameChange, onStartGame } = props;

  return (
    <section>
      <header>
        <div className="title">The Mole</div>
      </header>
      <form className="player-form">
        <label
          className="player-name"
          htmlFor="firstName"
        >
          Player Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={playerName}
            onChange={(e) => onPlayerNameChange(e)}
          />
        </label>
        <button
          className={playerName.length < 3 ? 'btn' : 'btn btn-red'}
          disabled={playerName === ''}
          onClick={onStartGame}
        >
          Start
        </button>
      </form>
    </section>
  );
};

export default Welcome;
