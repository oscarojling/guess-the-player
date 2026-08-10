import Header from "@/components/Header";
import SelectPlayer from "@/components/SelectPlayer";
import { players } from "@/data/players";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        {players.map((player) => (
          <SelectPlayer key={player.name} player={player} />
        ))}
      </div>
    </>
  );
}
