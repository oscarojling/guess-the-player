import { PlayerType } from "@/types/player";

export type ProgressProps = {
  current: number;
  players: PlayerType[];
};

const GameProgress = ({ current, players }: ProgressProps) => {
  return (
    <span className="text-sm text-[#006AA7]">{`Player ${current + 1} of ${players.length}`}</span>
  );
};

export default GameProgress;
