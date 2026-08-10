import { RoundType } from "@/types/player";
import { players } from "./players";

export const rounds: RoundType[] = [
  {
    id: "1",
    correctPlayer: players[0],
    options: [players[0], players[1], players[2]],
  },
  {
    id: "2",
    correctPlayer: players[4],
    options: [players[3], players[4], players[5]],
  },
  {
    id: "3",
    correctPlayer: players[6],
    options: [players[6], players[7], players[8]],
  },
  {
    id: "4",
    correctPlayer: players[11],
    options: [players[9], players[10], players[11]],
  },
  {
    id: "5",
    correctPlayer: players[12],
    options: [players[12], players[13], players[14]],
  },
  {
    id: "6",
    correctPlayer: players[16],
    options: [players[15], players[16], players[17]],
  },
  {
    id: "7",
    correctPlayer: players[18],
    options: [players[18], players[19], players[20]],
  },
  {
    id: "8",
    correctPlayer: players[21],
    options: [players[21], players[22], players[23]],
  },
];
