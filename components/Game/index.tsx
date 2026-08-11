"use client";

import { useState } from "react";
import { players } from "@/data/players";
import Flashcard from "../Flashcard";
import Progress from "../Progress";

const Game = () => {
  const [currentindex, setCurrentIndex] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const isFinished = currentindex >= players.length;

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsShown(false);
    setHasStarted(true);
  };

  const handleNext = () => {
    setCurrentIndex(currentindex + 1);
    setIsShown(false);
  };

  if (!hasStarted) {
    return (
      <div>
        <button onClick={() => setHasStarted(true)}>Start</button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div>
        <p>That's all of the players</p>
        <button onClick={handleRestart}>Restart</button>
      </div>
    );
  }

  return (
    <div>
      <Progress current={currentindex} players={players} />
      <Flashcard
        player={players[currentindex]}
        isShown={isShown}
        onReveal={() => setIsShown(true)}
      />
      {isShown && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default Game;
