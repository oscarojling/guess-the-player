import { render, screen } from "@testing-library/react";
import SelectPlayer from "./";
import { PlayerType } from "@/types/player";

const mockPlayer: PlayerType = {
  name: "Mock Player",
  image: "mock-image.jpg",
};

describe("SelectPlayer", () => {
  test("renders image", () => {
    render(<SelectPlayer player={mockPlayer} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("The image has the correct alt text", () => {
    render(<SelectPlayer player={mockPlayer} />)
    expect(screen.getByAltText(mockPlayer.name)).toBeInTheDocument()
  })
});
