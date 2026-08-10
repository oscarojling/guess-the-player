import { PlayerType } from "@/types/player";

export type AnswerButtonProps = {
  player: PlayerType;
  correctPlayer: PlayerType;
  selectedName: string | null;
  handleClick: () => void;
};

const AnswerButton = ({
  player,
  correctPlayer,
  selectedName,
  handleClick,
}: AnswerButtonProps) => {
  let buttonColor = "bg-white";

  if (selectedName !== null) {
    if (player.name === correctPlayer.name) {
      buttonColor = "bg-green-500";
    } else if (player.name === selectedName) {
      buttonColor = "bg-red-500";
    }
  }

  return (
    <button onClick={handleClick} className={buttonColor}>
      {player.name}
    </button>
  );
};

export default AnswerButton;
