"use client";

import { useState } from "react";
import { players } from "@/data/players";
import Flashcard from "../Flashcard";
import Progress from "../Progress";

const Game = () => {
  const [index, setIndex] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const isFinished = index >= players.length;

  const handleRestart = () => {
    setIndex(0);
    setIsShown(false);
    setHasStarted(true);
  };

  const handleNext = () => {
    setIndex(index + 1);
    setIsShown(false);
  };

  return (
    <div>
      {!hasStarted && (
        <button onClick={() => setHasStarted(true)}>Start</button>
      )}

      {isFinished && <button onClick={handleRestart}>Restart</button>}
      {hasStarted && !isFinished && (
        <>
          <Progress current={index} players={players} />
          <Flashcard
            player={players[index]}
            isShown={isShown}
            onReveal={() => setIsShown(true)}
          />
          {isShown && <button onClick={handleNext}>Next</button>}
        </>
      )}
    </div>
  );
};

export default Game;
