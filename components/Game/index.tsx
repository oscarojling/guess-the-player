"use client";

import { useState } from "react";
import { players } from "@/data/players";
import Flashcard from "../Flashcard";
import GameProgress from "../GameProgress";
import SelectPlayer from "../SelectPlayer";

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

  const handlePrevious = () => {
    setIndex(index - 1);
    setIsShown(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {!hasStarted && (
        <button
          className="inline-flex items-center justify-center gap-1.5 text-sm rounded-full bg-[#c67139] text-[#f5ead8] px-4 py-2 hover:bg-[#b2622d] active:bg-[#8c491a]"
          onClick={() => setHasStarted(true)}
        >
          Start
        </button>
      )}

      {isFinished && (
        <div>
          {players.map((player) => (
            <SelectPlayer key={player.name} player={player} />
          ))}
          <button
            className="inline-flex items-center justify-center gap-1.5 text-sm rounded-full"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      )}
      {hasStarted && !isFinished && (
        <>
          <GameProgress current={index} players={players} />
          <Flashcard
            player={players[index]}
            isShown={isShown}
            onReveal={() => setIsShown(true)}
          />
          {index > 0 && (
            <button
              className="inline-flex items-center justify-center gap-1.5 text-sm rounded-full"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {isShown && (
            <button
              className="inline-flex items-center justify-center gap-1.5 text-sm rounded-full"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Game;
