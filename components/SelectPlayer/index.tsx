import { PlayerType } from "@/types/player";
import Image from "next/image";

const SelectPlayer = ({ player }: { player: PlayerType }) => {
  return (
    <div className="rounded-2xl shadow-md p-2 w-64 md:w-150 mx-auto">
      <Image src={`/${player.image}`} alt={player.name} width={400} height={400} className="w-full object-contain rounded-xl" />
    </div>
  );
};

export default SelectPlayer;
