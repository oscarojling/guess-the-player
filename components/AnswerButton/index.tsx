import { PlayerType } from "@/types/player";

export type AnswerButtonProps = {
  player: PlayerType;
  handleClick: () => void;
};

const AnswerButton = ({ player, handleClick }: AnswerButtonProps) => {
  return (
    <button onClick={handleClick} className="bg-white">
      {player.name}
    </button>
  );
};

export default AnswerButton;
