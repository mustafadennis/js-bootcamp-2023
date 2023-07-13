import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [seconds, setSeconds] = useState(5);

  const gameLogic = () => {
    setState((prev) => prev + 1);
  };

  useEffect(() => {
    if (state >= 20) {
      setIsGameFinished(true);
    }

    if (isGameFinished) {
      if (state >= 20) {
        setGameWon(true);
      } else {
        setGameWon(false);
      }
    }
  }, [isGameFinished, state]);

  useEffect(() => {
    if (isGameStarted) {
      const timer = setTimeout(() => {
        setSeconds((state) => state - 1);
      }, 1000);

      if (seconds === 0) {
        clearInterval(timer);
      }
    }
  }, [seconds, isGameStarted]);

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

  const mainGameAction = () => {
    if (isGameStarted && !isGameFinished) {
      return (
        <div>
          <button onClick={gameLogic}>CLICK ME</button>
          <br />
          <br />
          <br />
          <br />
          CLICKED TIMES: {state}
          <h2>Remaining seconds: {seconds}</h2>
        </div>
      );
    }
  };

  const preGameActionElement = () => {
    if (!isGameStarted) {
      return (
        <button onClick={handleStartGame}>CLICK ME TO START THE GAME</button>
      );
    }
  };

  return (
    <div>
      <h1>CLICKING GAME</h1>
      {preGameActionElement()}
      {mainGameAction()}
      {displayGameWon()}
    </div>
  );
}

export default App;
