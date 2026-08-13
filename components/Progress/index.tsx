import { PlayerType } from "@/types/player";

export type ProgressProps = {
  current: number;
  players: PlayerType[];
};

const Progress = ({ current, players }: ProgressProps) => {
  return (
    <span>
      Player {current + 1} of {players.length}{" "}
    </span>
  );
};

export default Progress;
