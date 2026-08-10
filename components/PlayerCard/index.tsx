import { RoundResultType, RoundType } from "@/types/player";
import { useState } from "react";
import SelectPlayer from "../SelectPlayer";
import AnswerButton from "../AnswerButton";

export type PlayerCardProps = {
  round: RoundType;
  nextRound: (result: RoundResultType) => void;
};

const PlayerCard = ({ round, nextRound }: PlayerCardProps) => {
  const { correctPlayer, options, id } = round;
  const [selectedName, setSelectedName] = useState<string | null>(null);

  return (
    <div>
      <SelectPlayer player={correctPlayer} />
      {options.map((player) => (
        <AnswerButton
          key={player.name}
          player={player}
          handleClick={() => setSelectedName(player.name)}
        />
      ))}
    </div>
  );
};
