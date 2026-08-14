"use client";

import { useState } from "react";
import { players } from "@/data/players";
import Flashcard from "../Flashcard";
import GameProgress from "../GameProgress";
import SelectPlayer from "../SelectPlayer";

const Game = () => {
  const [index, setIndex] = useState<number>(23);
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
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      {!hasStarted && (
        <button
          className="cursor-pointer inline-flex items-center justify-center gap-1.5 text-sm rounded-full bg-[#006AA7] text-white px-4 py-2 hover:bg-[#00558a] active:bg-[#00436e]"
          onClick={() => setHasStarted(true)}
        >
          Start
        </button>
      )}

      {isFinished && (
        <div className="flex flex-col items-center gap-4 p-6">
          <button
            className="cursor-pointer inline-flex items-center justify-center gap-1.5 text-sm rounded-full bg-[#FECC02] text-[#00223b] px-4 py-2 hover:bg-[#e5b800] active:bg-[#FECC02]"
            onClick={handleRestart}
          >
            Restart
          </button>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {players.map((player) => (
              <a
                key={player.name}
                href={`https://en.wikipedia.org/wiki/${encodeURIComponent(player.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              >
                <SelectPlayer player={player} />
              </a>
            ))}
          </div>
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
          <div className="flex gap-3 mt-2">
            {index > 0 && (
              <button
                className="cursor-pointer inline-flex items-center justify-center gap-1.5 text-sm rounded-full bg-[#FECC02] text-[#00223b] px-4 py-2 hover:bg-[#e5b800] active:bg-[#FECC02]"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {isShown && (
              <button
                className="cursor-pointer inline-flex items-center justify-center gap-1.5 text-sm rounded-full bg-[#FECC02] text-[#00223b] px-4 py-2 hover:bg-[#e5b800] active:bg-[#FECC02]"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
