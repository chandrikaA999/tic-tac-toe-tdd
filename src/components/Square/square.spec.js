import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Square from "./Square";
import React from 'react';

describe("<Square />", () => {
  let onSquareClickHandler;
  async function clickSquare() {
    onSquareClickHandler = jest.fn().mockName("onSquareClick");
    render(<Square onSquareClick={onSquareClickHandler} />);
    userEvent.click(screen.getByTestId("square-button"));
  }

  it("Should render the correct value recieved as props", () => {
    render(<Square value="X" />);
    expect(screen.getByTestId("square-button").textContent).toEqual("X");
  });

  it("Should call the associated function for the square button", async () => {
    await clickSquare();
    expect(onSquareClickHandler).toHaveBeenCalled();
    expect(onSquareClickHandler).toHaveBeenCalledTimes(1);
  });
});
