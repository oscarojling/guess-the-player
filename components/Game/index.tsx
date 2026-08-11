"use client";

import { useState } from "react";
import { players } from "@/data/players";
import Flashcard from "../Flashcard";

const Game = () => {
  const [currentindex, setCurrentIndex] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentIndex(currentindex + 1);
    setIsShown(false);
  };
  return (
    <div>
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
