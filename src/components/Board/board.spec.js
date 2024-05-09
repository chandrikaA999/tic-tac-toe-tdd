import {render} from "@testing-library/react";
import Board from "./Board";
import React from 'react';


describe('Basic Rendering of the Board', () => {
  const {getAllByTestId} = render(<Board/>);
  const board = getAllByTestId("square-button");

  it('Should contain 9 squares for Board', () => {
      expect(board).toHaveLength(9);
  });

  it('Should contain initial value of square as null', () => {
      board.forEach((square) => {
          expect(square.textContent).toBe("");
      })
  });
  it("Should have initial status indicating X's Turn ",()=>{
    const{getByTestId}=render(<Board />);
    const status=getByTestId('status');
    expect(status).toHaveTextContent("Next player: X")})

});