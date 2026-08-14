import { PlayerType } from "@/types/player";
import Progress from ".";
import { render, screen } from "@testing-library/react";

const mockPlayers: PlayerType[] = [
  { name: "Mock Player One", image: "one.jpg" },
  { name: "Mock Player Two", image: "two.jpg" },
  { name: "Mock Player Three", image: "three.jpg" },
];

describe("Progress", () => {
  test("Shows Player 1 of 3 when current player index is 0", () => {
    render(<Progress current={0} players={mockPlayers} />);
    expect(screen.getByText("Player 1 of 3")).toBeInTheDocument();
  });
  test("Shows Player 2 of 3 when current player index is 1", () => {
    render(<Progress current={1} players={mockPlayers} />);
    expect(screen.getByText("Player 2 of 3")).toBeInTheDocument();
  });
  test("Shows Player 3 of 3 when current player index is 2", () => {
    render(<Progress current={2} players={mockPlayers} />);
    expect(screen.getByText("Player 3 of 3")).toBeInTheDocument();
  });
});
