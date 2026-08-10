export type PlayerType = {
  name: string;
  image: string;
};

export type RoundType = {
  id: string;
  correctPlayer: PlayerType;
  options: PlayerType[];
};

export type RoundResultType = {
  roundId: string;
  selectedPlayer: PlayerType;
  wasCorrect: boolean;
};

export type GameResultType = {
  currentRound: number;
  result: RoundResultType[];
  isComplete: boolean;
};



