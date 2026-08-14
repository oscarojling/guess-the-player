import { fireEvent, render, screen } from "@testing-library/react";
import Game from "./";
import { players } from "@/data/players";

describe("Game", () => {
  test("Show only start button before game starts", () => {
    render(<Game />);

    expect(screen.getByRole("button", { name: "Start" })).toBeInTheDocument();
  });
  test("Show the game when clicking on button", () => {
    render(<Game />);
    fireEvent.click(screen.getByRole("button", { name: "Start" }));
    expect(screen.getByText(/Player 1 of/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Start" }),
    ).not.toBeInTheDocument();
  });
  test("Show player name and show next button when reveal is click", () => {
    render(<Game />);
    fireEvent.click(screen.getByRole("button", { name: "Start" }));
    fireEvent.click(screen.getByRole("button", { name: "Reveal" }));

    expect(screen.getByText(players[0].name)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Reveal" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Next" })).toBeInTheDocument();
  });
  test("see next player when the next button is clicked", () => {
    render(<Game />);
    fireEvent.click(screen.getByRole("button", { name: "Start" }));
    fireEvent.click(screen.getByRole("button", { name: "Reveal" }));
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText(/Player 2 of/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Next" }),
    ).not.toBeInTheDocument();
  });
  test("complete the game after clicking through each player", () => {
    render(<Game />);
    fireEvent.click(screen.getByRole("button", { name: "Start" }));

    players.forEach(() => {
      fireEvent.click(screen.getByRole("button", { name: "Reveal" }));
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
    });

    expect(screen.getByRole("button", { name: "Restart" })).toBeInTheDocument();
    expect(screen.queryByText(/Player/i)).not.toBeInTheDocument();
  });
  test("restarts the game", () => {
    render(<Game />);
    fireEvent.click(screen.getByRole("button", { name: "Start" }));

    players.forEach(() => {
      fireEvent.click(screen.getByRole("button", { name: "Reveal" }));
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
    });

    fireEvent.click(screen.getByRole("button", { name: "Restart" }));

    expect(screen.getByText(/Player 1 of/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("Shows all players at the end of the game", () => {
    render(<Game />);
    fireEvent.click(screen.getByRole("button", { name: "Start" }));

    players.forEach(() => {
      fireEvent.click(screen.getByRole("button", { name: "Reveal" }));
      fireEvent.click(screen.getByRole("button", { name: "Next" }));
    });
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(24);
  });

  test("Restart button does not appear until finished with game", () => {
    render(<Game />);
    fireEvent.click(screen.getByRole("button", { name: "Start" }));
    expect(
      screen.queryByRole("button", { name: "Restart" }),
    ).not.toBeInTheDocument();
  });
});
