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
      <div className="w-64 md:w-80 mx-auto">
        <SelectPlayer player={player} />
      </div>
      {!isShown ? (
        <button
          className="cursor-pointer inline-flex items-center justify-center gap-1.5 text-sm rounded-full bg-[#FECC02] text-[#00223b] px-4 py-2 hover:bg-[#e5b800] active:bg-[#FECC02] mt-3"
          onClick={onReveal}
        >
          Reveal
        </button>
      ) : (
        <p className="text-2xl font-bold text-[#00223b] text-center mt-2">
          {player.name}
        </p>
      )}
    </div>
  );
};

export default Flashcard;
