import { PlayerType } from "@/types/player";

const SelectPlayer = ({ player }: { player: PlayerType }) => {
  return (
    <div className="m-auto max-w-2xl">
      <img src={`/${player.image}`} alt={player.name} />
    </div>
  );
};

export default SelectPlayer;
