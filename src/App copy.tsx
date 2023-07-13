import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameBeingPlayed, setIsGameBeingPlayed] = useState(true);

  const gameLogic = () => {
    setState((prev) => prev + 1);
  };

  useEffect(() => {
    if (isGameFinished) {
      if (state >= 20) {
        setGameWon(true);
      } else {
        setGameWon(false);
      }
    }
  }, [isGameFinished, state]);

  const handleStartGame = () => {
    setIsGameStarted(true);
    setTimeout(() => {
      setIsGameFinished(true);
    }, 5000);
  };

  const displayGameWon = () => {
    if (isGameFinished) {
      if (gameWon) {
        return <h1>YOU WON THE GAME, CONGRATULATIONS!</h1>;
      } else {
        return <h1>YOU LOST, TRY AGAIN!</h1>;
      }
    }
  };

  return (
    <div>
      <h1>CLICKING GAME</h1>
      {!isGameStarted && (
        <button onClick={handleStartGame}>CLICK ME TO START THE GAME</button>
      )}
      {isGameStarted && !isGameFinished && (
        <div>
          <button onClick={gameLogic}>CLICK ME</button>
          <br />
          <br />
          <br />
          <br />
          CLICKED TIMES: {state}
        </div>
      )}
      <div>{displayGameWon()}</div>
    </div>
  );
}

export default App;
