import { RoundType } from "@/types/player";
import { useState } from "react";
import SelectPlayer from "../SelectPlayer";
import AnswerButton from "../AnswerButton";

export type PlayerCardProps = {
  round: RoundType;
};

const PlayerCard = ({ round }: PlayerCardProps) => {
  const { correctPlayer, options } = round;
  const [selectedName, setSelectedName] = useState<string | null>(null);

  return (
    <div>
      <SelectPlayer player={correctPlayer} />
      {options.map((player) => (
        <AnswerButton
          key={player.name}
          player={player}
          correctPlayer={correctPlayer}
          selectedName={selectedName}
          handleClick={() => setSelectedName(player.name)}
        />
      ))}
    </div>
  );
};
