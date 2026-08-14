import { PlayerType } from "@/types/player";
import Image from "next/image";

const SelectPlayer = ({ player }: { player: PlayerType }) => {
  return (
    <div className="rounded-2xl p-2 w-full aspect-square">
      <Image
        src={`/${player.image}`}
        alt={player.name}
        width={400}
        height={400}
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  );
};

export default SelectPlayer;
