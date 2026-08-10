import { PlayerType } from "@/types/player";
import SelectPlayer from "../SelectPlayer";

export type FlashcardProps = {
  player: PlayerType;
  isShown: boolean;
  onReveal: () => void;
};

const Flashcard = ({ player, isShown, onReveal }: FlashcardProps) => {
  return (
    <div>
      <SelectPlayer player={player} />
      {!isShown ? (
        <button onClick={onReveal}>Reveal</button>
      ) : (
        <p>{player.name}</p>
      )}
    </div>
  );
};

export default Flashcard
